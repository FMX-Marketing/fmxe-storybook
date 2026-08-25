import { createTooltip } from './Tooltip.js';
import { loadSprite } from '@components/Icon.jsx';
import './tooltip.css';
import '../Icon/icon.css';

export default {
  title: 'Components/Atoms/Tooltip',
  tags: ['autodocs'],
  loaders: [() => loadSprite()],
  argTypes: {
    text: {
      control: 'text',
      description: 'Tooltip content shown on hover or focus',
    },
    theme: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Theme — matches the data-theme of the parent context',
    },
  },
  args: {
    text: 'Paragraph text <a href="#example-url">link example</a> text going to second line.',
    theme: 'light',
  },
  render: ({ text, theme }) => {
    const wrap = document.createElement('div');
    wrap.setAttribute('data-theme', theme);
    wrap.appendChild(createTooltip(text));
    return wrap;
  },
  parameters: {
    docs: {
      description: {
        component: 'An info icon that reveals a tooltip on hover or focus. Positions above by default and flips below when clipped at the top of the viewport. Horizontal overflow is also corrected automatically.',
      },
      story: { iframeHeight: '300px' },
    },
  },
};

export const Preview = {};

export const Placements = {
  name: 'Placements',
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'Both placement variants — above (default) and below (flipped when viewport clips the top).' },
      story: { iframeHeight: '300px' },
    },
  },
  render: ({ theme }) => {
    const outer = document.createElement('div');
    outer.setAttribute('data-theme', theme);
    outer.style.alignItems = 'center';
    outer.style.display = 'flex';
    outer.style.gap = 'var(--fmxe-space-xl)';
    outer.style.justifyContent = 'center';
    outer.style.paddingTop = '120px';

    const labels = ['Above (default)', 'Below (flipped)'];
    labels.forEach((label, i) => {
      const col = document.createElement('div');
      col.style.alignItems = 'center';
      col.style.display = 'flex';
      col.style.flexDirection = 'column';
      col.style.gap = 'var(--fmxe-space-sm)';

      const tooltip = createTooltip('Paragraph text <a href="#example-url">link example</a> text going to second line.');
      const content = tooltip.querySelector('.fmxe-tooltip__content');
      content.style.opacity = '1';
      content.style.visibility = 'visible';
      content.style.pointerEvents = 'auto';
      if (i === 1) tooltip.classList.add('is-flipped');

      const caption = document.createElement('span');
      caption.textContent = label;
      caption.style.fontSize = 'var(--fmxe-font-family-size-xs)';
      caption.style.color = 'var(--fmxe-color-gray-light-3)';

      col.appendChild(tooltip);
      col.appendChild(caption);
      outer.appendChild(col);
    });

    return outer;
  },
};

export const ExampleUse = {
  name: 'Example Use',
  render: ({ text, theme }) => {
    const outer = document.createElement('div');
    outer.setAttribute('data-theme', theme);

    const row = document.createElement('label');
    row.style.alignItems = 'center';
    row.style.display = 'flex';
    row.style.gap = 'var(--fmxe-space-xs)';

    const labelText = document.createElement('span');
    labelText.textContent = 'Number of work orders per month';

    row.appendChild(labelText);
    row.appendChild(createTooltip(text));
    outer.appendChild(row);
    return outer;
  },
};
