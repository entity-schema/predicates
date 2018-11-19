import { is } from '@mojule/is'
import { EntitySchema, assertEntitySchema } from './entity-schema'
import { isEntityReferenceSchema } from './entity-reference-schema'
import { isRefSchema } from './ref-schema'
import { isNonEmptyArray } from './util';

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

export const assertChildEntitySchema = (
  childEntitySchema, name = 'ChildEntitySchema'
) => {
  assertEntitySchema( childEntitySchema, name )

  if ( !is.string( childEntitySchema._esParentKey ) )
    throw TypeError( `${ name }._esParentKey should be a string` )

  const isEntityReference = isEntityReferenceSchema(
    childEntitySchema.properties[ childEntitySchema._esParentKey ]
  )
  const isRef = isRefSchema(
    childEntitySchema.properties[ childEntitySchema._esParentKey ]
  )

  if( !( isEntityReference || isRef ) )
    throw TypeError(
      `${ name }.properties['${
        childEntitySchema._esParentKey
      }'] should be an EntityReferenceSchema or a RefSchema`
    )

  if( !isNonEmptyArray( childEntitySchema.required ) )
    throw TypeError( `${ name }.required should be a non-empty array` )

  if ( !childEntitySchema.required.includes( childEntitySchema._esParentKey ) )
    throw TypeError( `${ name }.required should include '${ childEntitySchema._esParentKey }'` )
}
