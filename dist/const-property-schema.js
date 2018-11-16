"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const string_schema_1 = require("./string-schema");
exports.isConstPropertySchema = (value) => {
    if (!string_schema_1.isStringSchema(value))
        return false;
    if (!is_1.is.array(value.enum))
        return false;
    if (!is_1.is.string(value.enum[0]))
        return false;
    if (!is_1.is.string(value.default))
        return false;
    if (value.default !== value.enum[0])
        return false;
    if (value.readOnly !== true)
        return false;
    return true;
};
//# sourceMappingURL=const-property-schema.js.map