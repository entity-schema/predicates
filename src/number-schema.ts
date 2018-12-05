import { assertTypedSchemaOf } from './typed-schema'
import { NumberSchema } from './types'

export const isNumberSchema = ( value ): value is NumberSchema => {
  try {
    assertNumberSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertNumberSchema = ( numberSchema, name = 'NumberSchema' ) => {
  assertTypedSchemaOf( numberSchema, 'number', name )
}
