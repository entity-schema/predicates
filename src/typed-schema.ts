import * as assert from 'assert'
import { JSONSchema4 } from 'json-schema'
import { is } from '@mojule/is'

export type TypedSchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'

export interface TypedSchema extends JSONSchema4 {
  title: string,
  type: TypedSchemaType
}

const schemaTypes = [
  'string', 'number', 'integer', 'boolean', 'object', 'array'
]

export const isTypedSchema = ( value ) : value is TypedSchema => {
  try {
    assertTypedSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertTypedSchema = typedSchema => {
  assert( is.object( typedSchema ), 'TypedSchema should be an object' )
  assert( is.string( typedSchema.title ) && typedSchema.title.trim() !== '', 'TypedSchema.title should be a non-empty string' )
  assert( schemaTypes.includes( typedSchema.type ), `TypedSchema type property should be one of ${ JSON.stringify( schemaTypes ) }` )
}

export const assertTypedSchemaOf = ( typedSchema, type: TypedSchemaType ) => {
  assertTypedSchema( typedSchema )
  assert.strictEqual( typedSchema.type, type, `TypedSchema.type should be '${ type }'` )
}
