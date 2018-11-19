import { JSONSchema4 } from 'json-schema';
import { Subschema } from './subschema';
export interface OneOfSchema extends JSONSchema4 {
    title: string;
    oneOf: Subschema[];
}
export declare const isOneOfSchema: (value: any) => value is OneOfSchema;
export declare const assertOneOfSchema: (oneOfSchema: any, name?: string) => void;
