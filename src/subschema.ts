import { RefSchema, isRefSchema } from './ref-schema'
import { TypedSchema, isTypedSchema } from './typed-schema'
import { OneOfSchema, isOneOfSchema } from './oneof-schema'

export type Subschema = RefSchema | TypedSchema | OneOfSchema

export const isSubschema = ( value ) : value is Subschema => {
  if( isRefSchema( value ) ) return true

  if( isTypedSchema( value ) ) return true

  if( isOneOfSchema( value ) ) return true

  return false
}

export const assertSubschema = ( value, name = 'Subschema' ) => {
  if ( !isSubschema( value ) )
    throw TypeError(
      `${ name } should be RefSchema, TypedSchema or OneOfSchema`
    )
}
