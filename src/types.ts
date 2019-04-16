import { JSONSchema4 } from 'json-schema'

export type TypedSchemaType = (
  'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'
)

export interface TypedSchema extends JSONSchema4 {
  title: string,
  type: TypedSchemaType
}

export interface RefSchema extends JSONSchema4 {
  $ref: string
}

export interface OneOfSchema extends JSONSchema4 {
  title: string
  oneOf: Subschema[]
}

export type Subschema = RefSchema | TypedSchema | OneOfSchema

export interface ArraySchema extends TypedSchema {
  type: 'array'
  items: Subschema
}

export interface BooleanSchema extends TypedSchema {
  type: 'boolean'
}

export interface EntityFormatSchema {
  format: 'entity-schema'
}

export interface RootSchema extends TypedSchema {
  id: string
}

export interface ObjectSchemaProperties {
  [ name: string ]: Subschema
}

export interface ObjectSchema extends TypedSchema {
  type: 'object'
  properties: ObjectSchemaProperties
  additionalProperties: false
}

export type EntitySchema = EntityFormatSchema & RootSchema & ObjectSchema

export interface ChildEntitySchema extends EntitySchema {
  _esParentKey: string
}

export interface EntityReferenceSchema extends ObjectSchema {
  properties: {
    entityId: StringSchema,
    entityType: ConstPropertySchema
  }
}

export interface StringSchema extends TypedSchema {
  type: 'string'
}

export interface ConstPropertySchema extends StringSchema {
  enum: string[],
  readOnly: true,
  default: string
}

export interface EnumSchema extends StringSchema {
  enum: string[]
  _enumTitles: string[]
}

export interface IntegerSchema extends TypedSchema {
  type: 'integer'
}

export interface NumberSchema extends TypedSchema {
  type: 'number'
}

export interface SecuritySchema extends TypedSchema {
  _esSecurity: {
    create: string[]
    read: string[]
    update: string[]
    delete: string[]
  }
}
