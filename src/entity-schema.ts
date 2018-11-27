import { ObjectSchema, assertObjectSchema } from './object-schema'
import { isNonEmptyString } from './util'
import { RootSchema } from './root-schema'

export interface EntityFormatSchema {
  format: 'entity-schema'
}

export type EntitySchema = EntityFormatSchema & RootSchema & ObjectSchema

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
