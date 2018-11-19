"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const entity_schema_1 = require("./entity-schema");
const entity_reference_schema_1 = require("./entity-reference-schema");
const ref_schema_1 = require("./ref-schema");
const util_1 = require("./util");
exports.isChildEntitySchema = (value) => {
    try {
        exports.assertChildEntitySchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertChildEntitySchema = (childEntitySchema, name = 'ChildEntitySchema') => {
    entity_schema_1.assertEntitySchema(childEntitySchema, name);
    if (!is_1.is.string(childEntitySchema._esParentKey))
        throw TypeError(`${name}._esParentKey should be a string`);
    const isEntityReference = entity_reference_schema_1.isEntityReferenceSchema(childEntitySchema.properties[childEntitySchema._esParentKey]);
    const isRef = ref_schema_1.isRefSchema(childEntitySchema.properties[childEntitySchema._esParentKey]);
    if (!(isEntityReference || isRef))
        throw TypeError(`${name}.properties['${childEntitySchema._esParentKey}'] should be an EntityReferenceSchema or a RefSchema`);
    if (!util_1.isNonEmptyArray(childEntitySchema.required))
        throw TypeError(`${name}.required should be a non-empty array`);
    if (!childEntitySchema.required.includes(childEntitySchema._esParentKey))
        throw TypeError(`${name}.required should include '${childEntitySchema._esParentKey}'`);
};
//# sourceMappingURL=child-entity-schema.js.map