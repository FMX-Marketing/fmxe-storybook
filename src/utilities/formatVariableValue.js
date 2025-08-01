/**
 * Formats a raw value for display by optionally converting between units
 * (e.g., px to rem or rem to px). Returns the original value for hex colors
 * or values already containing units.
 *
 * @param {string|number} rawValue - The raw input value to format or convert.
 * @param {string} [unitIn] - The unit of the input value (e.g., 'px', 'rem').
 * @param {string} [unitOut] - The desired output unit for conversion.
 * @returns {string} A formatted string with original and/or converted units.
 */
export default function formatValueForDisplay(rawValue, unitIn, unitOut) {
  if (
    typeof rawValue === 'string' &&
    (
      rawValue.startsWith('#') ||
      rawValue.includes('px') ||
      rawValue.includes('rem') ||
      isNaN(parseFloat(rawValue))
    )
  ) {
    return rawValue;
  }

  const numericValue = parseFloat(rawValue);
  const inputUnit = unitIn || '';
  const outputUnit = unitOut || '';

  if (inputUnit !== outputUnit) {
    // PX to REM
    if (inputUnit === 'px' && outputUnit === 'rem') {
      const remValue = numericValue / 16;
      return `${numericValue}${inputUnit} → ${remValue}${outputUnit}`;
    }
    // REM TO PX
    if (inputUnit === 'rem' && outputUnit === 'px') {
      const pxValue = numericValue * 16;
      return `${numericValue}${inputUnit} → ${pxValue}${outputUnit}`;
    }
  }

  return `${numericValue}${inputUnit}`;
}
