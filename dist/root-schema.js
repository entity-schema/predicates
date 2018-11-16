"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const typed_schema_1 = require("./typed-schema");
exports.isRootSchema = (value) => {
    if (!typed_schema_1.isTypedSchema(value))
        return false;
    if (!is_1.is.string(value.id))
        return false;
    return true;
};
//# sourceMappingURL=root-schema.js.map