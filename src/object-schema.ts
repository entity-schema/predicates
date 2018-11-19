import { is } from '@mojule/is'
import { Subschema, assertSubschema } from './subschema'
import { isEntitySchema } from './entity-schema'
import { TypedSchema, assertTypedSchemaOf } from './typed-schema'

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

export const assertObjectSchema = ( objectSchema, name = 'ObjectSchema' ) => {
  assertTypedSchemaOf( objectSchema, 'object', name )

  if( objectSchema.additionalProperties !== false )
    throw TypeError( `${ name }.additionalProperties should be false` )

  assertObjectSchemaProperties( objectSchema, name )
}

export const assertObjectSchemaProperties = (
  objectSchema, name = 'ObjectSchema'
) => {
  if( !is.object( objectSchema.properties ) )
    throw TypeError( `${ name }.properties should be an object` )

  Object.keys( objectSchema.properties ).forEach( key => {
    assertObjectSchemaProperty( objectSchema, key, name )
  })
}

export const assertObjectSchemaProperty = (
  objectSchema, key: string, name = 'ObjectSchema'
) => {
  assertSubschema(
    objectSchema.properties[ key ],
    `${ name }.properties['${ key }']`
  )

  if ( isEntitySchema( objectSchema.properties[ key ] ) )
    throw TypeError(
      `${ name }.properties['${ key }'] should not be an EntitySchema`
    )
}
