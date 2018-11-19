import * as assert from 'assert'
import { TypedSchema, assertTypedSchema } from './typed-schema'

export interface UniquePropertySchema extends TypedSchema {
  _esUnique: true
}

export const isUniquePropertySchema = ( value ) : value is UniquePropertySchema => {
  try {
    assertUniquePropertySchema( value )
  } catch {
    return false
  }

  return true
}

export const assertUniquePropertySchema = uniquePropertySchema => {
  assertTypedSchema( uniquePropertySchema )

  assert.strictEqual(
    uniquePropertySchema._esUnique, true,
    'UniquePropertySchema._esUnique should be true'
  )
}
