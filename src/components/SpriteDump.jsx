import React, { useEffect, useState } from 'react';
import { Source } from '@storybook/addon-docs/blocks';

export const SpriteDump = () => {
  const [code, setCode] = useState('Loading…');

  useEffect(() => {
    fetch('/icons/sprite.svg')
      .then((res) => res.text())
      .then((text) => setCode(`<div style="display:none;" aria-hidden="true">\n${text}</div>`))
      .catch(() => setCode('Failed to load sprite.svg'));
  }, []);

  return <Source code={code} language="html" />;
};
