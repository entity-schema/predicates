import { assertTypedSchemaOf } from './typed-schema'
import { BooleanSchema } from './types'

export const isBooleanSchema = ( value ): value is BooleanSchema => {
  try {
    assertBooleanSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertBooleanSchema = (
  booleanSchema, name = 'BooleanSchema'
) => {
  assertTypedSchemaOf( booleanSchema, 'boolean', name )
}
