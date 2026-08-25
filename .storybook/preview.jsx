import React from 'react';
import '../src/global.css';
import { variables } from '../src/variables.js';
import { loadSprite } from '../src/utilities/createIcon.js';

loadSprite();
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

// Generate backgrounds from variables.js
const generateBackgrounds = () => {
  const options = {
    none: { name: 'Transparent', value: 'transparent' }
  };

  variables
    .filter(category => category.category.startsWith('fmxe-color'))
    .forEach(category => {
      const categoryName = category.category.replace('fmxe-', '').replace('/', '-').toLowerCase();

      category.values.forEach(color => {
        // Build CSS variable name
        const cssVarName = `--fmxe-${categoryName}-${color.name.toLowerCase()}`;

        // Build display name
        let displayName = color.name;
        const subcategory = category.category.replace('fmxe-color/', '').replace('fmxe-color', '');
        if (subcategory) {
          displayName = `${subcategory} ${color.name}`;
        }
        displayName = displayName
          .split(/[-\/]/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
          .trim();

        // Create a key from the display name
        const key = displayName.toLowerCase().replace(/\s+/g, '-');
        options[key] = { name: displayName, value: `var(${cssVarName})` };
      });
    });

  return options;
};

// Store generated backgrounds for decorator access
const backgroundOptions = generateBackgrounds();

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      options: backgroundOptions,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
    options: {
      storySort: {
        order: ['Welcome', 'Styles', 'Design Tokens', 'Components', ['*', ['Atoms', ['Button', 'Icon', 'Logo', 'Input Field', ['Checkbox', 'Currency', 'Number', 'Radio', 'Select']]]]],
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    (story, context) => {
      const selectedBgKey = context.globals.backgrounds?.value
        ?? context.parameters.backgrounds?.default;
      /**
       * For A11y to work in real time, we need to apply the currently selected background color to the
       * storybook root element. We do this via DOM manipulation so it doesn't appear in the "Show code" output.
       */
      const root = document.getElementById('storybook-root');
      if (selectedBgKey && backgroundOptions[selectedBgKey] && root) {
        const bgValue = backgroundOptions[selectedBgKey].value;
        root.style.backgroundColor = bgValue;
      } else if (root) {
        root.style.backgroundColor = '';
      }
      return story();
    },
  ],
};

export default preview;
