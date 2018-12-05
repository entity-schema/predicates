import { is } from '@mojule/is'
import { isNonEmptyString } from './util'
import { RefSchema } from './types'

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
