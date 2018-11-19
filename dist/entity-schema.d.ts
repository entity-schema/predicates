import { ObjectSchema } from './object-schema';
export interface EntitySchema extends ObjectSchema {
    id: string;
    format: 'entity-schema';
}
export declare const isEntitySchema: (value: any) => value is EntitySchema;
export declare const assertEntitySchema: (entitySchema: any, name?: string) => void;
