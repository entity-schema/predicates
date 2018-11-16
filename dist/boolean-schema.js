"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isBooleanSchema = (value) => {
    if (!typed_schema_1.isTypedSchema(value))
        return false;
    if (value.type !== 'boolean')
        return false;
    return true;
};
//# sourceMappingURL=boolean-schema.js.map