import './shapes-and-elevation.scss';
import { VariableTableFiltered } from '@components/VariableTableFiltered.jsx';
import { variables } from '@src/variables';
import React from 'react';
import { createRoot } from 'react-dom/client';

export default {
  title: 'Styles/Shapes & Elevation',
  tags: ['autodocs'],
  render: (args) => args.html,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component: `
Effects of shapes and elevation in FMX's digital brand manifest themselves in two areas:

1. Border radius
2. Shadows

`,
      },
    },
  },
};

// Interactive Example
export const InteractiveExample = {
  name: 'Interactive Example',
  argTypes: {
    shadowSize: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Shadow size',
    },
    shadowColor: {
      control: 'select',
      options: ['glow', 'shadow'],
      description: 'Shadow color type',
    },
    borderRadius: {
      control: 'select',
      options: ['sm', 'md', 'round'],
      description: 'Border radius size',
    },
  },
  args: {
    shadowSize: 'sm',
    shadowColor: 'glow',
    borderRadius: 'md',
  },
  render: (args) => {
    const colorClass = args.shadowColor === 'glow' ? 'glow' : 'shadow';
    const sizeClass = `${colorClass}-${args.shadowSize}`;
    const radiusClass = `border-radius-${args.borderRadius}`;
    return `
      <div class="example-grid">
        <div class="example-box ${sizeClass} ${radiusClass}">
          <p>Static</p>
        </div>
        <div class="example-box example-glow-interactive example-${sizeClass} ${radiusClass}" tabindex="0">
          <p>Hover</p>
        </div>
      </div>`;
  },
  parameters: {
    controls: {
      disable: false,
      expanded: true,
    },
    docs: {
      description: {
        story: `Interactive example demonstrating shadow effects with controls. Try changing the shadow size and color type, then hover over the element to see the effect.`,
      },
    },
  },
};

// Border Radius Examples
export const BorderRadiusExamples = {
  name: 'Border Radius',
  parameters: {
    docs: {
      description: {
        story: `There are currently two t-shirt sizes and a round style of border radius for use on cards, buttons, images, and other types of panels.

**Example CSS:**
\`\`\`css
/* Small border radius */
border-radius: var(--fmxe-border-radius-sm);

/* Medium border radius */
border-radius: var(--fmxe-border-radius-md);

/* Round border radius */
border-radius: var(--fmxe-border-radius-round);
\`\`\``,
      },
    },
  },
  args: {
    html: `
      <div class="example-grid">
        <div class="example-box border-radius-sm">sm</div>
        <div class="example-box border-radius-md">md</code></div>
        <div class="example-box border-radius-round">round</div>
      </div>
    `,
  },
};

// Shadow Examples
export const ShadowExamples = {
  name: 'Shadow Effect',
  args: {
    html: `
      <div class="example-grid">
        <div class="example-box shadow-sm">sm shadow</div>
        <div class="example-box shadow-md">md shadow</div>
      </div>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: `Shadows come in two t-shirt sizes: small and medium. By default, shadows mimic nature with a dark gray shadow color. Applied via the \`--fmxe-shadow-color\`, \`--fmxe-shadow-sm\`, and \`--fmxe-shadow-md\` tokens.

**Example CSS:**
\`\`\`css
/* Small shadow */
box-shadow: 0 0 var(--fmxe-shadow-sm) var(--fmxe-shadow-color);

/* Medium shadow */
box-shadow: 0 0 var(--fmxe-shadow-md) var(--fmxe-shadow-color);
\`\`\``,
      },
    },
  },
};

// Shadow - Glow Effect
export const GlowEffect = {
  name: 'Glow Effect',
  args: {
    html: `
      <div class="example-grid">
        <div class="example-box glow-sm">sm</div>
        <div class="example-box glow-md">md</div>
      </div>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Shadows can also be transformed into a glow effect by changing the shadow color to electric blue. This is typically applied on hover/active/focus states. This can be accomplished with the \`--fmxe-shadow-glow\` token.

**Example CSS:**
\`\`\`css
/* Small glow */
box-shadow: 0 0 var(--fmxe-shadow-sm) var(--fmxe-shadow-glow);

/* Medium glow */
box-shadow: 0 0 var(--fmxe-shadow-md) var(--fmxe-shadow-glow);
\`\`\``,
      },
    },
  },
};

// Design Tokens
export const DesignTokens = {
  name: 'Design Tokens',
  render: () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'sb-variable-table');
    const root = createRoot(container);
    root.render(
      React.createElement(VariableTableFiltered, {
        data: variables,
        categories: ['fmxe-border-radius', 'fmxe-shadow']
      })
    );
    return container;
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
      description: {
        story: 'Available design tokens for shapes and elevation.',
      },
    },
  },
};
