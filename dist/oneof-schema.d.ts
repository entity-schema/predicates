import { Subschema } from './subschema';
export interface OneOfSchema {
    title: string;
    oneOf: Subschema[];
}
export declare const isOneOfSchema: (value: any) => value is OneOfSchema;
export declare const assertOneOfSchema: (oneOfSchema: any, name?: string) => void;
