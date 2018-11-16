import { is } from '@mojule/is'
import { isEntitySchema, EntitySchema } from './entity-schema'
import { isEntityReferenceSchema } from './entity-reference-schema'
import * as assert from 'assert'

export interface ChildEntitySchema extends EntitySchema {
  _esParentKey: string
}

export const isChildEntitySchema = ( value ) : value is ChildEntitySchema => {
  try {
    assertChildEntitySchema( value )

    return true
  } catch {
    return false
  }
}

export const assertChildEntitySchema = childEntitySchema => {
  assert(
    isEntitySchema( childEntitySchema ),
    'ChildEntitySchema should be an EntitySchema'
  )

  assert(
    is.string( childEntitySchema._esParentKey ),
    'ChildEntitySchema._esParentKey should be a string'
  )

  assert(
    isEntityReferenceSchema( childEntitySchema.properties[ childEntitySchema._esParentKey ] ),
    `ChildEntitySchema.properties['${ childEntitySchema._esParentKey }'] should be an EntityReferenceSchema`
  )
}
