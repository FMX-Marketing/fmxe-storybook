import '../src/global.css';
import { variables } from '../src/variables.js';

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
  },
};

export default preview;
