export declare const workingSpecSchemas: ({
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format": string;
    "_esParentKey": string;
    "properties": {
        "name": {
            "$ref": string;
        };
        "company": {
            "$ref": string;
        };
        "isActive": {
            "$ref": string;
        };
        "abbrev": {
            "$ref": string;
        };
        "description": {
            "$ref": string;
        };
        "tags": {
            "title": string;
            "type": string;
            "items": {
                "$ref": string;
            };
        };
        "logo"?: undefined;
        "product"?: undefined;
        "detailRef"?: undefined;
        "zipFile"?: undefined;
        "isPrivate"?: undefined;
        "uri"?: undefined;
        "brand"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "pattern"?: undefined;
    "message"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
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
        "isActive": {
            "$ref": string;
        };
        "abbrev": {
            "$ref": string;
        };
        "description": {
            "$ref": string;
        };
        "tags": {
            "title": string;
            "type": string;
            "items": {
                "$ref": string;
            };
        };
        "logo": {
            "$ref": string;
        };
        "company"?: undefined;
        "product"?: undefined;
        "detailRef"?: undefined;
        "zipFile"?: undefined;
        "isPrivate"?: undefined;
        "uri"?: undefined;
        "brand"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "_esParentKey"?: undefined;
    "pattern"?: undefined;
    "message"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format": string;
    "_esParentKey": string;
    "properties": {
        "name": {
            "$ref": string;
        };
        "product": {
            "$ref": string;
        };
        "isActive": {
            "$ref": string;
        };
        "abbrev": {
            "$ref": string;
        };
        "detailRef": {
            "$ref": string;
        };
        "zipFile": {
            "$ref": string;
        };
        "description": {
            "$ref": string;
        };
        "isPrivate": {
            "title": string;
            "description": string;
            "type": string;
            "default": boolean;
        };
        "tags": {
            "title": string;
            "type": string;
            "items": {
                "$ref": string;
            };
        };
        "company"?: undefined;
        "logo"?: undefined;
        "uri"?: undefined;
        "brand"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "pattern"?: undefined;
    "message"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
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
        "uri": {
            "title": string;
            "description": string;
            "type": string;
            "format": string;
        };
        "isActive": {
            "$ref": string;
        };
        "company"?: undefined;
        "abbrev"?: undefined;
        "description"?: undefined;
        "tags"?: undefined;
        "logo"?: undefined;
        "product"?: undefined;
        "detailRef"?: undefined;
        "zipFile"?: undefined;
        "isPrivate"?: undefined;
        "brand"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "_esParentKey"?: undefined;
    "pattern"?: undefined;
    "message"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format": string;
    "_esParentKey": string;
    "properties": {
        "name": {
            "$ref": string;
        };
        "brand": {
            "$ref": string;
        };
        "isActive": {
            "$ref": string;
        };
        "abbrev": {
            "$ref": string;
        };
        "description": {
            "$ref": string;
        };
        "tags": {
            "title": string;
            "type": string;
            "items": {
                "$ref": string;
            };
        };
        "company"?: undefined;
        "logo"?: undefined;
        "product"?: undefined;
        "detailRef"?: undefined;
        "zipFile"?: undefined;
        "isPrivate"?: undefined;
        "uri"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "pattern"?: undefined;
    "message"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
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
        "company"?: undefined;
        "isActive"?: undefined;
        "abbrev"?: undefined;
        "description"?: undefined;
        "tags"?: undefined;
        "logo"?: undefined;
        "product"?: undefined;
        "detailRef"?: undefined;
        "zipFile"?: undefined;
        "isPrivate"?: undefined;
        "uri"?: undefined;
        "brand"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "format"?: undefined;
    "_esParentKey"?: undefined;
    "pattern"?: undefined;
    "message"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "pattern": string;
    "message": string;
    "_esUnique": boolean;
    "format"?: undefined;
    "_esParentKey"?: undefined;
    "properties"?: undefined;
    "required"?: undefined;
    "additionalProperties"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format": string;
    "minLength": number;
    "maxLength": number;
    "message": string;
    "_esParentKey"?: undefined;
    "properties"?: undefined;
    "required"?: undefined;
    "additionalProperties"?: undefined;
    "pattern"?: undefined;
    "_esUnique"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "default": boolean;
    "readOnly": boolean;
    "format"?: undefined;
    "_esParentKey"?: undefined;
    "properties"?: undefined;
    "required"?: undefined;
    "additionalProperties"?: undefined;
    "pattern"?: undefined;
    "message"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "minLength": number;
    "maxLength": number;
    "message": string;
    "_esUnique": boolean;
    "format"?: undefined;
    "_esParentKey"?: undefined;
    "properties"?: undefined;
    "required"?: undefined;
    "additionalProperties"?: undefined;
    "pattern"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
} | {
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "pattern": string;
    "message": string;
    "format"?: undefined;
    "_esParentKey"?: undefined;
    "properties"?: undefined;
    "required"?: undefined;
    "additionalProperties"?: undefined;
    "_esUnique"?: undefined;
    "minLength"?: undefined;
    "maxLength"?: undefined;
    "default"?: undefined;
    "readOnly"?: undefined;
})[];
export declare const workingSpecSchemaMap: {
    brand: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "_esParentKey": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "company": {
                "$ref": string;
            };
            "isActive": {
                "$ref": string;
            };
            "abbrev": {
                "$ref": string;
            };
            "description": {
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
        "required": string[];
        "additionalProperties": boolean;
    };
    company: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "isActive": {
                "$ref": string;
            };
            "abbrev": {
                "$ref": string;
            };
            "description": {
                "$ref": string;
            };
            "tags": {
                "title": string;
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
            "logo": {
                "$ref": string;
            };
        };
        "required": string[];
        "additionalProperties": boolean;
    };
    detail: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "_esParentKey": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "product": {
                "$ref": string;
            };
            "isActive": {
                "$ref": string;
            };
            "abbrev": {
                "$ref": string;
            };
            "detailRef": {
                "$ref": string;
            };
            "zipFile": {
                "$ref": string;
            };
            "description": {
                "$ref": string;
            };
            "isPrivate": {
                "title": string;
                "description": string;
                "type": string;
                "default": boolean;
            };
            "tags": {
                "title": string;
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
        };
        "required": string[];
        "additionalProperties": boolean;
    };
    getUri: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "uri": {
                "title": string;
                "description": string;
                "type": string;
                "format": string;
            };
            "isActive": {
                "$ref": string;
            };
        };
        "required": string[];
        "additionalProperties": boolean;
    };
    product: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "_esParentKey": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "brand": {
                "$ref": string;
            };
            "isActive": {
                "$ref": string;
            };
            "abbrev": {
                "$ref": string;
            };
            "description": {
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
        "required": string[];
        "additionalProperties": boolean;
    };
    brandReference: {
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
    companyReference: {
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
    productReference: {
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
    abbreviation: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "pattern": string;
        "message": string;
        "_esUnique": boolean;
    };
    description: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "minLength": number;
        "maxLength": number;
        "message": string;
    };
    isActive: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "default": boolean;
        "readOnly": boolean;
    };
    name: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "minLength": number;
        "maxLength": number;
        "message": string;
        "_esUnique": boolean;
    };
    tag: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "pattern": string;
        "message": string;
    };
};
