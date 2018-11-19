import * as assert from 'assert'
import { ObjectSchema, assertObjectSchema } from './object-schema'
import { isNonEmptyString } from './util'

export interface EntitySchema extends ObjectSchema {
  id: string
  format: 'entity-schema'
}

export const isEntitySchema = ( value ) : value is EntitySchema => {
  try {
    assertEntitySchema( value )
  } catch {
    return false
  }

  return true
}

export const assertEntitySchema = entitySchema => {
  assertObjectSchema( entitySchema )
  assert(
    isNonEmptyString( entitySchema.id ),
    'EntitySchema.id must be a non-empty string'
  )
}
