import { is } from '@mojule/is'

export const isNonEmptyString = ( value ): value is string =>
  is.string( value ) && value.trim() !== ''

//export const isArrayOf = ( value, predicate)