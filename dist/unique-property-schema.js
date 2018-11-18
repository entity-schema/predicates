"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_schema_1 = require("./typed-schema");
exports.isUniquePropertySchema = (value) => {
    if (!typed_schema_1.isTypedSchema(value))
        return false;
    if (value._esUnique !== true)
        return false;
    return true;
};
//# sourceMappingURL=unique-property-schema.js.map