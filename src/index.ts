import * as fs from 'fs'
import * as path from 'path'

import Command, { flags } from '@oclif/command'
import { generateAllOperations } from './utils/queryGenerator'

const isInteractiveSession = process.stdin.isTTY

async function read(stream: NodeJS.ReadStream | fs.ReadStream) {
  const chunks: Uint8Array[] = []
  for await (const chunk of stream) chunks.push(chunk as Uint8Array)
  return Buffer.concat(chunks).toString('utf8')
}

class GraphqlQueryGenerator extends Command {
  static description = 'Automatically generate GraphQL operations from a schema'
  static examples = [
    '# Pipe from stdin:',
    '$ cat my-schema.graphql | graphql-query-generator --all',
    '$ cat my-schema.graphql | graphql-query-generator --operations queries mutations --depth 2',
    '# Or use a filepath to a schema:',
    '$ graphql-query-generator --all --schema=./my-schema.graphql',
    '---------------------------------------------------------------------------',
    '# 1. Use "graphqurl" to save introspection schema to file:',
    '$ npx gq http://localhost:8080/v1/graphql --introspect > schema.graphql',
    '',
    '# 2. Use "graphql-query-generator" to create queries, mutations, and subscriptions for every type in the schema:',
    '$ cat schema.graphql | graphql-query-generator --all > queries.graphql',
    '',
    '# 3. Use "graphql-code-generator" to generate Typescript types and a query client for every operation:',
    '$ npx graphql-code-generator',
  ]

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    schema: flags.string({
      char: 's',
      description:
        'Optional file path to a GraphQL schema from the current directory, if not piping through stdin',
    }),
    depth: flags.integer({
      char: 'd',
      default: 1,
      description:
        'Maximum depth for nested operation selection sets to generate.',
    }),
    all: flags.boolean({
      default: false,
      exclusive: ['operations'],
      description:
        'Generates all operations, equivalent to setting "--operations query mutation subscription"',
    }),
    operations: flags.string({
      char: 'o',
      options: ['query', 'mutation', 'subscription'],
      exclusive: ['all'],
      multiple: true,
    }),
    'query-prefix': flags.string({
      required: false,
    }),
    'mutation-prefix': flags.string({
      required: false,
    }),
    'subscription-prefix': flags.string({
      required: false,
    }),
  }

  async run() {
    const { flags } = this.parse(GraphqlQueryGenerator)

    // Bad part of having a flexible CLI -- need to double check stdin and arg values
    if (isInteractiveSession)
      console.assert(
        flags.schema,
        'No data piped through stdin, and no --schema flag filename was passed'
      )

    // Interactive session = data piped from "stdin" possibly
    const inputStream = isInteractiveSession
      ? fs.createReadStream(path.join(process.cwd(), flags.schema as string))
      : process.stdin

    const schema = await read(inputStream)

    let results = ''

    if (flags.all || flags.operations.includes('query'))
      results += generateAllOperations({
        type: 'query',
        schema,
        depth: flags.depth,
        prefix: flags['query-prefix'],
      })

    if (flags.all || flags.operations.includes('mutation'))
      results += generateAllOperations({
        type: 'mutation',
        schema,
        depth: flags.depth,
        prefix: flags['mutation-prefix'],
      })

    if (flags.all || flags.operations.includes('subscription'))
      results += generateAllOperations({
        type: 'subscription',
        schema,
        depth: flags.depth,
        prefix: flags['subscription-prefix'],
      })

    this.log(results)
  }
}

export = GraphqlQueryGenerator
