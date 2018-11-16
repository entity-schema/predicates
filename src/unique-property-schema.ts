import { TypedSchema, isTypedSchema } from './typed-schema'

export interface UniquePropertySchema extends TypedSchema {
  _esUnique: true
}

export const isUniquePropertySchema = ( value ) : value is UniquePropertySchema => {
  if( !isTypedSchema( value ) ) return false

  if( value._esUnique !== true ) return false

  return true
}
