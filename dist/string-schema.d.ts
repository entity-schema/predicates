import { TypedSchema } from './typed-schema';
export interface StringSchema extends TypedSchema {
    type: 'string';
}
export declare const isStringSchema: (value: any) => value is StringSchema;
