import { TypedSchema, assertTypedSchemaOf } from './typed-schema'

export interface BooleanSchema extends TypedSchema {
  type: 'boolean'
}

export const isBooleanSchema = ( value ): value is BooleanSchema => {
  try {
    assertBooleanSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertBooleanSchema = booleanSchema => {
  assertTypedSchemaOf( booleanSchema, 'boolean' )
}
