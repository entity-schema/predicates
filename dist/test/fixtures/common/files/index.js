"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diskFile = require("./entities/disk-file.schema.json");
const imageFile = require("./entities/image-file.schema.json");
const zipFile = require("./entities/zip-file.schema.json");
const diskFileReference = require("./references/disk-file-reference.schema.json");
const imageFileReference = require("./references/image-file-reference.schema.json");
const zipFileReference = require("./references/zip-file-reference.schema.json");
const fileMeta = require("./file-meta.schema.json");
const filePath = require("./file-path.schema.json");
const imageMeta = require("./image-file-meta.schema.json");
exports.fileSchemas = [
    diskFile, imageFile, zipFile, diskFileReference, imageFileReference,
    zipFileReference, fileMeta, filePath, imageMeta
];
exports.fileSchemaMap = {
    diskFile, imageFile, zipFile, diskFileReference, imageFileReference,
    zipFileReference, fileMeta, filePath, imageMeta
};
//# sourceMappingURL=index.js.map