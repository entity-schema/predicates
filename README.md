# predicates

Predicates/type guards, assertions and interfaces for Entity Schema

## Entity Schema

A subset of JSON Schema (and associated conventions) for defining **entities**.

Intent is to reduce duplication of effort by allowing you to define your
application entities once using JSON Schema, and then from that automatically
generate APIs, interfaces, database schema, HTML forms for editing and
creating entities etc

We extend JSON schema but not in any way that affects validation, just extra
metadata etc, and as little as possible (eg if it can be done with plain JSON
Schema do it that way instead)

## Usage

`npm install @entity-schema/predicates`

Entity Schema consists of the following schema types. Some of them are unions of
other types. Documentation for the format of each appears below.

- TypedSchema
- ArraySchema
- BooleanSchema
- IntegerSchema
- NumberSchema
- ObjectSchema
- StringSchema
- RefSchema
- OneOfSchema
- Subschema
- RootSchema
- EntitySchema
- ChildEntitySchema
- EnumSchema
- ConstPropertySchema
- EntityReferenceSchema
- SecuritySchema
- UniquePropertySchema

The package exports:

- A predicate for each schema type, testing if a schema instance matches the
  expected inteface - the predicates also implement TypeScript type guards
- An assertion function for each schema type, which throws a TypeError if a
  schema instance does not match the expected interface. The error message
  will explicitly tell you what was wrong with the schema
- A TypeScript interface or type for each schema type

### predicate example

```javascript
const fooSchema = require( './foo.schema.json' )
const { isTypedSchema } = require( '@entity-schema/predicates' )

if( isTypedSchema( fooSchema ) ){
  // ...
}
```

### assertion example

```javascript
const fooSchema = require( './foo.schema.json' )
const { assertTypedSchema } = require( '@entity-schema/predicates' )

try {
  assertTypedSchema( fooSchema )
} catch( err ){
  console.error( err )
}
```

Additionally, it exports `predicates` and `predicateUtils`:

### predicates

`predicates` is an object mapping `camelCase` names for each schema type to the
associated predicate function. It is ordered by specificity so that the keys
can be iterated over by eg a higher order function like Array.find to eg find
the most specific type for a given schema

### predicateUtils

