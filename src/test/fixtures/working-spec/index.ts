import * as brand from './entities/brand.schema.json'
import * as company from './entities/company.schema.json'
import * as detail from './entities/detail.schema.json'
import * as getUri from './entities/get-uri.schema.json'
import * as product from './entities/product.schema.json'
import * as brandReference from './references/brand-reference.schema.json'
import * as companyReference from './references/company-reference.schema.json'
import * as productReference from './references/product-reference.schema.json'
import * as abbreviation from './abbreviation.schema.json'
import * as description from './description.schema.json'
import * as isActive from './is-active.schema.json'
import * as name from './name.schema.json'
import * as tag from './tag.schema.json'

export const workingSpecSchemas = [
  brand, company, detail, getUri, product, brandReference, companyReference,
  productReference, abbreviation, description, isActive, name, tag
]

export const workingSpecSchemaMap = {
  brand, company, detail, getUri, product, brandReference, companyReference,
  productReference, abbreviation, description, isActive, name, tag
}
