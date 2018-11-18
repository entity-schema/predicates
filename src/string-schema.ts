import { TypedSchema, isTypedSchema } from './typed-schema'

export interface StringSchema extends TypedSchema {
  type: 'string'
}

export const isStringSchema = ( value ): value is StringSchema => {
  if( !isTypedSchema( value ) ) return false

  if( value.type !== 'string' ) return false

  return true
}

