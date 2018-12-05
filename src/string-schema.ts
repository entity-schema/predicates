import { assertTypedSchemaOf } from './typed-schema'
import { StringSchema } from './types'

export const isStringSchema = ( value ): value is StringSchema => {
  try {
    assertStringSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertStringSchema = ( stringSchema, name = 'StringSchema' ) => {
  assertTypedSchemaOf( stringSchema, 'string', name )
}
