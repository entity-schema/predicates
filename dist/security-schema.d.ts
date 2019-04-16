import { SecuritySchema } from './types';
export declare const isSecuritySchema: (value: any) => value is SecuritySchema;
export declare const assertSecuritySchema: (securitySchema: any, name?: string) => void;
export declare const assertSecuritySchemaRoles: (securitySchema: any, roleName: string, name?: string) => void;
