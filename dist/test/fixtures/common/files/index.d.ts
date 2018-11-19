export declare const fileSchemas: ({
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format": string;
    "properties": {
        "name": {
            "$ref": string;
        };
        "path": {
            "$ref": string;
        };
        "meta": {
            "$ref": string;
        };
        "tags": {
            "title": string;
            "type": string;
            "items": {
                "$ref": string;
            };
        };
        "filePaths"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
        "filename"?: undefined;
        "mimetype"?: undefined;
        "size"?: undefined;
        "width"?: undefined;
        "height"?: undefined;
    };
    "additionalProperties": boolean;
    "required": string[];
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format": string;
    "properties": {
        "name": {
            "$ref": string;
        };
        "path": {
            "$ref": string;
        };
        "meta": {
            "$ref": string;
        };
        "filePaths": {
            "title": string;
            "description": string;
            "type": string;
            "items": {
                "title": string;
                "description": string;
                "type": string;
            };
        };
        "tags": {
            "title": string;
            "type": string;
            "items": {
                "$ref": string;
            };
        };
        "entityId"?: undefined;
        "entityType"?: undefined;
        "filename"?: undefined;
        "mimetype"?: undefined;
        "size"?: undefined;
        "width"?: undefined;
        "height"?: undefined;
    };
    "additionalProperties": boolean;
    "required": string[];
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "properties": {
        "entityId": {
            "title": string;
            "type": string;
            "pattern": string;
            "message": string;
        };
        "entityType": {
            "title": string;
            "type": string;
            "enum": string[];
            "readOnly": boolean;
            "default": string;
        };
        "name"?: undefined;
        "path"?: undefined;
        "meta"?: undefined;
        "tags"?: undefined;
        "filePaths"?: undefined;
        "filename"?: undefined;
        "mimetype"?: undefined;
        "size"?: undefined;
        "width"?: undefined;
        "height"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "format"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "properties": {
        "filename": {
            "title": string;
            "description": string;
            "type": string;
        };
        "mimetype": {
            "title": string;
            "description": string;
            "type": string;
        };
        "size": {
            "title": string;
            "description": string;
            "type": string;
        };
        "name"?: undefined;
        "path"?: undefined;
        "meta"?: undefined;
        "tags"?: undefined;
        "filePaths"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
        "width"?: undefined;
        "height"?: undefined;
    };
    "required": string[];
    "format"?: undefined;
    "additionalProperties"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format"?: undefined;
    "properties"?: undefined;
    "additionalProperties"?: undefined;
    "required"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "properties": {
        "filename": {
            "title": string;
            "description": string;
            "type": string;
        };
        "mimetype": {
            "title": string;
            "description": string;
            "type": string;
        };
        "size": {
            "title": string;
            "description": string;
            "type": string;
        };
        "width": {
            "title": string;
            "description": string;
            "type": string;
        };
        "height": {
            "title": string;
            "description": string;
            "type": string;
        };
        "name"?: undefined;
        "path"?: undefined;
        "meta"?: undefined;
        "tags"?: undefined;
        "filePaths"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "required": string[];
    "format"?: undefined;
    "additionalProperties"?: undefined;
})[];
export declare const fileSchemaMap: {
    diskFile: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "path": {
                "$ref": string;
            };
            "meta": {
                "$ref": string;
            };
            "tags": {
                "title": string;
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
        };
        "additionalProperties": boolean;
        "required": string[];
    };
    imageFile: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "path": {
                "$ref": string;
            };
            "meta": {
                "$ref": string;
            };
            "tags": {
                "title": string;
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
        };
        "additionalProperties": boolean;
        "required": string[];
    };
    zipFile: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "path": {
                "$ref": string;
            };
            "meta": {
                "$ref": string;
            };
            "filePaths": {
                "title": string;
                "description": string;
                "type": string;
                "items": {
                    "title": string;
                    "description": string;
                    "type": string;
                };
            };
            "tags": {
                "title": string;
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
        };
        "additionalProperties": boolean;
        "required": string[];
    };
    diskFileReference: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "properties": {
            "entityId": {
                "title": string;
                "type": string;
                "pattern": string;
                "message": string;
            };
            "entityType": {
                "title": string;
                "type": string;
                "enum": string[];
                "readOnly": boolean;
                "default": string;
            };
        };
        "required": string[];
        "additionalProperties": boolean;
    };
    imageFileReference: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "properties": {
            "entityId": {
                "title": string;
                "type": string;
                "pattern": string;
                "message": string;
            };
            "entityType": {
                "title": string;
                "type": string;
                "enum": string[];
                "readOnly": boolean;
                "default": string;
            };
        };
        "required": string[];
        "additionalProperties": boolean;
    };
    zipFileReference: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "properties": {
            "entityId": {
                "title": string;
                "type": string;
                "pattern": string;
                "message": string;
            };
            "entityType": {
                "title": string;
                "type": string;
                "enum": string[];
                "readOnly": boolean;
                "default": string;
            };
        };
        "required": string[];
        "additionalProperties": boolean;
    };
    fileMeta: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "properties": {
            "filename": {
                "title": string;
                "description": string;
                "type": string;
            };
            "mimetype": {
                "title": string;
                "description": string;
                "type": string;
            };
            "size": {
                "title": string;
                "description": string;
                "type": string;
            };
        };
        "required": string[];
    };
    filePath: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
    };
    imageMeta: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "properties": {
            "filename": {
                "title": string;
                "description": string;
                "type": string;
            };
            "mimetype": {
                "title": string;
                "description": string;
                "type": string;
            };
            "size": {
                "title": string;
                "description": string;
                "type": string;
            };
            "width": {
                "title": string;
                "description": string;
                "type": string;
            };
            "height": {
                "title": string;
                "description": string;
                "type": string;
            };
        };
        "required": string[];
    };
};
