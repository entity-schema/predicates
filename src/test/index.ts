import * as assert from 'assert'

import { passSchemas, passSchemaMap } from './fixtures/pass'

import {
  predicates, assertRootSchema, assertEntitySchema, assertChildEntitySchema,
  assertArraySchema, assertEntityReferenceSchema, assertConstPropertySchema,
  assertStringSchema, assertBooleanSchema, assertUniquePropertySchema,
  assertEnumSchema, assertIntegerSchema, assertNumberSchema, assertObjectSchema,
  assertOneOfSchema, assertSubschema
} from '..'

import { failSchemaMap } from './fixtures/fail'

describe( 'entity schema predicates', () => {
  describe( 'pass', () => {
    const { enumPass, numberPass, oneOfPass } = passSchemaMap

    describe( 'EnumSchema', () => {
      it( 'isEnumSchema', () => {
        assert( predicates.enumSchema( enumPass ) )
      } )

      it( 'assertEnumSchema', () => {
        assertEnumSchema( enumPass, 'enumPass' )
      } )
    } )

    describe( 'NumberSchema', () => {
      it( 'isNumberSchema', () => {
        assert( predicates.numberSchema( numberPass ) )
      } )

      it( 'assertNumberSchema', () => {
        assertNumberSchema( numberPass, 'numberPass' )
      } )
    } )

    describe( 'OneOfSchema', () => {
      it( 'isOneOfSchema', () => {
        assert( predicates.oneOfSchema( oneOfPass ) )
      } )

      it( 'assertOneOfSchema', () => {
        assertOneOfSchema( oneOfPass, 'oneOfPass' )
      } )
    } )

    describe( 'SubSchema', () => {
      it( 'isSubschema', () => {
        assert( predicates.subschema( oneOfPass ) )
      } )

      it( 'assertSubschema', () => {
        assertSubschema( oneOfPass, 'oneOfPass' )
      } )
    })
  })

  describe( 'fail', () => {
    const {
      arrayFail, booleanFail, childEntityFail, constPropertyFail, entityFail,
      enumFail, integerFail, numberFail, objectFail, oneOfFail, rootFail
    } = failSchemaMap

    const assertFails = ( name: string, schema, predicate: ( value ) => boolean, assertion: ( value ) => void ) => {
      describe( name, () => {
        schema.anyOf.forEach( schema => {
          it( `fails predicate because ${ schema.description }`, () => {
            assert( !predicate( schema ) )
          } )

          it( `assert throws because ${ schema.description }`, () => {
            assert.throws(
              () => assertion( schema ),
              {
                name: 'TypeError',
                message: schema._expect
              }
            )
          } )
        } )
      } )
    }

    assertFails(
      'ArraySchema',
      arrayFail,
      predicates.arraySchema,
      assertArraySchema
    )

    assertFails(
      'BooleanSchema',
      booleanFail,
      predicates.booleanSchema,
      assertBooleanSchema
    )

    assertFails(
      'ChildEntitySchema',
      childEntityFail,
      predicates.childEntitySchema,
      assertChildEntitySchema
    )

    assertFails(
      'ConstPropertySchema',
      constPropertyFail,
      predicates.constPropertySchema,
      assertConstPropertySchema
    )

    assertFails(
      'EntitySchema',
      entityFail,
      predicates.entitySchema,
      assertEntitySchema
    )

    assertFails(
      'EnumSchema',
      enumFail,
      predicates.enumSchema,
      assertEnumSchema
    )

    assertFails(
      'IntegerSchema',
      integerFail,
      predicates.integerSchema,
      assertIntegerSchema
    )

    assertFails(
      'NumberSchema',
      numberFail,
      predicates.numberSchema,
      assertNumberSchema
    )

    assertFails(
      'ObjectSchema',
      objectFail,
      predicates.objectSchema,
      assertObjectSchema
    )

    assertFails(
      'OneOfSchema',
      oneOfFail,
      predicates.oneOfSchema,
      assertOneOfSchema
    )

    assertFails(
      'RootSchema',
      rootFail,
      predicates.rootSchema,
      assertRootSchema
    )
  })
})
