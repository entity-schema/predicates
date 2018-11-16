import { TypedSchema, isTypedSchema } from './typed-schema'
import * as assert from 'assert'

export interface BooleanSchema extends TypedSchema {
  type: 'boolean'
}

export const isBooleanSchema = ( value ): value is BooleanSchema => {
  try {
    assertBooleanSchema( value )

    return true
  } catch {
    return false
  }
}

export const assertBooleanSchema = booleanSchema => {
  assert( isTypedSchema( booleanSchema ), 'BooleanSchema should be a TypedSchema' )
  assert.strictEqual( booleanSchema.type, 'boolean', `BooleanSchema.type should be 'boolean'` )
}
