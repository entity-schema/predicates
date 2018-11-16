import { RefSchema, isRefSchema } from './ref-schema'
import { TypedSchema, isTypedSchema } from './typed-schema'

export type Subschema = RefSchema | TypedSchema

export const isSubschema = ( value ) : value is Subschema => {
  if( isRefSchema( value ) ) return true

  if( isTypedSchema( value ) ) return true

  return false
}
