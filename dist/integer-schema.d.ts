import { TypedSchema } from './typed-schema';
export interface IntegerSchema extends TypedSchema {
    type: 'integer';
}
export declare const isIntegerSchema: (value: any) => value is IntegerSchema;
