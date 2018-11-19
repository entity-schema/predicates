import { StringSchema } from './string-schema';
export interface ConstPropertySchema extends StringSchema {
    enum: [string];
    readOnly: true;
    default: string;
}
export declare const isConstPropertySchema: (value: any) => value is ConstPropertySchema;
export declare const assertConstPropertySchema: (constPropertySchema: any, name?: string) => void;
