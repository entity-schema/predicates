import { ObjectSchema } from './object-schema';
import { RootSchema } from './root-schema';
export interface EntityFormatSchema {
    format: 'entity-schema';
}
export declare type EntitySchema = EntityFormatSchema & RootSchema & ObjectSchema;
export declare const isEntitySchema: (value: any) => value is EntitySchema;
export declare const assertEntitySchema: (entitySchema: any, name?: string) => void;
