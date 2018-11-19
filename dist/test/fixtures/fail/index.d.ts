export declare const failSchemaMap: {
    arrayFail: {
        "id": string;
        "title": string;
        "anyOf": ({
            "description": string;
            "type": string;
            "items": {
                "title": string;
                "type": string;
            };
            "_expect": string;
            "title"?: undefined;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "items": {
                "title": string;
                "type": string;
            };
            "_expect": string;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "_expect": string;
            "items"?: undefined;
        })[];
    };
    booleanFail: {
        "id": string;
        "title": string;
        "anyOf": {
            "title": string;
            "description": string;
            "type": string;
            "_expect": string;
        }[];
    };
    childEntityFail: {
        "id": string;
        "title": string;
        "anyOf": ({
            "id": string;
            "title": string;
            "description": string;
            "type": string;
            "format": string;
            "properties": {
                "parent": {
                    "$ref": string;
                };
            };
            "required": string[];
            "additionalProperties": boolean;
            "_expect": string;
            "_esParentKey"?: undefined;
        } | {
            "id": string;
            "title": string;
            "description": string;
            "type": string;
            "format": string;
            "_esParentKey": string;
            "properties": {
                "parent"?: undefined;
            };
            "required": string[];
            "additionalProperties": boolean;
            "_expect": string;
        } | {
            "id": string;
            "title": string;
            "description": string;
            "type": string;
            "format": string;
            "_esParentKey": string;
            "properties": {
                "parent": {
                    "$ref": string;
                };
            };
            "required": string[];
            "additionalProperties": boolean;
            "_expect": string;
        })[];
    };
    constPropertyFail: {
        "id": string;
        "title": string;
        "anyOf": ({
            "title": string;
            "description": string;
            "type": string;
            "default": string;
            "readOnly": boolean;
            "_expect": string;
            "enum"?: undefined;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "enum": null[];
            "default": string;
            "readOnly": boolean;
            "_expect": string;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "enum": string[];
            "readOnly": boolean;
            "_expect": string;
            "default"?: undefined;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "enum": string[];
            "default": string;
            "readOnly": boolean;
            "_expect": string;
        })[];
    };
    entityFail: {
        "id": string;
        "title": string;
        "anyOf": ({
            "title": string;
            "description": string;
            "type": string;
            "format": string;
            "properties": {
                "name": {
                    "$ref": string;
                };
            };
            "additionalProperties": boolean;
            "_expect": string;
            "id"?: undefined;
        } | {
            "id": string;
            "title": string;
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "$ref": string;
                };
            };
            "additionalProperties": boolean;
            "_expect": string;
            "format"?: undefined;
        })[];
    };
    enumFail: {
        "id": string;
        "title": string;
        "anyOf": ({
            "title": string;
            "description": string;
            "type": string;
            "_esTitles": string[];
            "_expect": string;
            "enum"?: undefined;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "enum": number[];
            "_esTitles": string[];
            "_expect": string;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "enum": string[];
            "_expect": string;
            "_esTitles"?: undefined;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "enum": string[];
            "_esTitles": number[];
            "_expect": string;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "enum": string[];
            "_esTitles": string[];
            "_expect": string;
        })[];
    };
    integerFail: {
        "id": string;
        "title": string;
        "anyOf": {
            "title": string;
            "description": string;
            "type": string;
            "_expect": string;
        }[];
    };
    numberFail: {
        "id": string;
        "title": string;
        "anyOf": {
            "title": string;
            "description": string;
            "type": string;
            "_expect": string;
        }[];
    };
    objectFail: {
        "id": string;
        "title": string;
        "anyOf": ({
            "title": string;
            "description": string;
            "type": string;
            "properties": {
                "name": {
                    "$ref": string;
                };
                "entity"?: undefined;
            };
            "additionalProperties": boolean;
            "_expect": string;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "additionalProperties": boolean;
            "_expect": string;
            "properties"?: undefined;
        } | {
            "title": string;
            "description": string;
            "type": string;
            "properties": {
                "entity": {
                    "id": string;
                    "title": string;
                    "type": string;
                    "format": string;
                    "properties": {
                        "name": {
                            "$ref": string;
                        };
                    };
                    "additionalProperties": boolean;
                };
                "name"?: undefined;
            };
            "additionalProperties": boolean;
            "_expect": string;
        })[];
    };
    oneOfFail: {
        "id": string;
        "title": string;
        "anyOf": ({
            "description": string;
            "oneOf": {
                "$ref": string;
            }[];
            "_expect": string;
            "title"?: undefined;
        } | {
            "title": string;
            "description": string;
            "_expect": string;
            "oneOf"?: undefined;
        } | {
            "title": string;
            "description": string;
            "oneOf": {
                "type": string;
            }[];
            "_expect": string;
        })[];
    };
    rootFail: {
        "id": string;
        "title": string;
        "anyOf": {
            "title": string;
            "description": string;
            "type": string;
            "_expect": string;
        }[];
    };
};
