import { TypedSchema } from './typed-schema';
export interface SecuritySchema extends TypedSchema {
    _esSecurity: {
        create: string[];
        read: string[];
        update: string[];
        delete: string[];
    };
}
export declare const isSecuritySchema: (value: any) => value is SecuritySchema;
export declare const assertSecuritySchema: (securitySchema: any, name?: string) => void;
export declare const assertSecuritySchemaRoles: (roles: any, roleName: string, name?: string) => void;
