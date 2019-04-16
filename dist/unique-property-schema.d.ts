import { TypedSchema } from './types';
export interface UniquePropertySchema extends TypedSchema {
    _esUnique: true;
}
export declare const isUniquePropertySchema: (value: any) => value is UniquePropertySchema;
export declare const assertUniquePropertySchema: (uniquePropertySchema: any, name?: string) => void;
