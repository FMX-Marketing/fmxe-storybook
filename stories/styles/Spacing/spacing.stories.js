import './spacing.scss';
import { VariableTableFiltered } from '@components/VariableTableFiltered.jsx';
import { variables } from '@src/variables';
import React from 'react';
import { createRoot } from 'react-dom/client';

export default {
  title: 'Styles/Spacing',
  tags: ['autodocs'],
  render: (args) => args.html,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component: `
Space is the distance between objects in your design. It should be used to complement the purpose of a page by creating hierarchy and helping the content become more useful and understandable.

## 1. Spacing units

Spacing is determined by the font-size base set on the document's body tag and scaled via \`rem\` units. We have determined that the industry-standard \`16px\` value is ideal for our base due to the ease of its role in multiplication and division.

We utilize t-shirt sizing for our base spacing units. This provides us with an easy-to-understand naming system for a limited palette of popular sizes. Nathan Curtis summarizes this approach in his article entitled [Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62).
`,
      },
    },
  },
};

// Spacing Examples
export const SpacingExamples = {
  name: 'Spacing Interactive',
  tags: ['!dev'],
  argTypes: {
    spacing: {
      control: 'select',
      options: ['1', '2', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spacing size',
    },
  },
  args: {
    spacing: 'md',
  },
  render: (args) => {
    return `
      <div class="spacing-demo spacing-gap-${args.spacing}">
        <div class="spacing-box">1</div>
        <div class="spacing-box">2</div>
        <div class="spacing-box">3</div>
      </div>`;
  },
};

// Utility Classes
export const UtilityClasses = {
  name: 'Utility Classes',
  args: {
    html: `
      <div class="utility-examples">
        <div class="utility-box px-md">px-md</div>
        <div class="utility-box me-lg ms-md">me-lg ms-md</div>
        <div class="utility-box mb-lg">mb-lg</div>
      </div>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: `## 2. Granular spacing utilities

A set of utility classes can be applied to containers to add margin and padding.

The classes are named using these formats:
1. \`{property}{sides}-{size}\` applied to all screen breakpoints
2. \`{breakpoint}:{property}{sides}-{size}\` to apply to a specific screen breakpoint and up

### Property values

| Setting | Values |
|---------|--------|
| fmxe-space | 1, 2, xs, sm, md, lg, xl |

### Sides values

| \`{sides}\` | Purpose |
|-----------|---------|
| \`t\` | Set margin-top or padding-top |
| \`b\` | Set margin-bottom or padding-bottom |
| \`s\` | (start) Set margin-left or padding-left in LTR, margin-right or padding-right in RTL |
| \`e\` | (end) Set margin-right or padding-right in LTR, margin-left or padding-left in RTL |
| \`x\` | (x-axis) Set both *-left and *-right |
| \`y\` | (y-axis) Set both *-top and *-bottom |

**Example CSS:**
\`\`\`html
<!-- Set padding on left and right sides to md size -->
<div class="px-md"></div>

<!-- Set right margin to lg size and left to md size -->
<div class="me-lg ms-md"></div>

<!-- Set bottom padding to sm size at md screen size -->
<div class="md:pb-sm"></div>

<!-- Set bottom margin to lg size at smallest screen size, then clear it at md screen size -->
<div class="mb-lg md:mb-0"></div>

<!-- Set right and left margin to auto -->
<div class="mx-auto"></div>
\`\`\``,
      },
    },
  },
};

// Breaking the Rules
export const BreakingTheRules = {
  name: 'Breaking the Rules',
  args: {
    html: `
      <div class="custom-spacing-example">
        <div class="pricing-block">Custom spacing example</div>
      </div>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: `## 3. Guidelines for breaking the rules

Because this design system is intended to be used on a marketing website, we should always strive for flexibility for important styles like spacing.

If the design is not feeling right after exploring the default spacing units, you should hardcode a desired spacing style relative to one of the standard sizes.

For example, if you determine that you need padding set to \`3.5rem\` instead of the \`lg\` size's \`2rem\` value, you should calculate the new value relative to the nearest standard unit's size using Sass or CSS calculations:

**Example CSS:**
\`\`\`scss
/* Vanilla CSS */
.pricing-block {
  padding: calc(var(--fmxe-space-lg) * 1.75);
}

// Sass
.pricing-block {
  padding: $fmxe-space-lg * 1.75;
}
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
        categories: ['fmxe-space']
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
        story: 'Available design tokens for spacing.',
      },
    },
  },
};
