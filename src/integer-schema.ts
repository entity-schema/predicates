import { assertTypedSchemaOf } from './typed-schema'
import { IntegerSchema } from './types'

export const isIntegerSchema = ( value ): value is IntegerSchema => {
  try {
    assertIntegerSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertIntegerSchema = (
  integerSchema, name = 'IntegerSchema'
) => {
  assertTypedSchemaOf( integerSchema, 'integer', name )
}
