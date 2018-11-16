"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subschema_1 = require("./subschema");
const entity_schema_1 = require("./entity-schema");
const typed_schema_1 = require("./typed-schema");
const assert = require("assert");
const is_1 = require("@mojule/is");
exports.isObjectSchema = (value) => {
    try {
        exports.assertObjectSchema(value);
        return true;
    }
    catch (_a) {
        return false;
    }
};
exports.assertObjectSchema = objectSchema => {
    assert(typed_schema_1.isTypedSchema(objectSchema), 'ObjectSchema should be a TypedSchema');
    assert.strictEqual(objectSchema.type, 'object', `ObjectSchema.type should be 'object'`);
    assert.strictEqual(objectSchema.additionalProperties, false, 'ObjectSchema.additionalProperties should be false');
    exports.assertObjectSchemaProperties(objectSchema);
};
exports.assertObjectSchemaProperties = objectSchema => {
    assert(is_1.is.object(objectSchema.properties), 'ObjectSchema.properties should be an object');
    Object.keys(objectSchema.properties).forEach(key => {
        exports.assertObjectSchemaProperty(objectSchema, key);
    });
};
exports.assertObjectSchemaProperty = (objectSchema, key) => {
    assert(subschema_1.isSubschema(objectSchema.properties[key]), `ObjectSchema.properties['${key}'] should be a SubSchema`);
    assert(!entity_schema_1.isEntitySchema(objectSchema.properties[key]), `ObjectSchema.properties['${key}'] should not be an EntitySchema`);
};
//# sourceMappingURL=object-schema.js.map