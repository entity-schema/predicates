"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isStringSchema = (value) => {
    try {
        exports.assertStringSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertStringSchema = (stringSchema, name = 'StringSchema') => {
    typed_schema_1.assertTypedSchemaOf(stringSchema, 'string', name);
};
//# sourceMappingURL=string-schema.js.map