Uses [`@mojule/is`](https://github.com/mojule/mojule/tree/master/packages/is) to
provide some additional functions for using with the predicates:

```js
const fooSchema = require( './foo.schema.json' )
const barSchema = require( './bar.schema.json' )
const { predicateUtils } = require( '@entity-schema/predicates' )

// will log true if fooSchema only matches the refSchema interface
console.log( predicateUtils.isOnly( fooSchema, 'refSchema' ) )

// will log true if fooSchema implements at least one of the provided interfaces
console.log( predicateUtils.some( fooSchema, 'refSchema', 'typedSchema' ) )

// will log true if fooSchema implements all of the provided interfaces
console.log( predicateUtils.every( fooSchema, 'rootSchema', 'objectSchema' ) )

// will return the name of the first predicate that matches
console.log( predicateUtils.of( fooSchema ) )

// return return all of the matching interfaces
console.log( predicateUtils.allOf( fooSchema ) )
```

## Schema Types

The most basic schema in the Entity Schema system is `TypedSchema` - with the
exception of `RefSchema` and `OneOfSchema`, all other schema in the system
must implement at least this interface

### TypedSchema

[src/predicates/typed-schema.ts](/src/predicates/typed-schema.ts)

All schema and subschema should have at least a title and type, with the
exception that a subschema can alternatively be a `RefSchema`. The `title`
property should be unique within the application.

Only the following types are supported:

```ts
'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'
```

```json
{
  "title": "Foo",
  "type": "string"
}
```

Additionally, each of the types has its own definition:

[src/predicates/array-schema.ts](/src/predicates/array-schema.ts)
[src/predicates/boolean-schema.ts](/src/predicates/boolean-schema.ts)
[src/predicates/integer-schema.ts](/src/predicates/integer-schema.ts)
[src/predicates/number-schema.ts](/src/predicates/number-schema.ts)
[src/predicates/object-schema.ts](/src/predicates/object-schema.ts)
[src/predicates/string-schema.ts](/src/predicates/string-schema.ts)

`ObjectSchema` has some additional constraints, see below

### RefSchema

[src/predicates/ref-schema.ts](/src/predicates/ref-schema.ts)

The schema referenced by a `RefSchema` must implement the `RootSchema`
interface, see below.

```json
{
  "$ref": "http://example.com/schema/foo"
}
```

### OneOfSchema

[src/predicates/oneof-schema.ts](/src/predicates/oneof-schema.ts)

A schema indicating that the value can match one of several schema

It must have a `title` property

There should be a discriminator of some kind so that one can tell which type it
is just be viewing an *instance*

If oneOf is a list of `EntityReferenceSchema` then the discriminator should be
`entityType` - otherwise use a property such as `kind` on the subschemas to
differentiate them

```json
{
  "title": "Payload",
  "oneOf": [
    {
      "$ref": "http://example.com/schema/document-payload-generic"
    },
    {
      "$ref": "http://example.com/schema/document-payload-unity"
    }
  ]
}
```

### Subschema

[src/predicates/subschema.ts](/src/predicates/subschema.ts)

Any one of `TypedSchema`, `RefSchema` or `OneOfSchema`

### RootSchema

Represents a `TypedSchema` with a unique ID. The `id` and `title` properties
should be unique within the application. The `title` should typically be a human
readable string based on the last slug of the `id` URI. If a schema needs to be
referred to be a `RefSchema`, it must implement at least this interface.

```json
{
  "id": "http://example.com/schema/foo",
  "title": "Foo",
  "type": "string"
}
```

### ObjectSchema

[src/predicates/object-schema.ts](/src/predicates/object-schema.ts)

Represents a `TypedSchema` of type `object`

It can have simple `TypedSchema` as property subschemas but must not have any
`EntitySchema` as a property - in this case use `EntityReferenceSchema` instead

The `additionalProperties` property must be `false`

```json
{
  "id": "http://example.com/schema/foo",
  "title": "Foo",
  "type": "object",
  "properties": {
    "name": {
      "$ref": "http://example.com/schema/name"
    },
    "bar": {
      "$ref": "http://example.com/schema/bar-reference"
    }
  },
  "required": [ "name", "bar" ],
  "additionalProperties": false
}
```

### EntitySchema

[src/predicates/entity-schema.ts](/src/predicates/entity-schema.ts)

Represents an important entity in the application - these are typically the kind
of entities that you would perist to a database, return from an API, populate a
template with etc.

An `EntitySchema` must be an `ObjectSchema`

Additionally it must have its `format` keyword set to `entity-schema`

An entity *should* have a `name: string` property, but this is not enforced

```json
{
  "id": "http://example.com/schema/foo",
  "title": "Foo",
  "type": "object",
  "format": "entity-schema",
  "properties": {
    "name": {
      "$ref": "http://example.com/schema/name"
    },
    "bar": {
      "$ref": "http://example.com/schema/bar-reference"
    }
  },
  "required": [ "name", "bar" ],
  "additionalProperties": false
}
```

### EntityReferenceSchema

[src/predicates/entity-reference-schema.ts](/src/predicates/entity-reference-schema.ts)

An `ObjectSchema` that links to an `EntitySchema` *instance*

It must have `entityId` and `entityType` properties, and no other properties

`entityId` should be a `StringSchema` that can be used to uniquely find the
*instance* within the application (typically a database ID). It can optionally
have other JSON Schema constrainsts such as `pattern` etc to match your use
case - the example below uses a MongoDB ID

`entityType` should be a `ConstPropertySchema` - the `enum` and `default` should
match the `title` field of the linked `EntitySchema`

```json
{
  "title": "Foo Reference",
  "type": "object",
  "properties": {
    "entityId": {
      "title": "Foo",
      "type": "string",
      "pattern": "^[0-9a-f]{24}$",
      "message": "Foo must be a 24 character hex string. (0-9, a-f)"
    },
    "entityType": {
      "title": "Entity Type",
      "type": "string",
      "enum": [ "Foo" ],
      "readOnly": true,
      "default": "Foo"
    }
  },
  "required": [ "entityId", "entityType" ],
  "additionalProperties": false
}
```

### ChildEntitySchema

[src/predicates/child-entity-schema.ts](/src/predicates/child-entity-schema.ts)

An `EntitySchema` which has a link to a parent `EntitySchema`

A `ChildEntitySchema` must have only one parent

It should have a property `_esParentKey` which is the name of the property that
points to the parent entity

The property it points to must be an `EntityReferenceSchema`

```json
{
  "id": "http://example.com/schema/foo",
  "title": "Foo",
  "type": "object",
  "format": "entity-schema",
  "_esParentKey": "bar",
  "properties": {
    "name": {
      "$ref": "http://example.com/schema/name"
    },
    "bar": {
      "$ref": "http://example.com/schema/bar-reference"
    }
  },
  "required": [ "name", "bar" ],
  "additionalProperties": false
}
```

### UniquePropertySchema

[src/predicates/unique-property-schema.ts](/src/predicates/unique-property-schema.ts)

Used to define that a `TypedSchema` property of an `EntitySchema` must be
unique across *instances*

If the `EntitySchema` is a `ChildEntitySchema`, it must be unique amongst the
children of the parent `EntitySchema`

If the `EntitySchema` is not a `ChildEntitySchema`, it must be unique amongst
all *instances* of this `EntitySchema`

```json
{
  "title": "Name",
  "type": "string",
  "_esUnique": true
}
```

### ConstPropertySchema

[src/predicates/const-property-schema.ts](/src/predicates/const-property-schema.ts)

A `StringSchema` used as a discriminator - a property which must match a certain
value

The `enum` property array must have a single item which matches the value
specified by `default`

`readOnly` must be `true`

```json
{
  "title": "Kind",
  "type": "string",
  "enum": [ "Foo" ],
  "readOnly": true,
  "default": "Foo"
}
```

### EnumSchema

[src/predicates/enum-schema.ts](/src/predicates/enum-schema.ts)

A schema representing an enum of strings

The `enum` keyword should list possible values

It should have a property `_esTitles` keyword that lists human readable
titles for the enums - this is mapped by index to the `enum` array, so they
must have the same length

```json
{
  "title": "My Enum",
  "type": "string",
  "enum": [
    "foo", "bar", "baz"
  ],
  "_esTitles": [
    "Foo", "Bar", "Baz"
  ]
}
```
