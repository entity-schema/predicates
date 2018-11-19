import { TypedSchema, assertTypedSchemaOf } from './typed-schema'

export interface StringSchema extends TypedSchema {
  type: 'string'
}

export const isStringSchema = ( value ): value is StringSchema => {
  try {
    assertStringSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertStringSchema = stringSchema => {
  assertTypedSchemaOf( stringSchema, 'string' )
}
