import * as assert from 'assert'
import { is } from '@mojule/is'
import { isTypedSchema, TypedSchema, assertTypedSchema } from './typed-schema'
import { isNonEmptyString } from './util';

export interface RootSchema extends TypedSchema {
  id: string
}

export const isRootSchema = ( value ) : value is RootSchema => {
  if( !isTypedSchema( value ) ) return false
  if( !is.string( value.id ) ) return false

  return true
}

export const assertRootSchema = rootSchema => {
  assertTypedSchema( rootSchema )
  assert(
    isNonEmptyString( rootSchema.id ),
    'RootSchema.id should be a non-empty string'
  )
}