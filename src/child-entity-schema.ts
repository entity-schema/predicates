import { is } from '@mojule/is'
import { isEntitySchema, EntitySchema, assertEntitySchema } from './entity-schema'
import { isEntityReferenceSchema } from './entity-reference-schema'
import * as assert from 'assert'

export interface ChildEntitySchema extends EntitySchema {
  _esParentKey: string
}

export const isChildEntitySchema = ( value ) : value is ChildEntitySchema => {
  try {
    assertChildEntitySchema( value )
  } catch {
    return false
  }

  return true
}

export const assertChildEntitySchema = childEntitySchema => {
  assertEntitySchema( childEntitySchema )

  assert(
    is.string( childEntitySchema._esParentKey ),
    'ChildEntitySchema._esParentKey should be a string'
  )

  assert(
    isEntityReferenceSchema( childEntitySchema.properties[ childEntitySchema._esParentKey ] ),
    `ChildEntitySchema.properties['${ childEntitySchema._esParentKey }'] should be an EntityReferenceSchema`
  )
}
