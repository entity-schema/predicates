import { isRefSchema } from './ref-schema'
import { isTypedSchema } from './typed-schema'
import { isOneOfSchema } from './oneof-schema'
import { Subschema } from './types'

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
