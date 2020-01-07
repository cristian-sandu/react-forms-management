import { EMPTY_STRING } from 'common/constants';
import numeral from 'numeral';
import { last, pipe, replace } from 'ramda';

const NOT_A_LARGE_NUMBER_REGEX = /^[kmb]|(\.[kmb])|[^\d.kmb]|,/gi;
const LARGE_NUMBER_LETTER_REGEX = /[kmb]/;
const THREE_DIGITS_REGEX = /\B(?=(\d{3})+(?!\d))/g;
const COMMA = ',';

// Converts K, M, B into 1 000, 1 000 000, and 1 000 000 000 respectively
export const largeNumberParser = value => {
  const adjustedValue = value
    .replace(NOT_A_LARGE_NUMBER_REGEX, EMPTY_STRING)
    .toLowerCase();
  const lastCharacter = last(adjustedValue);

  if (LARGE_NUMBER_LETTER_REGEX.test(lastCharacter))
    return String(numeral(adjustedValue).value());

  return adjustedValue;
};

// Separates every 3 digits by coma
export const largeNumberFormatter = pipe(
  String,
  replace(THREE_DIGITS_REGEX, COMMA),
);
