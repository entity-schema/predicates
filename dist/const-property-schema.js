"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const string_schema_1 = require("./string-schema");
exports.isConstPropertySchema = (value) => {
    try {
        exports.assertConstPropertySchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertConstPropertySchema = (constPropertySchema, name = 'ConstPropertySchema') => {
    string_schema_1.assertStringSchema(constPropertySchema);
    if (!is_1.is.array(constPropertySchema.enum))
        throw TypeError(`${name}.enum should be an array`);
    if (!is_1.is.string(constPropertySchema.enum[0]))
        throw TypeError(`${name}.enum[0] should be a string`);
    if (!is_1.is.string(constPropertySchema.default))
        throw TypeError(`${name}.default should be a string`);
    if (constPropertySchema.enum[0] !== constPropertySchema.default)
        throw TypeError(`${name}.enum[0] should match ${name}.default`);
    if (constPropertySchema.readOnly !== true)
        throw TypeError(`${name}.readOnly should be true`);
};
//# sourceMappingURL=const-property-schema.js.map