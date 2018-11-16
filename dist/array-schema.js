"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subschema_1 = require("./subschema");
const typed_schema_1 = require("./typed-schema");
exports.isArraySchema = (value) => {
    if (!typed_schema_1.isTypedSchema(value))
        return false;
    if (value.type !== 'array')
        return false;
    if (value.items) {
        if (!subschema_1.isSubschema(value.items))
            return false;
    }
    return true;
};
//# sourceMappingURL=array-schema.js.map