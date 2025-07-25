import React from 'react';

export const VariableUsageBlock = ({ data }) => {
  const lines = [];
  const getCategory = (cat) => data.find(v => v.category === cat);

  // Helper function to format value with units and comments
  const formatValue = (rawValue, unitIn, unitOut) => {
    // Skip conversion for hex colors or values that already have units
    if (typeof rawValue === 'string' && (rawValue.startsWith('#') || rawValue.includes('px') || rawValue.includes('rem') || isNaN(parseFloat(rawValue)))) {
      return `${rawValue};`;
    }

    const numericValue = parseFloat(rawValue);
    const inputUnit = unitIn || '';
    const outputUnit = unitOut || '';

    // If converting from px to rem
    if (inputUnit === 'px' && outputUnit === 'rem') {
      const remValue = numericValue / 16; // Convert px to rem (assuming 16px base)
      return `${remValue}rem; /* ${numericValue}px */`;
    }

    // If units are the same or output unit is specified
    if (outputUnit === 'rem') {
      return `${numericValue}rem;`;
    }

    // Default to px for numeric values
    return `${numericValue};`;
  };

  // Add CSS root variables
  lines.push(':root {');

  // Process non-mode variables
  data.forEach(variable => {
    const categoryName = variable.category.replace('fmxe-', '').replace('/', '-');

    if (!variable.mode) {
      const unitIn = variable['unit-in'] || '';
      const unitOut = variable['unit-out'] || '';

      variable.values.forEach(value => {
        const formattedValue = formatValue(value.value, unitIn, unitOut);
        lines.push(`  --fmxe-${categoryName}-${value.name}: ${formattedValue}`);
      });
    } else {
      const unitIn = variable['unit-in'] || '';
      const unitOut = variable['unit-out'] || '';

      variable.values.forEach(value => {
        const formattedValue = formatValue(value.mobile, unitIn, unitOut);
        lines.push(`  --fmxe-${categoryName}-${value.name}: ${formattedValue}`);
      });
    }
  });

  lines.push('}');
  lines.push('');

  // Add desktop overrides in media query
  lines.push('@media (min-width: 1024px) {');
  lines.push('  :root {');

  data.forEach(variable => {
    if (variable.mode) {
      const categoryName = variable.category.replace('fmxe-', '');
      const unitIn = variable['unit-in'] || '';
      const unitOut = variable['unit-out'] || '';

      variable.values.forEach(value => {
        const formattedValue = formatValue(value.desktop, unitIn, unitOut);
        lines.push(`    --fmxe-${categoryName}-${value.name}: ${formattedValue};`);
      });
    }
  });

  lines.push('  }');
  lines.push('}');

  return (
    <pre style={{ padding: '1rem', background: '#f6f8fa', borderRadius: '6px' }}>
      <code>{lines.join('\n')}</code>
    </pre>
  );
};
