import React from 'react';
import { ColorSwatch } from '@components/ColorSwatch';
import isColorValue from '@utils/isColorValue';

const thStyle = {
  fontWeight: '600',
  padding: '0.75rem',
  textAlign: 'left',
};

const tdStyle = {
  borderBottom: '1px solid #e5e7eb',
  padding: '0.75rem',
};

export const VariableTableFiltered = ({
  data,
  categories = null,
}) => {
  const formatValueForDisplay = (rawValue, unitIn, unitOut) => {
    // Skip conversion for hex colors or values that already have units
    if (typeof rawValue === 'string' && (rawValue.startsWith('#') || rawValue.includes('px') || rawValue.includes('rem') || isNaN(parseFloat(rawValue)))) {
      return rawValue;
    }

    const numericValue = parseFloat(rawValue);
    const inputUnit = unitIn || '';
    const outputUnit = unitOut || '';

    // Show original value with input unit, and converted value with output unit
    if (inputUnit !== outputUnit) {
      if (inputUnit === 'px' && outputUnit === 'rem') {
        const remValue = numericValue / 16;
        return `${numericValue}${inputUnit} → ${remValue}${outputUnit}`;
      }
      if (inputUnit === 'rem' && outputUnit === 'px') {
        const pxValue = numericValue * 16;
        return `${numericValue}${inputUnit} → ${pxValue}${outputUnit}`;
      }
    }

    return `${numericValue}${inputUnit}`;
  };

  // Filter the data based on the provided criteria
  const filteredData = data.filter(section => {
    const categoryName = section.category;

    // If categories array is provided, only include matching categories
    if (categories && Array.isArray(categories)) {
      return categories.some(cat => typeof cat === 'string' && categoryName === cat)
    }

    // If no filters are provided, include all
    return true;
  });

  if (filteredData.length === 0) {
    return (
      <p>No categories match the specified criteria.</p>
    );
  }

  return (
    <div>
      {filteredData.map((section, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h4>{ `--${section.category}-{name}`}</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0.5rem' }}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                {section.mode ? (
                  <>
                    <th style={thStyle}>Desktop</th>
                    <th style={thStyle}>Mobile</th>
                  </>
                ) : (
                  <th style={thStyle}>Value</th>
                )}
              </tr>
            </thead>
            <tbody>
              {section.values.map((entry, i) => {
                const unitIn = section['unit-in'] || '';
                const unitOut = section['unit-out'] || '';
                return (
                  <tr key={i}>
                    <td style={tdStyle}>{entry.name}</td>
                    {section.mode ? (
                      <>
                        <td style={tdStyle}>
                          {formatValueForDisplay(entry.desktop, unitIn, unitOut)}
                        </td>
                        <td style={tdStyle}>
                          {formatValueForDisplay(entry.mobile, unitIn, unitOut)}
                        </td>
                      </>
                    ) : (
                      <td style={tdStyle} colSpan={1}>
                        { isColorValue(section.category, entry.value) && (
                          <ColorSwatch color={entry.value} />
                        )}
                        {formatValueForDisplay(entry.value, unitIn, unitOut)}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
