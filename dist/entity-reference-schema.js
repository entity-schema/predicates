"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_schema_1 = require("./object-schema");
const string_schema_1 = require("./string-schema");
const const_property_schema_1 = require("./const-property-schema");
exports.isEntityReferenceSchema = (value) => {
    if (!object_schema_1.isObjectSchema(value))
        return false;
    if (!string_schema_1.isStringSchema(value.properties.entityId))
        return false;
    if (!const_property_schema_1.isConstPropertySchema(value.properties.entityType))
        return false;
    return true;
};
//# sourceMappingURL=entity-reference-schema.js.map