"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const working_spec_1 = require("./fixtures/working-spec");
const __1 = require("..");
describe('entity schema predicates', () => {
    describe('working spec', () => {
        describe('ArraySchema', () => {
            const { brand, company, detail, product } = working_spec_1.workingSpecSchemaMap;
            const entities = [brand, company, detail, product];
            entities.forEach(schema => {
                it(`${schema.title}.properties.tags is ArraySchema`, () => {
                    assert(__1.predicates.arraySchema(schema.properties['tags']));
                });
                it(`assertArraySchema ${schema.title}.properties.tags`, () => {
                    __1.assertArraySchema(schema.properties['tags'], schema.title);
                });
            });
        });
        describe('BooleanSchema', () => {
            const { isActive } = working_spec_1.workingSpecSchemaMap;
            it('isActive is BooleanSchema', () => {
                assert(__1.predicates.booleanSchema(isActive));
            });
            it('assertBooleanSchema isActive', () => {
                __1.assertBooleanSchema(isActive, 'isActive');
            });
        });
        describe('ChildEntitySchema', () => {
            const { brand, detail, product } = working_spec_1.workingSpecSchemaMap;
            const childEntities = [brand, detail, product];
            childEntities.forEach(schema => {
                it(`${schema.title} is ChildEntitySchema`, () => {
                    assert(__1.predicates.childEntitySchema(schema));
                });
                it(`assertChildEntitySchema ${schema.title}`, () => {
                    __1.assertChildEntitySchema(schema, schema.title);
                });
            });
        });
        describe('ConstReferenceSchema', () => {
            const { brandReference, companyReference, productReference } = working_spec_1.workingSpecSchemaMap;
            const entityReferences = [
                brandReference, companyReference, productReference
            ];
            entityReferences.forEach(schema => {
                it(`${schema.title}.properties.entityType is EntityReferenceSchema`, () => {
                    assert(__1.predicates.constPropertySchema(schema.properties.entityType));
                });
                it(`assertConstPropertySchema ${schema.title}`, () => {
                    __1.assertConstPropertySchema(schema.properties.entityType, schema.title);
                });
            });
        });
        describe('EntitySchema', () => {
            const { brand, company, detail, getUri, product } = working_spec_1.workingSpecSchemaMap;
            const entities = [brand, company, detail, getUri, product];
            entities.forEach(schema => {
                it(`${schema.title} is EntitySchema`, () => {
                    assert(__1.predicates.entitySchema(schema));
                });
                it(`assertEntitySchema ${schema.title}`, () => {
                    __1.assertEntitySchema(schema, schema.title);
                });
            });
        });
        describe('EntityReferenceSchema', () => {
            const { brandReference, companyReference, productReference } = working_spec_1.workingSpecSchemaMap;
            const entityReferences = [
                brandReference, companyReference, productReference
            ];
            entityReferences.forEach(schema => {
                it(`${schema.title} is EntityReferenceSchema`, () => {
                    assert(__1.predicates.entityReferenceSchema(schema));
                });
                it(`assertEntityReferenceSchema ${schema.title}`, () => {
                    __1.assertEntityReferenceSchema(schema, schema.title);
                });
            });
        });
        describe('ObjectSchema', () => {
            const { brand, company, detail, getUri, product } = working_spec_1.workingSpecSchemaMap;
            const entities = [brand, company, detail, getUri, product];
            entities.forEach(schema => {
                it(`${schema.title} is ObjectSchema`, () => {
                    assert(__1.predicates.objectSchema(schema));
                });
                it(`assertObjectSchema ${schema.title}`, () => {
                    __1.assertObjectSchema(schema, schema.title);
                });
                it(`assertObjectSchemaProperties ${schema.title}`, () => {
                    __1.assertObjectSchemaProperties(schema);
                });
                it(`assertObjectSchemaProperty ${schema.title}`, () => {
                    __1.assertObjectSchemaProperty(schema, 'name');
                });
            });
        });
        describe('RootSchema', () => {
            working_spec_1.workingSpecSchemas.forEach(schema => {
                it(`${schema.title} is RootSchema`, () => {
                    assert(__1.predicates.rootSchema(schema));
                });
                it(`assertRootSchema ${schema.title}`, () => {
                    __1.assertRootSchema(schema, schema.title);
                });
            });
        });
        describe('StringSchema', () => {
            const { name } = working_spec_1.workingSpecSchemaMap;
            it('name is StringSchema', () => {
                assert(__1.predicates.stringSchema(name));
            });
            it('assertStringSchema name', () => {
                __1.assertStringSchema(name, 'name');
            });
        });
        describe('UniquePropertySchema', () => {
            const { name } = working_spec_1.workingSpecSchemaMap;
            it('name is UniquePropertySchema', () => {
                assert(__1.predicates.uniquePropertySchema(name));
            });
            it('assertUniquePropertySchema name', () => {
                __1.assertUniquePropertySchema(name, 'name');
            });
        });
    });
});
//# sourceMappingURL=working-spec.js.map