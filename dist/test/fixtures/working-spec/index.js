"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brand = require("./entities/brand.schema.json");
const company = require("./entities/company.schema.json");
const detail = require("./entities/detail.schema.json");
const getUri = require("./entities/get-uri.schema.json");
const product = require("./entities/product.schema.json");
const brandReference = require("./references/brand-reference.schema.json");
const companyReference = require("./references/company-reference.schema.json");
const productReference = require("./references/product-reference.schema.json");
const abbreviation = require("./abbreviation.schema.json");
const description = require("./description.schema.json");
const isActive = require("./is-active.schema.json");
const name = require("./name.schema.json");
const tag = require("./tag.schema.json");
exports.workingSpecSchemas = [
    brand, company, detail, getUri, product, brandReference, companyReference,
    productReference, abbreviation, description, isActive, name, tag
];
exports.workingSpecSchemaMap = {
    brand, company, detail, getUri, product, brandReference, companyReference,
    productReference, abbreviation, description, isActive, name, tag
};
//# sourceMappingURL=index.js.map