import { StringSchema } from './string-schema';
export interface EnumSchema extends StringSchema {
    enum: string[];
    _esTitles: string[];
}
export declare const isEnumSchema: (value: any) => value is EnumSchema;
