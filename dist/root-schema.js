"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
const util_1 = require("./util");
exports.isRootSchema = (value) => {
    try {
        exports.assertRootSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertRootSchema = (rootSchema, name = 'RootSchema') => {
    typed_schema_1.assertTypedSchema(rootSchema, name);
    if (!util_1.isNonEmptyString(rootSchema.id))
        throw TypeError(`${name}.id should be a non-empty string`);
};
//# sourceMappingURL=root-schema.js.map