import {
  print,
  isScalarType,
  GraphQLSchema,
  OperationTypeNode,
  FieldNode,
  ArgumentNode,
} from 'graphql'

import {
  t,
  documentApi,
  DocumentApi,
  TypeApi,
  FieldDefinitionApi,
} from 'graphql-extra'

let cachedSchema: GraphQLSchema
/**
 * Checks whether a type is scalar or not.
 * NOTE: "Enum" values are not counted as scalars, you should explicitly handle them.
 */
function isScalar(doc: DocumentApi, type: TypeApi) {
  if (!cachedSchema) cachedSchema = doc.toSchema()
  const schemaType = cachedSchema.getType(type.getTypename())
  return isScalarType(schemaType)
}

// WARNING: HERE BE DRAGONS. Recursive code.
// If "maxDepth" is greater than "1", this will keep recursing non-scalar fields
// to add the next level of their selection sets to the operation node
const selectFieldsRecursive = (
  doc: DocumentApi,
  field: FieldDefinitionApi,
  depth = 1,
  localDepth = 0
) => {
  //if (!isScalar(doc, field.getType()) && localDepth == depth) return false
  return t.field({
    name: field.getName(),
    selections: ((): FieldNode[] => {
      // If the current depth of iteration is at max depth, return no selections
      if (localDepth >= depth) return []
      // This is a bit absurd, I know. Have to use custom function to check whether field is scalar.
      // Because calling "doc.getType(field.getTypename())" if the type is scalar will break with:
      // "GraphQLError: cannot find 'String' in definitions of Document because it does not exist"
      // Even though you'd think calling "parentType.isScalarType()" would work, but it only checks CUSTOM scalars
      if (isScalar(doc, field.getType())) return []
      const parentType = doc.getType(field.getTypename())
      if (!parentType.isObjectType()) return []

      return parentType
        .getFields()
        .filter((it) => {
          // If the next depth is the last, make sure not to select a non-scalar field (then the selection set for that field would be empty)
          if (localDepth + 1 == depth) return isScalar(doc, it.getType())
          else return true
        })
        .map((it) => selectFieldsRecursive(doc, it, depth, localDepth + 1))
    })(),
    arguments: ((): ArgumentNode[] => {
      // Not sure how to/if even possible to handle arguments for nested fields
      // For now, just forcing it to only give args to top-level operation
      if (localDepth > 0) return []
      return field.getArguments().map((it) =>
        t.arg({
          name: it.getName(),
          value: t.value.variable(it.getName()),
        })
      )
    })(),
  })
}

/**
 * Converts a query/mutation/subscription field definition into a GraphQL query operation definition node.
 * The node will be an operation of the same name as it's field with all the arguments present and scalar fields in selection set.
 * The resulting node can be converted to a string with `print(result)` and used for querying or codegen.
 *
 * @param operation Operation type, one of: `query` | `mutation` | `subscription`
 * @param doc The `DocumentApi` object containing the current schema
 * @param field The FieldDefinitionApi object coming from `query_root`, `mutation_root`, or `subscription_root`
 *
 * @example
 * import { schema } from './schemaString'
 * import { print } from 'graphql
 * import { documentApi } from 'graphql-extra'
 *
 * const doc = documentApi().addSDL(schema)
 * const queryFields = doc.getQuery().getFields()
 *
 * for (let field of queryFields) {
 *   const query = generateOperationNode('query', doc, field)
 *   console.log(print(query))
 * }
 */
function generateOperationNode(
  operation: OperationTypeNode,
  doc: DocumentApi,
  field: FieldDefinitionApi,
  prefix?: string,
  maxDepth = 1
) {
  const operationFields = selectFieldsRecursive(doc, field, maxDepth)
  const selectionSet = operationFields.selectionSet?.selections
  // If node has no selections generated, don't print this node at all
  if (!selectionSet?.length) return

  const query = t.operation({
    operation: operation,
    name: prefix ? prefix + field.getName() : field.getName(),
    selections: operationFields ? [operationFields] : [],
    variableDefinitions: field.getArguments().map((it) =>
      t.variable({
        type: it.getType().node,
        variable: it.getName(),
      })
    ),
  })
  return query
}

interface GenerateOperationsParams {
  type: OperationTypeNode
  schema: string
  prefix?: string
  depth?: number
}

export function generateAllOperations(params: GenerateOperationsParams) {
  const { type, schema, prefix } = params
  const depth = params.depth || 1
  const doc = documentApi().addSDL(schema)
  switch (type) {
    case 'query': {
      return doc
        .getQuery()
        ?.getFields()
        .map((field) => {
          const node = generateOperationNode('query', doc, field, prefix, depth)
          if (node) return print(node)
        })
        .join('\n\n')
    }
    case 'mutation': {
      return doc
        .getMutation()
        ?.getFields()
        .map((field) => {
          // prettier-ignore
          const node = generateOperationNode('mutation', doc, field, prefix, depth)
          if (node) return print(node)
        })
        .join('\n\n')
    }
    case 'subscription': {
      return doc
        .getSubscription()
        ?.getFields()
        .map((field) => {
          // prettier-ignore
          const node = generateOperationNode('subscription', doc, field, prefix, depth)
          if (node) return print(node)
        })
        .join('\n\n')
    }
  }
}
