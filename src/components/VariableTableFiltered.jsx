import React from 'react';
import { ColorSwatch } from '@components/ColorSwatch';
import isColorValue from '@utils/isColorValue';
import formatVariableValue from '@utils/formatVariableValue';

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

  // Filter the data based on the provided criteria
  const filteredData = data.filter(section => {
    const categoryName = section.category;

    if (categories && Array.isArray(categories)) {
      return categories.some(cat => typeof cat === 'string' && categoryName === cat)
    }

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
                          {formatVariableValue(entry.desktop, unitIn, unitOut)}
                        </td>
                        <td style={tdStyle}>
                          {formatVariableValue(entry.mobile, unitIn, unitOut)}
                        </td>
                      </>
                    ) : (
                      <td style={tdStyle} colSpan={1}>
                        { isColorValue(section.category, entry.value) && (
                          <ColorSwatch color={entry.value} />
                        )}
                        {formatVariableValue(entry.value, unitIn, unitOut)}
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
