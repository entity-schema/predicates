import { is } from '@mojule/is'
import { StringSchema, assertStringSchema } from './string-schema'

export interface ConstPropertySchema extends StringSchema {
  enum: [ string ],
  readOnly: true,
  default: string
}

export const isConstPropertySchema =
  ( value ) : value is ConstPropertySchema => {
    try {
      assertConstPropertySchema( value )
    } catch {
      return false
    }

    return true
  }

export const assertConstPropertySchema = (
  constPropertySchema, name = 'ConstPropertySchema'
) => {
  assertStringSchema( constPropertySchema )

  if ( !is.array( constPropertySchema.enum ) )
    throw TypeError( `${ name }.enum should be an array` )

  if ( !is.string( constPropertySchema.enum[ 0 ] ) )
    throw TypeError( `${ name }.enum[0] should be a string` )

  if ( !is.string( constPropertySchema.default ) )
    throw TypeError( `${ name }.default should be a string` )

  if ( constPropertySchema.enum[ 0 ] !== constPropertySchema.default )
    throw TypeError(
      `${ name }.enum[0] should match ${ name }.default`
    )

  if( constPropertySchema.readOnly !== true )
    throw TypeError( `${ name }.readOnly should be true` )
}
