import { Subschema } from './subschema';
import { TypedSchema } from './typed-schema';
export interface ArraySchema extends TypedSchema {
    type: 'array';
    items?: Subschema;
}
export declare const isArraySchema: (value: any) => value is ArraySchema;
