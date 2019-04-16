import { TypedSchema } from './types';
export declare const isTypedSchema: (value: any) => value is TypedSchema;
export declare const assertTypedSchema: (typedSchema: any, name?: string) => void;
export declare const assertTypedSchemaOf: (typedSchema: any, type: "string" | "number" | "boolean" | "object" | "integer" | "array", name?: string) => void;
