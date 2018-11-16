"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const typed_schema_1 = require("./typed-schema");
const subschema_1 = require("./subschema");
exports.isOneOfSchema = (value) => {
    if (!typed_schema_1.isTypedSchema(value))
        return false;
    if (!is_1.is.array(value.oneOf))
        return false;
    if (!value.oneOf.every(subschema_1.isSubschema))
        return false;
    return true;
};
//# sourceMappingURL=oneof-schema.js.map