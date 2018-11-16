import { is } from '@mojule/is'
import { TypedSchema, isTypedSchema } from './typed-schema'
import { Subschema, isSubschema } from './subschema'

export interface OneOfSchema extends TypedSchema {
  oneOf: Subschema[]
}

export const isOneOfSchema = ( value ) : value is OneOfSchema => {
  if( !isTypedSchema( value ) ) return false

  if( !is.array( value.oneOf ) ) return false

  if( !value.oneOf.every( isSubschema ) ) return false

  return true
}
