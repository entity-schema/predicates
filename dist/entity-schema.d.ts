import { ObjectSchema } from './object-schema';
import { RootSchema } from './root-schema';
export declare type EntitySchema = EntitySchemaBase & RootSchema;
interface EntitySchemaBase extends ObjectSchema {
    format: 'entity-schema';
}
export declare const isEntitySchema: (value: any) => value is EntitySchema;
export declare const assertEntitySchema: (entitySchema: any, name?: string) => void;
export {};
