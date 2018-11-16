import { ObjectSchema, isObjectSchema } from './object-schema'
import { is } from '@mojule/is'
import * as assert from 'assert'

export interface EntitySchema extends ObjectSchema {
  id: string
  format: 'entity-schema'
}

export const isEntitySchema = ( value ) : value is EntitySchema => {
  if( !isObjectSchema( value ) ) return false

  if( !is.string( value.id ) ) return false

  if ( value.format !== 'entity-schema' ) return false

  return true
}

export const assertEntitySchema = value => {

}