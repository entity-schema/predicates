"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
const subschema_1 = require("./subschema");
exports.isArraySchema = (value) => {
    try {
        exports.assertArraySchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertArraySchema = (arraySchema, name = 'ArraySchema') => {
    typed_schema_1.assertTypedSchemaOf(arraySchema, 'array', name);
    subschema_1.assertSubschema(arraySchema.items, `${name}.items`);
};
//# sourceMappingURL=array-schema.js.map