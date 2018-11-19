"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_schema_1 = require("./object-schema");
const util_1 = require("./util");
exports.isEntitySchema = (value) => {
    try {
        exports.assertEntitySchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertEntitySchema = (entitySchema, name = 'EntitySchema') => {
    object_schema_1.assertObjectSchema(entitySchema, name);
    if (!util_1.isNonEmptyString(entitySchema.id))
        throw TypeError(`${name}.id must be a non-empty string`);
    if (entitySchema.format !== 'entity-schema')
        throw TypeError(`${name}.format should be 'entity-schema'`);
};
//# sourceMappingURL=entity-schema.js.map