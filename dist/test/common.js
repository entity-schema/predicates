"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const files_1 = require("./fixtures/common/files");
const security_1 = require("./fixtures/common/security");
const __1 = require("..");
describe('entity schema predicates', () => {
    describe('common', () => {
        describe('files', () => {
            describe('IntegerSchema', () => {
                const { fileMeta } = files_1.fileSchemaMap;
                it('fileMeta.properties.size is IntegerSchema', () => {
                    assert(__1.predicates.integerSchema(fileMeta.properties.size));
                });
                it('assertIntegerSchema fileMeta.properties.size', () => {
                    __1.assertIntegerSchema(fileMeta.properties.size, 'fileMeta.properties.size');
                });
            });
            describe('RootSchema', () => {
                files_1.fileSchemas.forEach(schema => {
                    it(`${schema.title} is RootSchema`, () => {
                        assert(__1.predicates.rootSchema(schema));
                    });
                    it(`assertRootSchema ${schema.title}`, () => {
                        __1.assertRootSchema(schema, schema.title);
                    });
                });
            });
        });
        describe('security', () => {
            describe('RootSchema', () => {
                security_1.securitySchemas.forEach(schema => {
                    it(`${schema.title} is RootSchema`, () => {
                        assert(__1.predicates.rootSchema(schema));
                    });
                    it(`assertRootSchema ${schema.title}`, () => {
                        __1.assertRootSchema(schema, schema.title);
                    });
                });
            });
            describe('SecuritySchema', () => {
                const { apiKey, user } = security_1.securitySchemaMap;
                const securitySchemas = [apiKey, user];
                securitySchemas.forEach(schema => {
                    it(`${schema.title} is SecuritySchema`, () => {
                        assert(__1.predicates.securitySchema(schema));
                    });
                    it(`assertSecuritySchema ${schema.title}`, () => {
                        __1.assertSecuritySchema(schema, schema.title);
                    });
                    it(`assertSecuritySchemaRoles ${schema.title}`, () => {
                        __1.assertSecuritySchemaRoles(schema, 'create');
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=common.js.map