"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const string_schema_1 = require("./string-schema");
const util_1 = require("./util");
exports.isEnumSchema = (value) => {
    try {
        exports.assertEnumSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertEnumSchema = (enumSchema, name = 'EnumSchema') => {
    string_schema_1.assertStringSchema(enumSchema, name);
    if (!util_1.isNonEmptyArray(enumSchema.enum))
        throw TypeError(`${name}.enum should be a non-empty array`);
    if (!enumSchema.enum.every(is_1.is.string))
        throw TypeError(`${name}.enum should be an array of strings`);
    if (!util_1.isNonEmptyArray(enumSchema._enumTitles))
        throw TypeError(`${name}._enumTitles should be a non-empty array`);
    if (!enumSchema._enumTitles.every(is_1.is.string))
        throw TypeError(`${name}._enumTitles should be an array of strings`);
    if (enumSchema.enum.length !== enumSchema._enumTitles.length)
        throw TypeError(`${name}.enum and ${name}._enumTitles should be the same length`);
};
//# sourceMappingURL=enum-schema.js.map