import React from 'react';

export const PageLinkList = ({ links }) => {
  return (
    <ul className="page-link-list">
      {links.map((link, index) => (
        <li key={index} className="page-link-item">
          <a href={link.url} className="page-link-title">
            {link.title}
          </a>
          {link.description && (
            <p className="page-link-description">{link.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
};
