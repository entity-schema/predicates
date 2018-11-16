"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const entity_schema_1 = require("./entity-schema");
const entity_reference_schema_1 = require("./entity-reference-schema");
exports.isChildEntitySchema = (value) => {
    if (!entity_schema_1.isEntitySchema(value))
        return false;
    if (!is_1.is.string(value._esParentKey))
        return false;
    if (!value.properties[value._esParentKey])
        return false;
    if (!entity_reference_schema_1.isEntityReferenceSchema(value.properties[value._esParentKey]))
        return false;
    return true;
};
//# sourceMappingURL=child-entity-schema.js.map