import * as assert from 'assert'
import { is } from '@mojule/is'
import { StringSchema, assertStringSchema } from './string-schema'

export interface EnumSchema extends StringSchema {
  enum: string[]
  _esTitles: string[]
}

export const isEnumSchema = ( value ) : value is EnumSchema => {
  try {
    assertEnumSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertEnumSchema = enumSchema => {
  assertStringSchema( enumSchema )

  assert(
    is.array( enumSchema.enum ) && enumSchema.length > 0,
    'EnumSchema.enum should be a non-empty array'
  )

  assert(
    enumSchema.enum.every( is.string ),
    'EnumSchema.enum should be an array of strings'
  )

  assert(
    is.array( enumSchema._esTitles ) && enumSchema.length > 0,
    'EnumSchema._esTitles should be a non-empty array'
  )

  assert(
    enumSchema._esTitles.every( is.string ),
    'EnumSchema._esTitles should be an array of strings'
  )

  assert.strictEqual(
    enumSchema.enum.length, enumSchema._esTitles.length,
    'EnumSchema.enum and EnumSchema._esTitles should be the same length'
  )
}
