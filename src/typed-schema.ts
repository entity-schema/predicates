import { is } from '@mojule/is'
import { JSONSchema4 } from 'json-schema'
import { isNonEmptyString } from './util'

export type TypedSchemaType = (
  'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'
)

export interface TypedSchema extends JSONSchema4 {
  title: string,
  type: TypedSchemaType
}

const schemaTypes: TypedSchemaType[] = [
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

export const assertTypedSchema = ( typedSchema, name = 'TypedSchema' ) => {
  if ( !is.object( typedSchema ))
    throw TypeError( `${ name } should be an object` )

  if ( !isNonEmptyString( typedSchema.title ) )
    throw TypeError( `${ name }.title should be a non-empty string` )

  if ( !schemaTypes.includes( typedSchema.type ) )
    throw TypeError(
      `${ name }.type should be one of ${ JSON.stringify( schemaTypes ) }`
    )
}

export const assertTypedSchemaOf = (
  typedSchema, type: TypedSchemaType, name = 'TypedSchema'
) => {
  assertTypedSchema( typedSchema )

  if( typedSchema.type !== type )
    throw TypeError( `${ name }.type should be '${ type }'` )
}
