import { Subschema, assertSubschema } from './subschema'
import { TypedSchema, assertTypedSchema } from './typed-schema'
import * as assert from 'assert'

export interface ArraySchema extends TypedSchema {
  type: 'array'
  items?: Subschema
}

export const isArraySchema = ( value ): value is ArraySchema => {
  try {
    assertArraySchema( value )
  } catch {
    return false
  }

  return true
}

export const assertArraySchema = arraySchema => {
  assertTypedSchema( arraySchema )
  assert.strictEqual( arraySchema.type, 'array', `ArraySchema.type should be 'array'` )

  if ( arraySchema.items ){
    assertSubschema( arraySchema.items )
  }
}
