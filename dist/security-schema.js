"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
const typed_schema_1 = require("./typed-schema");
const util_1 = require("./util");
exports.isSecuritySchema = (value) => {
    try {
        exports.assertSecuritySchema(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
exports.assertSecuritySchema = (securitySchema, name = 'SecuritySchema') => {
    typed_schema_1.assertTypedSchema(securitySchema, name);
    if (!is_1.is.object(securitySchema._esSecurity))
        throw TypeError(`${name}._esSecurity should be an object`);
    exports.assertSecuritySchemaRoles(securitySchema._esSecurity.create, 'create', name);
    exports.assertSecuritySchemaRoles(securitySchema._esSecurity.read, 'read', name);
    exports.assertSecuritySchemaRoles(securitySchema._esSecurity.update, 'update', name);
    exports.assertSecuritySchemaRoles(securitySchema._esSecurity.delete, 'delete', name);
};
exports.assertSecuritySchemaRoles = (roles, roleName, name = 'SecuritySchema') => {
    if (!util_1.isNonEmptyArray(roles))
        throw TypeError(`${name}._esSecurity.${roleName} should be a non-empty array`);
    if (!roles.every(util_1.isNonEmptyString))
        throw TypeError(`${name}._esSecurity.${roleName} should be an array of non-empty strings`);
};
//# sourceMappingURL=security-schema.js.map