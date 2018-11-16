import { is } from '@mojule/is'
import { StringSchema, isStringSchema } from './string-schema'

export interface ConstPropertySchema extends StringSchema {
  enum: [ string ],
  readOnly: true,
  default: string
}

export const isConstPropertySchema = ( value ) : value is ConstPropertySchema => {
  if( !isStringSchema( value ) ) return false

  if( !is.array( value.enum ) ) return false

  if( !is.string( value.enum[ 0 ] ) ) return false

  if( !is.string( value.default ) ) return false

  if( value.default !== value.enum[ 0 ] ) return false

  if( value.readOnly !== true ) return false

  return true
}
