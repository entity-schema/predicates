"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const subschema_1 = require("./subschema");
const util_1 = require("./util");
exports.isOneOfSchema = (value) => {
    try {
        exports.assertOneOfSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertOneOfSchema = (oneOfSchema, name = 'OneOfSchema') => {
    if (!is_1.is.object(oneOfSchema))
        throw TypeError(`${name} must be an object`);
    if (!util_1.isNonEmptyString(oneOfSchema.title))
        throw TypeError(`${name}.title must be a non-empty string`);
    if (!is_1.is.array(oneOfSchema.oneOf))
        throw TypeError(`${name}.oneOf should be an array`);
    if (!oneOfSchema.oneOf.every(subschema_1.isSubschema))
        throw TypeError(`${name}.oneOf should be an array of Subschema`);
};
//# sourceMappingURL=oneof-schema.js.map