import { is } from '@mojule/is'
import { assertTypedSchema } from './typed-schema'
import { isNonEmptyString, isNonEmptyArray } from './util'
import { SecuritySchema } from './types'

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

  assertSecuritySchemaRoles( securitySchema, 'create', name )
  assertSecuritySchemaRoles( securitySchema, 'read', name )
  assertSecuritySchemaRoles( securitySchema, 'update', name )
  assertSecuritySchemaRoles( securitySchema, 'delete', name )
}

export const assertSecuritySchemaRoles = (
  securitySchema, roleName: string, name = 'SecuritySchema'
) => {
  if ( !isNonEmptyArray( securitySchema._esSecurity[ roleName ] ) )
    throw TypeError(
      `${ name }._esSecurity.${ roleName } should be a non-empty array`
    )

  if ( !securitySchema._esSecurity[ roleName ].every( isNonEmptyString ) )
    throw TypeError(
      `${ name }._esSecurity.${
        roleName
      } should be an array of non-empty strings`
    )
}
