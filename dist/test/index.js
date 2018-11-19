"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const pass_1 = require("./fixtures/pass");
const __1 = require("..");
const fail_1 = require("./fixtures/fail");
describe('entity schema predicates', () => {
    describe('pass', () => {
        const { enumPass, numberPass, oneOfPass } = pass_1.passSchemaMap;
        describe('EnumSchema', () => {
            it('isEnumSchema', () => {
                assert(__1.predicates.enumSchema(enumPass));
            });
            it('assertEnumSchema', () => {
                __1.assertEnumSchema(enumPass, 'enumPass');
            });
        });
        describe('NumberSchema', () => {
            it('isNumberSchema', () => {
                assert(__1.predicates.numberSchema(numberPass));
            });
            it('assertNumberSchema', () => {
                __1.assertNumberSchema(numberPass, 'numberPass');
            });
        });
        describe('OneOfSchema', () => {
            it('isOneOfSchema', () => {
                assert(__1.predicates.oneOfSchema(oneOfPass));
            });
            it('assertOneOfSchema', () => {
                __1.assertOneOfSchema(oneOfPass, 'oneOfPass');
            });
        });
        describe('SubSchema', () => {
            it('isSubschema', () => {
                assert(__1.predicates.subschema(oneOfPass));
            });
            it('assertSubschema', () => {
                __1.assertSubschema(oneOfPass, 'oneOfPass');
            });
        });
    });
    describe('fail', () => {
        const { arrayFail, booleanFail, childEntityFail, constPropertyFail, entityFail, enumFail, integerFail, numberFail, objectFail, oneOfFail, rootFail } = fail_1.failSchemaMap;
        const assertFails = (name, schema, predicate, assertion) => {
            describe(name, () => {
                schema.anyOf.forEach(schema => {
                    it(`fails predicate because ${schema.description}`, () => {
                        assert(!predicate(schema));
                    });
                    it(`assert throws because ${schema.description}`, () => {
                        assert.throws(() => assertion(schema), {
                            name: 'TypeError',
                            message: schema._expect
                        });
                    });
                });
            });
        };
        assertFails('ArraySchema', arrayFail, __1.predicates.arraySchema, __1.assertArraySchema);
        assertFails('BooleanSchema', booleanFail, __1.predicates.booleanSchema, __1.assertBooleanSchema);
        assertFails('ChildEntitySchema', childEntityFail, __1.predicates.childEntitySchema, __1.assertChildEntitySchema);
        assertFails('ConstPropertySchema', constPropertyFail, __1.predicates.constPropertySchema, __1.assertConstPropertySchema);
        assertFails('EntitySchema', entityFail, __1.predicates.entitySchema, __1.assertEntitySchema);
        assertFails('EnumSchema', enumFail, __1.predicates.enumSchema, __1.assertEnumSchema);
        assertFails('IntegerSchema', integerFail, __1.predicates.integerSchema, __1.assertIntegerSchema);
        assertFails('NumberSchema', numberFail, __1.predicates.numberSchema, __1.assertNumberSchema);
        assertFails('ObjectSchema', objectFail, __1.predicates.objectSchema, __1.assertObjectSchema);
        assertFails('OneOfSchema', oneOfFail, __1.predicates.oneOfSchema, __1.assertOneOfSchema);
        assertFails('RootSchema', rootFail, __1.predicates.rootSchema, __1.assertRootSchema);
    });
});
//# sourceMappingURL=index.js.map