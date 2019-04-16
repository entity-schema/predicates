export declare const passSchemaMap: {
    enumPass: {
        "title": string;
        "type": string;
        "enum": string[];
        "_enumTitles": string[];
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
