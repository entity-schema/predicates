import { ObjectSchema } from './object-schema';
import { StringSchema } from './string-schema';
import { ConstPropertySchema } from './const-property-schema';
export interface EntityReferenceSchema extends ObjectSchema {
    properties: {
        entityId: StringSchema;
        entityType: ConstPropertySchema;
    };
}
export declare const isEntityReferenceSchema: (value: any) => value is EntityReferenceSchema;
