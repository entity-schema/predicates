import { TypedSchema } from './typed-schema';
export interface NumberSchema extends TypedSchema {
    type: 'number';
}
export declare const isNumberSchema: (value: any) => value is NumberSchema;
export declare const assertNumberSchema: (numberSchema: any, name?: string) => void;
