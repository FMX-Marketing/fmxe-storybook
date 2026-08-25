import React from 'react';
import './ChangelogSection.css';

export const ChangelogSection = ({ version, date, defaultOpen = false, children }) => (
  <details className="changelog-section" open={defaultOpen}>
    <summary className="changelog-section__summary">
      <span className="changelog-section__version">v{version}</span>
      {date && <span className="changelog-section__date">{date}</span>}
    </summary>
    <div className="changelog-section__body">{children}</div>
  </details>
);
