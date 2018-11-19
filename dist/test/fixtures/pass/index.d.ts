export declare const passSchemaMap: {
    enumPass: {
        "title": string;
        "type": string;
        "enum": string[];
        "_esTitles": string[];
    };
    numberPass: {
        "title": string;
        "type": string;
    };
    oneOfPass: {
        "title": string;
        "oneOf": {
            "$ref": string;
        }[];
    };
};
