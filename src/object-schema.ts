import { Subschema, isSubschema } from './subschema'
import { isEntitySchema } from './entity-schema'
import { TypedSchema, isTypedSchema } from './typed-schema'
import * as assert from 'assert'
import { is } from '@mojule/is';

export interface ObjectSchemaProperties {
  [ name: string ]: Subschema
}

export interface ObjectSchema extends TypedSchema {
  type: 'object'
  properties: ObjectSchemaProperties
  additionalProperties: false
}

export const isObjectSchema = ( value ) : value is ObjectSchema => {
  try {
    assertObjectSchema( value )

    return true
  } catch {
    return false
  }
}

export const assertObjectSchema = objectSchema => {
  assert( isTypedSchema( objectSchema ), 'ObjectSchema should be a TypedSchema' )

  assert.strictEqual( objectSchema.type, 'object', `ObjectSchema.type should be 'object'` )
  assert.strictEqual( objectSchema.additionalProperties, false, 'ObjectSchema.additionalProperties should be false' )

  assertObjectSchemaProperties( objectSchema )
}

export const assertObjectSchemaProperties = objectSchema => {
  assert( is.object( objectSchema.properties ), 'ObjectSchema.properties should be an object' )

  Object.keys( objectSchema.properties ).forEach( key => {
    assertObjectSchemaProperty( objectSchema, key )
  })
}

export const assertObjectSchemaProperty = ( objectSchema, key: string ) => {
  assert( isSubschema( objectSchema.properties[ key ] ), `ObjectSchema.properties['${ key }'] should be a SubSchema` )
  assert( !isEntitySchema( objectSchema.properties[ key ] ), `ObjectSchema.properties['${ key }'] should not be an EntitySchema` )
}
