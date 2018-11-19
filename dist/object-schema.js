"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const subschema_1 = require("./subschema");
const entity_schema_1 = require("./entity-schema");
const typed_schema_1 = require("./typed-schema");
exports.isObjectSchema = (value) => {
    try {
        exports.assertObjectSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertObjectSchema = (objectSchema, name = 'ObjectSchema') => {
    typed_schema_1.assertTypedSchemaOf(objectSchema, 'object', name);
    if (objectSchema.additionalProperties !== false)
        throw TypeError(`${name}.additionalProperties should be false`);
    exports.assertObjectSchemaProperties(objectSchema, name);
};
exports.assertObjectSchemaProperties = (objectSchema, name = 'ObjectSchema') => {
    if (!is_1.is.object(objectSchema.properties))
        throw TypeError(`${name}.properties should be an object`);
    Object.keys(objectSchema.properties).forEach(key => {
        exports.assertObjectSchemaProperty(objectSchema, key, name);
    });
};
exports.assertObjectSchemaProperty = (objectSchema, key, name = 'ObjectSchema') => {
    subschema_1.assertSubschema(objectSchema.properties[key], `${name}.properties['${key}']`);
    if (entity_schema_1.isEntitySchema(objectSchema.properties[key]))
        throw TypeError(`${name}.properties['${key}'] should not be an EntitySchema`);
};
//# sourceMappingURL=object-schema.js.map