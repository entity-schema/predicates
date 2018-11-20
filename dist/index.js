"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const oneof_schema_1 = require("./oneof-schema");
exports.isOneOfSchema = oneof_schema_1.isOneOfSchema;
const entity_schema_1 = require("./entity-schema");
exports.isEntitySchema = entity_schema_1.isEntitySchema;
const root_schema_1 = require("./root-schema");
exports.isRootSchema = root_schema_1.isRootSchema;
const enum_schema_1 = require("./enum-schema");
exports.isEnumSchema = enum_schema_1.isEnumSchema;
const ref_schema_1 = require("./ref-schema");
exports.isRefSchema = ref_schema_1.isRefSchema;
const child_entity_schema_1 = require("./child-entity-schema");
exports.isChildEntitySchema = child_entity_schema_1.isChildEntitySchema;
const const_property_schema_1 = require("./const-property-schema");
exports.isConstPropertySchema = const_property_schema_1.isConstPropertySchema;
const entity_reference_schema_1 = require("./entity-reference-schema");
exports.isEntityReferenceSchema = entity_reference_schema_1.isEntityReferenceSchema;
const subschema_1 = require("./subschema");
exports.isSubschema = subschema_1.isSubschema;
const typed_schema_1 = require("./typed-schema");
exports.isTypedSchema = typed_schema_1.isTypedSchema;
const object_schema_1 = require("./object-schema");
exports.isObjectSchema = object_schema_1.isObjectSchema;
const string_schema_1 = require("./string-schema");
exports.isStringSchema = string_schema_1.isStringSchema;
const number_schema_1 = require("./number-schema");
exports.isNumberSchema = number_schema_1.isNumberSchema;
const boolean_schema_1 = require("./boolean-schema");
exports.isBooleanSchema = boolean_schema_1.isBooleanSchema;
const array_schema_1 = require("./array-schema");
exports.isArraySchema = array_schema_1.isArraySchema;
const integer_schema_1 = require("./integer-schema");
exports.isIntegerSchema = integer_schema_1.isIntegerSchema;
const security_schema_1 = require("./security-schema");
exports.isSecuritySchema = security_schema_1.isSecuritySchema;
const unique_property_schema_1 = require("./unique-property-schema");
exports.isUniquePropertySchema = unique_property_schema_1.isUniquePropertySchema;
var oneof_schema_2 = require("./oneof-schema");
exports.assertOneOfSchema = oneof_schema_2.assertOneOfSchema;
var entity_schema_2 = require("./entity-schema");
exports.assertEntitySchema = entity_schema_2.assertEntitySchema;
var root_schema_2 = require("./root-schema");
exports.assertRootSchema = root_schema_2.assertRootSchema;
var enum_schema_2 = require("./enum-schema");
exports.assertEnumSchema = enum_schema_2.assertEnumSchema;
var ref_schema_2 = require("./ref-schema");
exports.assertRefSchema = ref_schema_2.assertRefSchema;
var child_entity_schema_2 = require("./child-entity-schema");
exports.assertChildEntitySchema = child_entity_schema_2.assertChildEntitySchema;
var const_property_schema_2 = require("./const-property-schema");
exports.assertConstPropertySchema = const_property_schema_2.assertConstPropertySchema;
var entity_reference_schema_2 = require("./entity-reference-schema");
exports.assertEntityReferenceSchema = entity_reference_schema_2.assertEntityReferenceSchema;
var subschema_2 = require("./subschema");
exports.assertSubschema = subschema_2.assertSubschema;
var typed_schema_2 = require("./typed-schema");
exports.assertTypedSchema = typed_schema_2.assertTypedSchema;
exports.assertTypedSchemaOf = typed_schema_2.assertTypedSchemaOf;
var object_schema_2 = require("./object-schema");
exports.assertObjectSchema = object_schema_2.assertObjectSchema;
exports.assertObjectSchemaProperties = object_schema_2.assertObjectSchemaProperties;
exports.assertObjectSchemaProperty = object_schema_2.assertObjectSchemaProperty;
var string_schema_2 = require("./string-schema");
exports.assertStringSchema = string_schema_2.assertStringSchema;
var number_schema_2 = require("./number-schema");
exports.assertNumberSchema = number_schema_2.assertNumberSchema;
var boolean_schema_2 = require("./boolean-schema");
exports.assertBooleanSchema = boolean_schema_2.assertBooleanSchema;
var array_schema_2 = require("./array-schema");
exports.assertArraySchema = array_schema_2.assertArraySchema;
var integer_schema_2 = require("./integer-schema");
exports.assertIntegerSchema = integer_schema_2.assertIntegerSchema;
var security_schema_2 = require("./security-schema");
exports.assertSecuritySchema = security_schema_2.assertSecuritySchema;
exports.assertSecuritySchemaRoles = security_schema_2.assertSecuritySchemaRoles;
var unique_property_schema_2 = require("./unique-property-schema");
exports.assertUniquePropertySchema = unique_property_schema_2.assertUniquePropertySchema;
// object key order is important - will match in that order when finding types!
exports.predicates = {
    oneOfSchema: oneof_schema_1.isOneOfSchema,
    constPropertySchema: const_property_schema_1.isConstPropertySchema,
    stringSchema: string_schema_1.isStringSchema,
    numberSchema: number_schema_1.isNumberSchema,
    integerSchema: integer_schema_1.isIntegerSchema,
    booleanSchema: boolean_schema_1.isBooleanSchema,
    arraySchema: array_schema_1.isArraySchema,
    childEntitySchema: child_entity_schema_1.isChildEntitySchema,
    entitySchema: entity_schema_1.isEntitySchema,
    entityReferenceSchema: entity_reference_schema_1.isEntityReferenceSchema,
    objectSchema: object_schema_1.isObjectSchema,
    rootSchema: root_schema_1.isRootSchema,
    refSchema: ref_schema_1.isRefSchema,
    enumSchema: enum_schema_1.isEnumSchema,
    uniquePropertySchema: unique_property_schema_1.isUniquePropertySchema,
    securitySchema: security_schema_1.isSecuritySchema,
    typedSchema: typed_schema_1.isTypedSchema,
    subschema: subschema_1.isSubschema,
    anySchema: (value) => is_1.is.object(value)
};
exports.predicateUtils = is_1.Utils(exports.predicates);
//# sourceMappingURL=index.js.map