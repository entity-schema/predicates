import { is, Utils } from '@mojule/is'
import { isOneOfSchema, OneOfSchema } from './oneof-schema'
import { isEntitySchema, EntitySchema } from './entity-schema'
import { isRootSchema, RootSchema } from './root-schema'
import { isEnumSchema, EnumSchema } from './enum-schema'
import { isRefSchema, RefSchema } from './ref-schema'
import { isChildEntitySchema, ChildEntitySchema } from './child-entity-schema'
import {
  isConstPropertySchema, ConstPropertySchema
} from './const-property-schema'
import {
  isEntityReferenceSchema, EntityReferenceSchema
} from './entity-reference-schema'
import { isSubschema, Subschema } from './subschema'
import { isTypedSchema, TypedSchema } from './typed-schema'
import { isObjectSchema, ObjectSchema } from './object-schema'
import { isStringSchema, StringSchema } from './string-schema'
import { isNumberSchema, NumberSchema } from './number-schema'
import { isBooleanSchema, BooleanSchema } from './boolean-schema'
import { isArraySchema, ArraySchema } from './array-schema'
import { isIntegerSchema, IntegerSchema } from './integer-schema'
import { isSecuritySchema, SecuritySchema } from './security-schema'
import {
  isUniquePropertySchema, UniquePropertySchema
} from './unique-property-schema'

export {
  isOneOfSchema, isEntitySchema, isRootSchema, isEnumSchema, isRefSchema,
  isChildEntitySchema, isConstPropertySchema, isEntityReferenceSchema,
  isSubschema, isTypedSchema, isObjectSchema, isStringSchema, isNumberSchema,
  isBooleanSchema, isArraySchema, isIntegerSchema, isSecuritySchema,
  isUniquePropertySchema, OneOfSchema, EntitySchema, RootSchema, EnumSchema,
  RefSchema, ChildEntitySchema, ConstPropertySchema, EntityReferenceSchema,
  Subschema, TypedSchema, ObjectSchema, StringSchema, NumberSchema,
  BooleanSchema, ArraySchema, IntegerSchema, SecuritySchema,
  UniquePropertySchema
}

export { assertOneOfSchema } from './oneof-schema'
export { assertEntitySchema } from './entity-schema'
export { assertRootSchema } from './root-schema'
export { assertEnumSchema } from './enum-schema'
export { assertRefSchema } from './ref-schema'
export { assertChildEntitySchema } from './child-entity-schema'
export { assertConstPropertySchema } from './const-property-schema'
export { assertEntityReferenceSchema } from './entity-reference-schema'
export { assertSubschema } from './subschema'
export { assertTypedSchema, assertTypedSchemaOf } from './typed-schema'
export {
  assertObjectSchema, assertObjectSchemaProperties, assertObjectSchemaProperty
} from './object-schema'
export { assertStringSchema } from './string-schema'
export { assertNumberSchema } from './number-schema'
export { assertBooleanSchema } from './boolean-schema'
export { assertArraySchema } from './array-schema'
export { assertIntegerSchema } from './integer-schema'
export {
  assertSecuritySchema, assertSecuritySchemaRoles
} from './security-schema'
export { assertUniquePropertySchema } from './unique-property-schema'

// object key order is important - will match in that order when finding types!
export const predicates = {
  oneOfSchema: isOneOfSchema,
  constPropertySchema: isConstPropertySchema,
  stringSchema: isStringSchema,
  numberSchema: isNumberSchema,
  integerSchema: isIntegerSchema,
  booleanSchema: isBooleanSchema,
  arraySchema: isArraySchema,
  childEntitySchema: isChildEntitySchema,
  entitySchema: isEntitySchema,
  entityReferenceSchema: isEntityReferenceSchema,
  objectSchema: isObjectSchema,
  rootSchema: isRootSchema,
  refSchema: isRefSchema,
  enumSchema: isEnumSchema,
  uniquePropertySchema: isUniquePropertySchema,
  securitySchema: isSecuritySchema,
  typedSchema: isTypedSchema,
  subschema: isSubschema,
  anySchema: ( value ): value is any => is.object( value )
}

export const predicateUtils = Utils( predicates )
