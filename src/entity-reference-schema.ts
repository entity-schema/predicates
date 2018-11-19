import { ObjectSchema, assertObjectSchema } from './object-schema'
import { StringSchema, assertStringSchema } from './string-schema'
import {
  ConstPropertySchema, assertConstPropertySchema
} from './const-property-schema'

export interface EntityReferenceSchema extends ObjectSchema {
  properties: {
    entityId: StringSchema,
    entityType: ConstPropertySchema
  }
}

export const isEntityReferenceSchema = ( value ) : value is EntityReferenceSchema => {
  try {
    assertEntityReferenceSchema( value )
  } catch {
    return false
  }

  return true
}

export const assertEntityReferenceSchema = entityReferenceSchema => {
  assertObjectSchema( entityReferenceSchema )
  assertStringSchema( entityReferenceSchema.properties.entityId )
  assertConstPropertySchema( entityReferenceSchema.properties.entityType )
}
