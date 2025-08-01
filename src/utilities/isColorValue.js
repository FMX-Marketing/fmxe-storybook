/**
 * Determines whether a given value is a valid hex color code
 * and the category indicates it's related to color.
 *
 * @param {string} category - The category name, expected to contain "color".
 * @param {string} value - The value to check, expected to be a hex color string.
 * @returns {boolean} True if the category includes "color" and the value is a valid 6-digit hex code.
 */
export default function isColorValue(category, value) {
  if (!category.includes('color')) {
    return false;
  }

  return typeof value === 'string' && /^#[0-9A-Fa-f]{6}$/.test(value);
}
