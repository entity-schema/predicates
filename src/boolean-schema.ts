import { TypedSchema, assertTypedSchema } from './typed-schema'
import * as assert from 'assert'

export interface BooleanSchema extends TypedSchema {
  type: 'boolean'
}

export const isBooleanSchema = ( value ): value is BooleanSchema => {
  try {
    assertBooleanSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertBooleanSchema = booleanSchema => {
  assertTypedSchema( booleanSchema )
  assert.strictEqual( booleanSchema.type, 'boolean', `BooleanSchema.type should be 'boolean'` )
}
