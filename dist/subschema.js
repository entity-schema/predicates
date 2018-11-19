"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref_schema_1 = require("./ref-schema");
const typed_schema_1 = require("./typed-schema");
const oneof_schema_1 = require("./oneof-schema");
exports.isSubschema = (value) => {
    if (ref_schema_1.isRefSchema(value))
        return true;
    if (typed_schema_1.isTypedSchema(value))
        return true;
    if (oneof_schema_1.isOneOfSchema(value))
        return true;
    return false;
};
exports.assertSubschema = (value, name = 'Subschema') => {
    if (!exports.isSubschema(value))
        throw TypeError(`${name} should be RefSchema, TypedSchema or OneOfSchema`);
};
//# sourceMappingURL=subschema.js.map