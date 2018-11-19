import { is } from '@mojule/is'

export const isNonEmptyString = ( value ): value is string =>
  is.string( value ) && value.trim() !== ''

export const isNonEmptyArray = <T>( value ): value is T[] =>
  is.array( value ) && value.length > 0
