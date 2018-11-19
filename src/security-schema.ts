import { is } from '@mojule/is'
import { TypedSchema, assertTypedSchema } from './typed-schema'
import { isNonEmptyString, isNonEmptyArray } from './util';

export interface SecuritySchema extends TypedSchema {
  _esSecurity: {
    create: string[]
    read: string[]
    update: string[]
    delete: string[]
  }
}

export const isSecuritySchema =
  ( value ): value is SecuritySchema => {
    try {
      assertSecuritySchema( value )
    } catch {
      return false
    }

    return true
  }

export const assertSecuritySchema = (
  securitySchema, name = 'SecuritySchema'
) => {
  assertTypedSchema( securitySchema, name )

  if( !is.object( securitySchema._esSecurity ) )
    throw TypeError( `${ name }._esSecurity should be an object` )

  assertSecuritySchemaRoles( securitySchema._esSecurity.create, 'create', name )
  assertSecuritySchemaRoles( securitySchema._esSecurity.read, 'read', name )
  assertSecuritySchemaRoles( securitySchema._esSecurity.update, 'update', name )
  assertSecuritySchemaRoles( securitySchema._esSecurity.delete, 'delete', name )
}

export const assertSecuritySchemaRoles = (
  roles, roleName: string, name = 'SecuritySchema'
) => {
  if( !isNonEmptyArray( roles ) )
    throw TypeError(
      `${ name }._esSecurity.${ roleName } should be a non-empty array`
    )

  if( !roles.every( isNonEmptyString ) )
    throw TypeError(
      `${ name }._esSecurity.${
        roleName
      } should be an array of non-empty strings`
    )
}
