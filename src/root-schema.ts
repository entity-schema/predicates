import { TypedSchema, assertTypedSchema } from './typed-schema'
import { isNonEmptyString } from './util'

export interface RootSchema extends TypedSchema {
  id: string
}

export const isRootSchema = ( value ) : value is RootSchema => {
  try {
    assertRootSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertRootSchema = ( rootSchema, name = 'RootSchema' ) => {
  assertTypedSchema( rootSchema, name )

  if( !isNonEmptyString( rootSchema.id ) )
    throw TypeError( `${ name }.id should be a non-empty string` )
}
