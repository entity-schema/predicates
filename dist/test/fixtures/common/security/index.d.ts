export declare const securitySchemas: ({
    "id": string;
    "title": string;
    "description": string;
    "type": string;
    "format": string;
    "properties": {
        "name": {
            "$ref": string;
        };
        "user": {
            "$ref": string;
        };
        "secret": {
            "title": string;
            "description": string;
            "type": string;
            "default": string;
            "readOnly": boolean;
        };
        "tags": {
            "title": string;
            "description": string;
            "type": string;
            "items": {
                "title": string;
                "description": string;
                "type": string;
            };
        };
        "email"?: undefined;
        "password"?: undefined;
        "roles"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "_esSecurity": {
        "create": string[];
        "read": string[];
        "update": string[];
        "delete": string[];
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
        "email": {
            "title": string;
            "description": string;
            "type": string;
            "format": string;
        };
        "password": {
            "title": string;
            "description": string;
            "type": string;
            "format": string;
            "_esSecurity": {
                "create": string[];
                "read": string[];
                "update": string[];
                "delete": string[];
            };
        };
        "roles": {
            "title": string;
            "description": string;
            "type": string;
            "items": {
                "title": string;
                "description": string;
                "type": string;
            };
            "readOnly": boolean;
            "default": string[];
            "_esSecurity": {
                "create": string[];
                "read": string[];
                "update": string[];
                "delete": string[];
            };
        };
        "user"?: undefined;
        "secret"?: undefined;
        "tags"?: undefined;
        "entityId"?: undefined;
        "entityType"?: undefined;
    };
    "_esSecurity": {
        "create": string[];
        "read": string[];
        "update": string[];
        "delete": string[];
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
        "user"?: undefined;
        "secret"?: undefined;
        "tags"?: undefined;
        "email"?: undefined;
        "password"?: undefined;
        "roles"?: undefined;
    };
    "required": string[];
    "additionalProperties": boolean;
    "format"?: undefined;
    "_esSecurity"?: undefined;
})[];
export declare const securitySchemaMap: {
    apiKey: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "user": {
                "$ref": string;
            };
            "secret": {
                "title": string;
                "description": string;
                "type": string;
                "default": string;
                "readOnly": boolean;
            };
            "tags": {
                "title": string;
                "description": string;
                "type": string;
                "items": {
                    "title": string;
                    "description": string;
                    "type": string;
                };
            };
        };
        "_esSecurity": {
            "create": string[];
            "read": string[];
            "update": string[];
            "delete": string[];
        };
        "additionalProperties": boolean;
        "required": string[];
    };
    user: {
        "id": string;
        "title": string;
        "description": string;
        "type": string;
        "format": string;
        "properties": {
            "name": {
                "$ref": string;
            };
            "email": {
                "title": string;
                "description": string;
                "type": string;
                "format": string;
            };
            "password": {
                "title": string;
                "description": string;
                "type": string;
                "format": string;
                "_esSecurity": {
                    "create": string[];
                    "read": string[];
                    "update": string[];
                    "delete": string[];
                };
            };
            "roles": {
                "title": string;
                "description": string;
                "type": string;
                "items": {
                    "title": string;
                    "description": string;
                    "type": string;
                };
                "readOnly": boolean;
                "default": string[];
                "_esSecurity": {
                    "create": string[];
                    "read": string[];
                    "update": string[];
                    "delete": string[];
                };
            };
        };
        "_esSecurity": {
            "create": string[];
            "read": string[];
            "update": string[];
            "delete": string[];
        };
        "additionalProperties": boolean;
        "required": string[];
    };
    userReference: {
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
};
