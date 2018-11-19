"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_schema_1 = require("./object-schema");
const string_schema_1 = require("./string-schema");
const const_property_schema_1 = require("./const-property-schema");
exports.isEntityReferenceSchema = (value) => {
    try {
        exports.assertEntityReferenceSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertEntityReferenceSchema = (entityReferenceSchema, name = 'EntityReferenceSchema') => {
    object_schema_1.assertObjectSchema(entityReferenceSchema, name);
    string_schema_1.assertStringSchema(entityReferenceSchema.properties.entityId, `${name}.properties.entityId`);
    const_property_schema_1.assertConstPropertySchema(entityReferenceSchema.properties.entityType, `${name}.properties.entityType`);
};
//# sourceMappingURL=entity-reference-schema.js.map