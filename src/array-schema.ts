import { ArraySchema } from './types'
import { assertTypedSchemaOf } from './typed-schema'
import { assertSubschema } from './subschema'

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
