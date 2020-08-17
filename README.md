graphql-operation-generator
=======================

Automatically generate GraphQL operations from a schema

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/graphql-operation-generator.svg)](https://npmjs.org/package/graphql-operation-generator)
[![Downloads/week](https://img.shields.io/npm/dw/graphql-query-generator.svg)](https://npmjs.org/package/graphql-operation-generator)
[![License](https://img.shields.io/npm/l/graphql-query-generator.svg)](https://github.com/GavinRay97/graphql-operation-generator/blob/master/package.json)

- [graphql-operation-generator](#graphql-operation-generator)
- [Usage](#usage)


# Usage
```sh-session
$ npm install -g graphql-operation-generator
$ graphql-operation-generator --help
Automatically generate GraphQL operations from a schema

USAGE
  $ graphql-operation-generator

OPTIONS
  -d, --depth=depth                             [default: 1] Maximum depth for nested operation selection sets to generate.
  -h, --help                                    show CLI help
  -o, --operations=query|mutation|subscription
  -s, --schema=schema                           Optional file path to a GraphQL schema from the current directory, if not piping through stdin
  -v, --version                                 show CLI version
  --all                                         Generates all operations, equivalent to setting "--operations query mutation subscription"
  --mutation-prefix=mutation-prefix
  --query-prefix=query-prefix
  --subscription-prefix=subscription-prefix

EXAMPLES
  # Pipe from stdin:
  $ cat my-schema.graphql | graphql-operation-generator --all
  $ cat my-schema.graphql | graphql-operation-generator --operations queries mutations --depth 2
  # Or use a filepath to a schema:
  $ graphql-query-generator --all --schema=./my-schema.graphql
  ---------------------------------------------------------------------------
  # 1. Use "graphqurl" to save introspection schema to file:
  $ npx gq http://localhost:8080/v1/graphql --introspect > schema.graphql

  # 2. Use "graphql-operation-generator" to create queries, mutations, and subscriptions for every type in the schema:
  $ cat schema.graphql | graphql-operation-generator --all > queries.graphql

  # 3. Use "graphql-code-generator" to generate Typescript types and a query client for every operation:
  $ npx graphql-code-generator
```
