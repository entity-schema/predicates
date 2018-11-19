"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const util_1 = require("./util");
exports.isRefSchema = (value) => {
    try {
        exports.assertRefSchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertRefSchema = (refSchema, name = 'RefSchema') => {
    if (!is_1.is.object(refSchema))
        throw TypeError(`${name} should be an object`);
    if (!util_1.isNonEmptyString(refSchema.$ref))
        throw TypeError(`${name}.$ref should be a non-empty string`);
};
//# sourceMappingURL=ref-schema.js.map