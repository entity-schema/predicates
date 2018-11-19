import * as assert from 'assert'
import { is } from '@mojule/is'
import { TypedSchema, assertTypedSchema } from './typed-schema'
import { Subschema, isSubschema } from './subschema'

export interface OneOfSchema extends TypedSchema {
  oneOf: Subschema[]
}

export const isOneOfSchema = ( value ) : value is OneOfSchema => {
  try {
    assertOneOfSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertOneOfSchema = oneOfSchema => {
  assertTypedSchema( oneOfSchema )

  assert(
    is.array( oneOfSchema.oneOf ),
    'OneOfSchema.oneOf should be an array'
  )

  assert(
    oneOfSchema.oneOf.every( isSubschema ),
    'OneOfSchema.oneOf should be an array of Subschema'
  )
}
