import { TypedSchema } from './typed-schema'

export interface IntegerSchema extends TypedSchema {
  type: 'integer'
}

export const isIntegerSchema = ( value ): value is IntegerSchema =>
  value && value.type === 'integer'
