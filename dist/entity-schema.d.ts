import { EntitySchema } from './types';
export declare const isEntitySchema: (value: any) => value is EntitySchema;
export declare const assertEntitySchema: (entitySchema: any, name?: string) => void;
