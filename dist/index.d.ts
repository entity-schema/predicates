export { assertOneOfSchema } from './oneof-schema';
export { assertEntitySchema } from './entity-schema';
export { assertRootSchema } from './root-schema';
export { assertEnumSchema } from './enum-schema';
export { assertRefSchema } from './ref-schema';
export { assertChildEntitySchema } from './child-entity-schema';
export { assertConstPropertySchema } from './const-property-schema';
export { assertEntityReferenceSchema } from './entity-reference-schema';
export { assertSubschema } from './subschema';
export { assertTypedSchema } from './typed-schema';
export { assertObjectSchema, assertObjectSchemaProperties, assertObjectSchemaProperty } from './object-schema';
export { assertStringSchema } from './string-schema';
export { assertNumberSchema } from './number-schema';
export { assertBooleanSchema } from './boolean-schema';
export { assertArraySchema } from './array-schema';
export { assertIntegerSchema } from './integer-schema';
export { assertSecuritySchema } from './security-schema';
export { assertUniquePropertySchema } from './unique-property-schema';
export declare const predicates: {
    oneOfSchema: (value: any) => value is import("./oneof-schema").OneOfSchema;
    constPropertySchema: (value: any) => value is import("./const-property-schema").ConstPropertySchema;
    stringSchema: (value: any) => value is import("./string-schema").StringSchema;
    numberSchema: (value: any) => value is import("./number-schema").NumberSchema;
    integerSchema: (value: any) => value is import("./integer-schema").IntegerSchema;
    booleanSchema: (value: any) => value is import("./boolean-schema").BooleanSchema;
    arraySchema: (value: any) => value is import("./array-schema").ArraySchema;
    childEntitySchema: (value: any) => value is import("./child-entity-schema").ChildEntitySchema;
    entitySchema: (value: any) => value is import("./entity-schema").EntitySchema;
    entityReferenceSchema: (value: any) => value is import("./entity-reference-schema").EntityReferenceSchema;
    objectSchema: (value: any) => value is import("./object-schema").ObjectSchema;
    rootSchema: (value: any) => value is import("./root-schema").RootSchema;
    refSchema: (value: any) => value is import("./ref-schema").RefSchema;
    enumSchema: (value: any) => value is import("./enum-schema").EnumSchema;
    uniquePropertySchema: (value: any) => value is import("./unique-property-schema").UniquePropertySchema;
    securitySchema: (value: any) => value is import("./security-schema").SecuritySchema;
    typedSchema: (value: any) => value is import("./typed-schema").TypedSchema;
    subschema: (value: any) => value is import("./subschema").Subschema;
    anySchema: (value: any) => value is any;
};
export declare const predicateUtils: {
    isType: (subject: any, typename: string) => boolean;
    isOnly: (subject: any, typename: string) => boolean;
    some: (subject: any, ...typenames: string[]) => boolean;
    every: (subject: any, ...typenames: string[]) => boolean;
    of: (subject: any) => string | undefined;
    allOf: (subject: any) => string[];
    types: () => string[];
};
