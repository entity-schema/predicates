"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const working_spec_1 = require("./fixtures/working-spec");
const __1 = require("..");
describe('entity schema predicates', () => {
    describe('from working spec', () => {
        describe('all are root schema', () => {
            working_spec_1.workingSpecSchemas.forEach(schema => {
                it(`${schema.title} is root schema`, () => {
                    assert(__1.predicates.rootSchema(schema));
                });
            });
        });
        describe('entity schema', () => {
            const { brand, company, detail, getUri, product } = working_spec_1.workingSpecSchemaMap;
            const entities = [brand, company, detail, getUri, product];
            entities.forEach(schema => {
                it(`${schema.title} is entity schema`, () => {
                    assert(__1.predicates.entitySchema(schema));
                });
            });
        });
    });
});
//# sourceMappingURL=index.js.map