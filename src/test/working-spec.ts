import * as assert from 'assert'

import {
  workingSpecSchemas, workingSpecSchemaMap
} from './fixtures/working-spec'

import {
  predicates, assertRootSchema, assertEntitySchema, assertChildEntitySchema,
  assertArraySchema, assertEntityReferenceSchema, assertConstPropertySchema,
  assertStringSchema, assertBooleanSchema, assertUniquePropertySchema,
  assertObjectSchema, assertObjectSchemaProperties, assertObjectSchemaProperty
} from '..'

describe( 'entity schema predicates', () => {
  describe( 'working spec', () => {
    describe( 'ArraySchema', () => {
      const { brand, company, detail, product } = workingSpecSchemaMap

      const entities = [ brand, company, detail, product ]

      entities.forEach( schema => {
        it( `${ schema.title }.properties.tags is ArraySchema`, () => {
          assert( predicates.arraySchema( schema.properties[ 'tags' ] ) )
        } )

        it( `assertArraySchema ${ schema.title }.properties.tags`, () => {
          assertArraySchema( schema.properties[ 'tags' ], schema.title )
        } )
      } )
    } )

    describe( 'BooleanSchema', () => {
      const { isActive } = workingSpecSchemaMap

      it( 'isActive is BooleanSchema', () => {
        assert( predicates.booleanSchema( isActive ) )
      } )

      it( 'assertBooleanSchema isActive', () => {
        assertBooleanSchema( isActive, 'isActive' )
      } )
    } )

    describe( 'ChildEntitySchema', () => {
      const { brand, detail, product } = workingSpecSchemaMap

      const childEntities = [ brand, detail, product ]

      childEntities.forEach( schema => {
        it( `${ schema.title } is ChildEntitySchema`, () => {
          assert( predicates.childEntitySchema( schema ) )
        } )

        it( `assertChildEntitySchema ${ schema.title }`, () => {
          assertChildEntitySchema( schema, schema.title )
        } )
      } )
    } )

    describe( 'ConstReferenceSchema', () => {
      const { brandReference, companyReference, productReference } = workingSpecSchemaMap

      const entityReferences = [
        brandReference, companyReference, productReference
      ]

      entityReferences.forEach( schema => {
        it( `${ schema.title }.properties.entityType is EntityReferenceSchema`, () => {
          assert( predicates.constPropertySchema( schema.properties.entityType ) )
        } )

        it( `assertConstPropertySchema ${ schema.title }`, () => {
          assertConstPropertySchema( schema.properties.entityType, schema.title )
        } )
      } )
    } )

    describe( 'EntitySchema', () => {
      const { brand, company, detail, getUri, product } = workingSpecSchemaMap

      const entities = [ brand, company, detail, getUri, product ]

      entities.forEach( schema => {
        it( `${ schema.title } is EntitySchema`, () => {
          assert( predicates.entitySchema( schema ) )
        } )

        it( `assertEntitySchema ${ schema.title }`, () => {
          assertEntitySchema( schema, schema.title )
        } )
      } )
    } )

    describe( 'EntityReferenceSchema', () => {
      const { brandReference, companyReference, productReference } = workingSpecSchemaMap

      const entityReferences = [
        brandReference, companyReference, productReference
      ]

      entityReferences.forEach( schema => {
        it( `${ schema.title } is EntityReferenceSchema`, () => {
          assert( predicates.entityReferenceSchema( schema ) )
        } )

        it( `assertEntityReferenceSchema ${ schema.title }`, () => {
          assertEntityReferenceSchema( schema, schema.title )
        } )
      } )
    } )

    describe( 'ObjectSchema', () => {
      const { brand, company, detail, getUri, product } = workingSpecSchemaMap

      const entities = [ brand, company, detail, getUri, product ]

      entities.forEach( schema => {
        it( `${ schema.title } is ObjectSchema`, () => {
          assert( predicates.objectSchema( schema ) )
        } )

        it( `assertObjectSchema ${ schema.title }`, () => {
          assertObjectSchema( schema, schema.title )
        } )

        it( `assertObjectSchemaProperties ${ schema.title }`, () => {
          assertObjectSchemaProperties( schema )
        } )

        it( `assertObjectSchemaProperty ${ schema.title }`, () => {
          assertObjectSchemaProperty( schema, 'name' )
        } )
      } )
    } )

    describe( 'RootSchema', () => {
      workingSpecSchemas.forEach( schema => {
        it( `${ schema.title } is RootSchema`, () => {
          assert( predicates.rootSchema( schema ) )
        } )

        it( `assertRootSchema ${ schema.title }`, () => {
          assertRootSchema( schema, schema.title )
        } )
      } )
    } )

    describe( 'StringSchema', () => {
      const { name } = workingSpecSchemaMap

      it( 'name is StringSchema', () => {
        assert( predicates.stringSchema( name ) )
      } )

      it( 'assertStringSchema name', () => {
        assertStringSchema( name, 'name' )
      } )
    } )

    describe( 'UniquePropertySchema', () => {
      const { name } = workingSpecSchemaMap

      it( 'name is UniquePropertySchema', () => {
        assert( predicates.uniquePropertySchema( name ) )
      } )

      it( 'assertUniquePropertySchema name', () => {
        assertUniquePropertySchema( name, 'name' )
      } )
    } )

    describe( 'anySchema predicate', () => {
      workingSpecSchemas.forEach( schema => {
        it( `${ schema.title } is anySchema`, () => {
          assert( predicates.anySchema( schema ) )
        } )
      } )
    } )
  } )
} )
