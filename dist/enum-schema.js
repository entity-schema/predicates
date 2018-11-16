"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const string_schema_1 = require("./string-schema");
exports.isEnumSchema = (value) => {
    if (!string_schema_1.isStringSchema(value))
        return false;
    if (!is_1.is.array(value.enum))
        return false;
    if (!is_1.is.array(value._esTitles))
        return false;
    if (value.enum.length !== value._esTitles.length)
        return false;
    return true;
};
//# sourceMappingURL=enum-schema.js.map