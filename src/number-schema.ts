import { TypedSchema } from './typed-schema'

export interface NumberSchema extends TypedSchema {
  type: 'number'
}

export const isNumberSchema = ( value ): value is NumberSchema =>
  value && value.type === 'number'
