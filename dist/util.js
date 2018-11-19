"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@mojule/is");
exports.isNonEmptyString = (value) => is_1.is.string(value) && value.trim() !== '';
exports.isNonEmptyArray = (value) => is_1.is.array(value) && value.length > 0;
//# sourceMappingURL=util.js.map