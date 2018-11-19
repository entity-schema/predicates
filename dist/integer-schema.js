"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isIntegerSchema = (value) => {
    try {
        exports.assertIntegerSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertIntegerSchema = (integerSchema, name = 'IntegerSchema') => {
    typed_schema_1.assertTypedSchemaOf(integerSchema, 'integer', name);
};
//# sourceMappingURL=integer-schema.js.map