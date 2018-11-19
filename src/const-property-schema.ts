import * as assert from 'assert'
import { is } from '@mojule/is'
import { StringSchema, assertStringSchema } from './string-schema'

export interface ConstPropertySchema extends StringSchema {
  enum: [ string ],
  readOnly: true,
  default: string
}

export const isConstPropertySchema = ( value ) : value is ConstPropertySchema => {
  try {
    assertConstPropertySchema( value )
  } catch {
    return false
  }

  return true
}

export const assertConstPropertySchema = constPropertySchema => {
  assertStringSchema( constPropertySchema )

  assert(
    is.array( constPropertySchema.enum ),
    'ConstPropertySchema.enum should be an array'
  )

  assert(
    is.string( constPropertySchema.enum[ 0 ] ),
    'ConstPropertySchema.enum[0] should be a string'
  )

  assert(
    is.string( constPropertySchema.default ),
    'ConstPropertySchema.default should be a string'
  )

  assert.strictEqual(
    constPropertySchema.enum[ 0 ], constPropertySchema.default,
    'ConstPropertySchema.enum[0] should match ConstPropertySchema.default'
  )

  assert.strictEqual(
    constPropertySchema, true,
    'ConstPropertySchema.readOnly should be true'
  )
}
