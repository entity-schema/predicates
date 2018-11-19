import { RefSchema } from './ref-schema';
import { TypedSchema } from './typed-schema';
import { OneOfSchema } from './oneof-schema';
export declare type Subschema = RefSchema | TypedSchema | OneOfSchema;
export declare const isSubschema: (value: any) => value is Subschema;
export declare const assertSubschema: (value: any, name?: string) => void;
