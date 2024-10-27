/**
 * Normalize a value to a scale of 0-100 based on the min and max range, allowing for negative values.
 * @param {number} min - The minimum possible value.
 * @param {number} max - The maximum possible value.
 * @param {number} value - The current value to normalize.
 * @returns {number} - A value between 0 and 100.
 */
export const normalizeValue = (min, max, value) => {
  if (min >= max) {
    console.error("Min should be less than Max.");
    return null;
  }

  const boundedValue = Math.min(Math.max(value, min), max);

  return ((boundedValue - min) / (max - min)) * 100;
};
