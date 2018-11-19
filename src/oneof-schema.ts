import { is } from '@mojule/is'
import { Subschema, isSubschema } from './subschema'
import { isNonEmptyString, isNonEmptyArray } from './util'

export interface OneOfSchema {
  title: string
  oneOf: Subschema[]
}

export const isOneOfSchema = ( value ) : value is OneOfSchema => {
  try {
    assertOneOfSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertOneOfSchema = ( oneOfSchema, name = 'OneOfSchema' ) => {
  if ( !is.object( oneOfSchema ) )
    throw TypeError( `${ name } must be an object` )

  if ( !isNonEmptyString( oneOfSchema.title ))
    throw TypeError( `${ name }.title must be a non-empty string` )

  if( !isNonEmptyArray( oneOfSchema.oneOf ) )
    throw TypeError( `${ name }.oneOf should be a non-empty array` )

  if( !oneOfSchema.oneOf.every( isSubschema ) )
    throw TypeError( `${ name }.oneOf should be an array of Subschema` )
}
