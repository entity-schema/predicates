import { JSONSchema4 } from 'json-schema'
import { is } from '@mojule/is'
import * as assert from 'assert'

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

    return true
  } catch {
    return false
  }
}

export const assertTypedSchema = value => {
  assert( is.object( value ), 'TypedSchema should be an object' )
  assert( is.string( value.title ), 'TypedSchema should have a string title property' )
  assert( schemaTypes.includes( value.type ), `TypedSchema type property should be one of ${ schemaTypes }` )
}
