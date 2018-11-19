import { TypedSchema, assertTypedSchemaOf } from './typed-schema'

export interface IntegerSchema extends TypedSchema {
  type: 'integer'
}

export const isIntegerSchema = ( value ): value is IntegerSchema => {
  try {
    assertIntegerSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertIntegerSchema = integerSchema => {
  assertTypedSchemaOf( integerSchema, 'integer' )
}
