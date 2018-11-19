import { Subschema } from './subschema';
import { TypedSchema } from './typed-schema';
export interface ObjectSchemaProperties {
    [name: string]: Subschema;
}
export interface ObjectSchema extends TypedSchema {
    type: 'object';
    properties: ObjectSchemaProperties;
    additionalProperties: false;
}
export declare const isObjectSchema: (value: any) => value is ObjectSchema;
export declare const assertObjectSchema: (objectSchema: any, name?: string) => void;
export declare const assertObjectSchemaProperties: (objectSchema: any, name?: string) => void;
export declare const assertObjectSchemaProperty: (objectSchema: any, key: string, name?: string) => void;
