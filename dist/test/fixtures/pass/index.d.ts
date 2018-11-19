export declare const passSchemas: ({
    "id": string;
    "title": string;
    "type": string;
    "enum": string[];
    "_esTitles": string[];
    "oneOf"?: undefined;
} | {
    "id": string;
    "title": string;
    "type": string;
    "enum"?: undefined;
    "_esTitles"?: undefined;
    "oneOf"?: undefined;
} | {
    "id": string;
    "title": string;
    "oneOf": {
        "$ref": string;
    }[];
    "type"?: undefined;
    "enum"?: undefined;
    "_esTitles"?: undefined;
})[];
export declare const passSchemaMap: {
    enumPass: {
        "id": string;
        "title": string;
        "type": string;
        "enum": string[];
        "_esTitles": string[];
    };
    numberPass: {
        "id": string;
        "title": string;
        "type": string;
    };
    oneOfPass: {
        "id": string;
        "title": string;
        "oneOf": {
            "$ref": string;
        }[];
    };
};
