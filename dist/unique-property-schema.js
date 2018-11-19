"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isUniquePropertySchema = (value) => {
    try {
        exports.assertUniquePropertySchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertUniquePropertySchema = (uniquePropertySchema, name = 'UniquePropertySchema') => {
    typed_schema_1.assertTypedSchema(uniquePropertySchema, name);
    if (uniquePropertySchema._esUnique !== true)
        throw TypeError(`${name}._esUnique should be true`);
};
//# sourceMappingURL=unique-property-schema.js.map