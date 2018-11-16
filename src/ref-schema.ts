import { JSONSchema4 } from 'json-schema'
import { is } from '@mojule/is'

export interface RefSchema extends JSONSchema4 {
  $ref: string
}

export const isRefSchema = ( value ) : value is RefSchema => {
  if( !value ) return false

  if( !is.string( value.$ref ) ) return false

  return true
}
