import { ObjectSchema } from './types';
export declare const isObjectSchema: (value: any) => value is ObjectSchema;
export declare const assertObjectSchema: (objectSchema: any, name?: string) => void;
export declare const assertObjectSchemaProperties: (objectSchema: any, name?: string) => void;
export declare const assertObjectSchemaProperty: (objectSchema: any, key: string, name?: string) => void;
