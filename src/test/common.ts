import * as assert from 'assert'

import {
  fileSchemas, fileSchemaMap
} from './fixtures/common/files'

import {
  securitySchemas, securitySchemaMap
} from './fixtures/common/security'

import {
  predicates, assertRootSchema, assertEntitySchema, assertChildEntitySchema,
  assertArraySchema, assertEntityReferenceSchema, assertConstPropertySchema,
  assertStringSchema, assertBooleanSchema, assertUniquePropertySchema,
  assertSecuritySchema, assertIntegerSchema, assertSecuritySchemaRoles
} from '..'

describe( 'entity schema predicates', () => {
  describe( 'common', () => {
    describe( 'files', () => {
      describe( 'IntegerSchema', () => {
        const { fileMeta } = fileSchemaMap

        it( 'fileMeta.properties.size is IntegerSchema', () => {
          assert( predicates.integerSchema( fileMeta.properties.size ) )
        })

        it( 'assertIntegerSchema fileMeta.properties.size', () => {
          assertIntegerSchema(
            fileMeta.properties.size,
            'fileMeta.properties.size'
          )
        })
      })

      describe( 'RootSchema', () => {
        fileSchemas.forEach( schema => {
          it( `${ schema.title } is RootSchema`, () => {
            assert( predicates.rootSchema( schema ) )
          } )

          it( `assertRootSchema ${ schema.title }`, () => {
            assertRootSchema( schema, schema.title )
          } )
        } )
      } )
    } )

    describe( 'security', () => {
      describe( 'RootSchema', () => {
        securitySchemas.forEach( schema => {
          it( `${ schema.title } is RootSchema`, () => {
            assert( predicates.rootSchema( schema ) )
          } )

          it( `assertRootSchema ${ schema.title }`, () => {
            assertRootSchema( schema, schema.title )
          } )
        } )
      } )

      describe( 'SecuritySchema', () => {
        const { apiKey, user } = securitySchemaMap

        const securitySchemas = [ apiKey, user ]

        securitySchemas.forEach( schema => {
          it( `${ schema.title } is SecuritySchema`, () => {
            assert( predicates.securitySchema( schema ) )
          } )

          it( `assertSecuritySchema ${ schema.title }`, () => {
            assertSecuritySchema( schema, schema.title )
          } )

          it( `assertSecuritySchemaRoles ${ schema.title }`, () => {
            assertSecuritySchemaRoles( schema, 'create' )
          })
        } )
      } )
    } )
  } )
} )
