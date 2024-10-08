/**
 * Convert the given number it's percentage.
 * @param {number} value
 * @param {number} limit
 * @returns {Array<number>}
 */
export function normalizeTo100(value, limit) {
  const result = [];
  result.push((value / limit) * 100);
  return result;
}

/**
 * Convert the given value(0-100) to it's original value.
 * @param {number} normalizedValue
 * @param {number} limit
 * @returns {number}
 */
export function reverseNormalizeFrom100(normalizedValue, limit) {
  const value = (normalizedValue / 100) * limit;
  return value;
}
