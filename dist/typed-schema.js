"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const util_1 = require("./util");
const schemaTypes = [
    'string', 'number', 'integer', 'boolean', 'object', 'array'
];
exports.isTypedSchema = (value) => {
    try {
        exports.assertTypedSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertTypedSchema = (typedSchema, name = 'TypedSchema') => {
    if (!is_1.is.object(typedSchema))
        throw TypeError(`${name} should be an object`);
    if (!util_1.isNonEmptyString(typedSchema.title))
        throw TypeError(`${name}.title should be a non-empty string`);
    if (!schemaTypes.includes(typedSchema.type))
        throw TypeError(`${name}.type should be one of ${JSON.stringify(schemaTypes)}`);
};
exports.assertTypedSchemaOf = (typedSchema, type, name = 'TypedSchema') => {
    exports.assertTypedSchema(typedSchema);
    if (typedSchema.type !== type)
        throw TypeError(`${name}.type should be '${type}'`);
};
//# sourceMappingURL=typed-schema.js.map