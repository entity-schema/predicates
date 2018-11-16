"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
exports.isRefSchema = (value) => {
    if (!value)
        return false;
    if (!is_1.is.string(value.$ref))
        return false;
    return true;
};
//# sourceMappingURL=ref-schema.js.map