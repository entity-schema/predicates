import { is } from '@mojule/is'
import { assertStringSchema } from './string-schema'
import { isNonEmptyArray } from './util'
import { EnumSchema } from './types'

export const isEnumSchema = ( value ) : value is EnumSchema => {
  try {
    assertEnumSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertEnumSchema = ( enumSchema, name = 'EnumSchema' ) => {
  assertStringSchema( enumSchema, name )

  if( !isNonEmptyArray<string>( enumSchema.enum ) )
    throw TypeError( `${ name }.enum should be a non-empty array` )

  if ( !enumSchema.enum.every( is.string ) )
    throw TypeError( `${ name }.enum should be an array of strings` )

  if ( !isNonEmptyArray<string>( enumSchema._enumTitles ) )
    throw TypeError( `${ name }._enumTitles should be a non-empty array` )

  if ( !enumSchema._enumTitles.every( is.string ) )
    throw TypeError( `${ name }._enumTitles should be an array of strings` )

  if ( enumSchema.enum.length !== enumSchema._enumTitles.length )
    throw TypeError(
      `${ name }.enum and ${ name }._enumTitles should be the same length`
    )
}
