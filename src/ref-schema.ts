import { JSONSchema4 } from 'json-schema'
import { is } from '@mojule/is'
import { isNonEmptyString } from './util'

export interface RefSchema extends JSONSchema4 {
  $ref: string
}

export const isRefSchema = ( value ) : value is RefSchema => {
  try {
    assertRefSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertRefSchema = ( refSchema, name = 'RefSchema' ) => {
  if( !is.object( refSchema ) )
    throw TypeError( `${ name } should be an object` )

  if( !isNonEmptyString( refSchema.$ref ) )
    throw TypeError( `${ name }.$ref should be a non-empty string` )
}
