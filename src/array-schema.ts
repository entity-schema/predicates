import { Subschema, assertSubschema } from './subschema'
import { TypedSchema, assertTypedSchemaOf } from './typed-schema'

export interface ArraySchema extends TypedSchema {
  type: 'array'
  items: Subschema
}

export const isArraySchema = ( value ): value is ArraySchema => {
  try {
    assertArraySchema( value )
  } catch {
    return false
  }

  return true
}

export const assertArraySchema = ( arraySchema, name = 'ArraySchema' ) => {
  assertTypedSchemaOf( arraySchema, 'array', name )

  assertSubschema( arraySchema.items, `${ name }.items` )
}
