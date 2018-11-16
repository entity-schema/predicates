"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_schema_1 = require("./object-schema");
const is_1 = require("@mojule/is");
exports.isEntitySchema = (value) => {
    if (!object_schema_1.isObjectSchema(value))
        return false;
    if (!is_1.is.string(value.id))
        return false;
    if (value.format !== 'entity-schema')
        return false;
    return true;
};
exports.assertEntitySchema = value => {
};
//# sourceMappingURL=entity-schema.js.map