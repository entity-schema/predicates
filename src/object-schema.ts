import { Subschema, assertSubschema } from './subschema'
import { isEntitySchema } from './entity-schema'
import { TypedSchema, assertTypedSchemaOf } from './typed-schema'
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
  } catch {
    return false
  }

  return true
}

export const assertObjectSchema = objectSchema => {
  assertTypedSchemaOf( objectSchema, 'object' )

  assert.strictEqual(
    objectSchema.additionalProperties, false,
    'ObjectSchema.additionalProperties should be false'
  )

  assertObjectSchemaProperties( objectSchema )
}

export const assertObjectSchemaProperties = objectSchema => {
  assert(
    is.object( objectSchema.properties ),
    'ObjectSchema.properties should be an object'
  )

  Object.keys( objectSchema.properties ).forEach( key => {
    assertObjectSchemaProperty( objectSchema, key )
  })
}

export const assertObjectSchemaProperty = ( objectSchema, key: string ) => {
  assertSubschema( objectSchema.properties[ key ] )
  assert(
    !isEntitySchema( objectSchema.properties[ key ] ),
    `ObjectSchema.properties['${ key }'] should not be an EntitySchema`
  )
}
