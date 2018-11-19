import * as apiKey from './api-key.schema.json'
import * as user from './user.schema.json'
import * as userReference from './user-reference.schema.json'

export const securitySchemas = [ apiKey, user, userReference ]

export const securitySchemaMap = { apiKey, user, userReference }
