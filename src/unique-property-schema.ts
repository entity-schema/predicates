import { TypedSchema, assertTypedSchema } from './typed-schema'

export interface UniquePropertySchema extends TypedSchema {
  _esUnique: true
}

export const isUniquePropertySchema =
  ( value ) : value is UniquePropertySchema => {
    try {
      assertUniquePropertySchema( value )
    } catch {
      return false
    }

    return true
  }

export const assertUniquePropertySchema = (
  uniquePropertySchema, name = 'UniquePropertySchema'
) => {
  assertTypedSchema( uniquePropertySchema, name )

  if( uniquePropertySchema._esUnique !== true )
    throw TypeError( `${ name }._esUnique should be true` )
}
