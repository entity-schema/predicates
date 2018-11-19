"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey = require("./api-key.schema.json");
const user = require("./user.schema.json");
const userReference = require("./user-reference.schema.json");
exports.securitySchemas = [apiKey, user, userReference];
exports.securitySchemaMap = { apiKey, user, userReference };
//# sourceMappingURL=index.js.map