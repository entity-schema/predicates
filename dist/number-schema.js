"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isNumberSchema = (value) => {
    try {
        exports.assertNumberSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertNumberSchema = (numberSchema, name = 'NumberSchema') => {
    typed_schema_1.assertTypedSchemaOf(numberSchema, 'number', name);
};
//# sourceMappingURL=number-schema.js.map