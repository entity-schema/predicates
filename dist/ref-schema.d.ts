import { JSONSchema4 } from 'json-schema';
export interface RefSchema extends JSONSchema4 {
    $ref: string;
}
export declare const isRefSchema: (value: any) => value is RefSchema;
export declare const assertRefSchema: (refSchema: any, name?: string) => void;
