import { assertObjectSchema } from './object-schema'
import { isNonEmptyString } from './util'
import { EntitySchema } from './types'

export const isEntitySchema = ( value ) : value is EntitySchema => {
  try {
    assertEntitySchema( value )
  } catch {
    return false
  }

  return true
}

export const assertEntitySchema = ( entitySchema, name = 'EntitySchema' ) => {
  assertObjectSchema( entitySchema, name )

  if ( !isNonEmptyString( entitySchema.id ) )
    throw TypeError( `${ name }.id must be a non-empty string` )

  if( entitySchema.format !== 'entity-schema' )
    throw TypeError( `${ name }.format should be 'entity-schema'` )
}
