"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isStringSchema = (value) => {
    if (!typed_schema_1.isTypedSchema(value))
        return false;
    if (value.type !== 'string')
        return false;
    return true;
};
//# sourceMappingURL=string-schema.js.map