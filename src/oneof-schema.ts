import { is } from '@mojule/is'
import { Subschema, isSubschema } from './subschema'
import { isNonEmptyString } from './util'

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

  if( !is.array( oneOfSchema.oneOf ) )
    throw TypeError( `${ name }.oneOf should be an array` )

  if( !oneOfSchema.oneOf.every( isSubschema ) )
    throw TypeError( `${ name }.oneOf should be an array of Subschema` )
}
