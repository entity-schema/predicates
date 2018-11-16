"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const assert = require("assert");
const schemaTypes = [
    'string', 'number', 'integer', 'boolean', 'object', 'array'
];
exports.isTypedSchema = (value) => {
    try {
        exports.assertTypedSchema(value);
        return true;
    }
    catch (_a) {
        return false;
    }
};
exports.assertTypedSchema = value => {
    assert(is_1.is.object(value), 'TypedSchema should be an object');
    assert(is_1.is.string(value.title), 'TypedSchema should have a string title property');
    assert(schemaTypes.includes(value.type), `TypedSchema type property should be one of ${schemaTypes}`);
};
//# sourceMappingURL=typed-schema.js.map