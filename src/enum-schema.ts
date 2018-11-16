import { is } from '@mojule/is'
import { isStringSchema, StringSchema } from './string-schema'

export interface EnumSchema extends StringSchema {
  enum: string[]
  _esTitles: string[]
}

export const isEnumSchema = ( value ) : value is EnumSchema => {
  if( !isStringSchema( value ) ) return false

  if ( !is.array( value.enum ) ) return false
  if ( !is.array( value._esTitles ) ) return false
  if( value.enum.length !== value._esTitles.length ) return false

  return true
}
