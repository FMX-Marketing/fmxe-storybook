import React from 'react';
import './ChangelogSection.css';

export const ChangelogSection = ({ version, date, defaultOpen = false, children }) => (
  <details className="changelog-section" open={defaultOpen}>
    <summary className="changelog-section-summary">
      <span className="changelog-section-version">v{version}</span>
      {date && <span className="changelog-section-date">{date}</span>}
    </summary>
    <div className="changelog-section-body">{children}</div>
  </details>
);
