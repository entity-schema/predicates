import { ObjectSchema, isObjectSchema } from './object-schema'
import { StringSchema, isStringSchema } from './string-schema'
import { ConstPropertySchema, isConstPropertySchema } from './const-property-schema'

export interface EntityReferenceSchema extends ObjectSchema {
  properties: {
    entityId: StringSchema,
    entityType: ConstPropertySchema
  }
}

export const isEntityReferenceSchema = ( value ) : value is EntityReferenceSchema => {
  if( !isObjectSchema( value ) ) return false

  if( !isStringSchema( value.properties.entityId ) ) return false

  if( !isConstPropertySchema( value.properties.entityType ) ) return false

  return true
}
