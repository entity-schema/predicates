import { JSONSchema4 } from 'json-schema';
export declare type TypedSchemaType = ('string' | 'number' | 'integer' | 'boolean' | 'object' | 'array');
export interface TypedSchema extends JSONSchema4 {
    title: string;
    type: TypedSchemaType;
}
export declare const isTypedSchema: (value: any) => value is TypedSchema;
export declare const assertTypedSchema: (typedSchema: any, name?: string) => void;
export declare const assertTypedSchemaOf: (typedSchema: any, type: "string" | "number" | "boolean" | "object" | "integer" | "array", name?: string) => void;
