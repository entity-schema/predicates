import { assertObjectSchema } from './object-schema'
import { assertStringSchema } from './string-schema'
import { assertConstPropertySchema } from './const-property-schema'
import { EntityReferenceSchema } from './types'

export const isEntityReferenceSchema =
  ( value ) : value is EntityReferenceSchema => {
    try {
      assertEntityReferenceSchema( value )
    } catch {
      return false
    }

    return true
  }

export const assertEntityReferenceSchema = (
  entityReferenceSchema, name = 'EntityReferenceSchema'
) => {
  assertObjectSchema( entityReferenceSchema, name )

  assertStringSchema(
    entityReferenceSchema.properties.entityId,
    `${ name }.properties.entityId`
  )

  assertConstPropertySchema(
    entityReferenceSchema.properties.entityType,
    `${ name }.properties.entityType`
  )
}
