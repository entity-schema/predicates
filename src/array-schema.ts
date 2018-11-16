import { Subschema, isSubschema } from './subschema'
import { TypedSchema, isTypedSchema } from './typed-schema'
import * as assert from 'assert'

export interface ArraySchema extends TypedSchema {
  type: 'array'
  items?: Subschema
}

export const isArraySchema = ( value ): value is ArraySchema => {
  try {
    assertArraySchema( value )

    return true
  } catch {
    return false
  }
}

export const assertArraySchema = arraySchema => {
  assert( isTypedSchema( arraySchema ), 'ArraySchema should be a TypedSchema' )
  assert.strictEqual( arraySchema.type, 'array', `ArraySchema.type should be 'array'` )

  if ( arraySchema.items ){
    assert( isSubschema( arraySchema.items ), 'ArraySchema.items should be a SubSchema' )
  }
}
