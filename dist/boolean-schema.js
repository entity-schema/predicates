"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isBooleanSchema = (value) => {
    try {
        exports.assertBooleanSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertBooleanSchema = (booleanSchema, name = 'BooleanSchema') => {
    typed_schema_1.assertTypedSchemaOf(booleanSchema, 'boolean', name);
};
//# sourceMappingURL=boolean-schema.js.map