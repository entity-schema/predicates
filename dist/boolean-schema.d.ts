import { TypedSchema } from './typed-schema';
export interface BooleanSchema extends TypedSchema {
    type: 'boolean';
}
export declare const isBooleanSchema: (value: any) => value is BooleanSchema;