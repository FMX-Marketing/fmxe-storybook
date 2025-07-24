import React from 'react';

const thStyle = {
  padding: '0.75rem',
  textAlign: 'left',
  borderBottom: '2px solid #e5e7eb',
  backgroundColor: '#f9fafb',
  fontWeight: '600'
};

const tdStyle = {
  padding: '0.75rem',
  borderBottom: '1px solid #e5e7eb'
};

const ColorSwatch = ({ color }) => (
  <div
    style={{
      display: 'inline-block',
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      backgroundColor: color,
      border: '1px solid #d1d5db',
      marginRight: '8px',
      verticalAlign: 'middle'
    }}
  />
);

const isColorValue = (value) => {
  // Check if value is a hex color
  return typeof value === 'string' && /^#[0-9A-Fa-f]{6}$/.test(value);
};

const isColorCategory = (category) => {
  return category.includes('color');
};

export const VariableTable = ({ data }) => {
  // Helper function to format value with units and comments for display
  const formatValueForDisplay = (rawValue, unitIn, unitOut) => {
    // Skip conversion for hex colors or values that already have units
    if (typeof rawValue === 'string' && (rawValue.startsWith('#') || rawValue.includes('px') || rawValue.includes('rem') || isNaN(parseFloat(rawValue)))) {
      return rawValue;
    }

    const numericValue = parseFloat(rawValue);
    const inputUnit = unitIn || 'px';
    const outputUnit = unitOut || 'px';

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

    // If units are the same, just show the value with unit
    return `${numericValue}${inputUnit}`;
  };

  return (
    <div>
      {data.map((section, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h3>
            {section.category}
            {(section['unit-in'] || section['unit-out']) && (
              <span style={{ fontSize: '0.875rem', fontWeight: 'normal', color: '#6b7280', marginLeft: '8px' }}>
                {section['unit-in'] && section['unit-out'] && section['unit-in'] !== section['unit-out']
                  ? `(${section['unit-in']} → ${section['unit-out']})`
                  : `(unit: ${section['unit-in'] || section['unit-out']})`
                }
              </span>
            )}
          </h3>
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
                const unitIn = section['unit-in'] || 'px';
                const unitOut = section['unit-out'] || 'px';
                return (
                  <tr key={i}>
                    <td style={tdStyle}>{entry.name}</td>
                    {section.mode ? (
                      <>
                        <td style={tdStyle}>
                          {isColorCategory(section.category) && isColorValue(entry.desktop) && (
                            <ColorSwatch color={entry.desktop} />
                          )}
                          {formatValueForDisplay(entry.desktop, unitIn, unitOut)}
                        </td>
                        <td style={tdStyle}>
                          {isColorCategory(section.category) && isColorValue(entry.mobile) && (
                            <ColorSwatch color={entry.mobile} />
                          )}
                          {formatValueForDisplay(entry.mobile, unitIn, unitOut)}
                        </td>
                      </>
                    ) : (
                      <td style={tdStyle} colSpan={1}>
                        {isColorCategory(section.category) && isColorValue(entry.value) && (
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
