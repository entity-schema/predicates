import { is } from '@mojule/is'
import { isTypedSchema, TypedSchema } from './typed-schema'

export interface RootSchema extends TypedSchema {
  id: string
}

export const isRootSchema = ( value ) : value is RootSchema => {
  if( !isTypedSchema( value ) ) return false
  if( !is.string( value.id ) ) return false

  return true
}
