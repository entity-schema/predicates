import { is } from '@mojule/is'
import { StringSchema, assertStringSchema } from './string-schema'
import { isNonEmptyArray } from './util';

export interface EnumSchema extends StringSchema {
  enum: string[]
  _esTitles: string[]
}

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

  if ( !isNonEmptyArray<string>( enumSchema._esTitles ) )
    throw TypeError( `${ name }._esTitles should be a non-empty array` )

  if ( !enumSchema._esTitles.every( is.string ) )
    throw TypeError( `${ name }._esTitles should be an array of strings` )

  if ( enumSchema.enum.length !== enumSchema._esTitles.length )
    throw TypeError(
      `${ name }.enum and ${ name }._esTitles should be the same length`
    )
}
