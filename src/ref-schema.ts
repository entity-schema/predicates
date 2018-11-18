import * as assert from 'assert'
import { JSONSchema4 } from 'json-schema'
import { is } from '@mojule/is'

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

export const assertRefSchema = refSchema => {
  assert( is.object( refSchema ), 'RefSchema should be an object' )
  assert( is.string( refSchema.$ref ), 'RefSchema.$ref should be a string' )
}
