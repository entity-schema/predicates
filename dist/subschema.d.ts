import { Subschema } from './types';
export declare const isSubschema: (value: any) => value is Subschema;
export declare const assertSubschema: (value: any, name?: string) => void;
