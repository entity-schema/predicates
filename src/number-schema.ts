import { TypedSchema, assertTypedSchemaOf } from './typed-schema'

export interface NumberSchema extends TypedSchema {
  type: 'number'
}

export const isNumberSchema = ( value ): value is NumberSchema => {
  try {
    assertNumberSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertNumberSchema = numberSchema => {
  assertTypedSchemaOf( numberSchema, 'number' )
}
