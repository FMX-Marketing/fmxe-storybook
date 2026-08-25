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

const TOOLTIP_TEXT = 'Paragraph text <a href="#example-url">link example</a> text going to second line.';

function placementStory(placement, align, label, padding) {
  return {
    name: label,
    parameters: {
      controls: { disable: true },
      docs: {
        description: { story: `Tooltip placed ${placement}${align ? `, aligned to ${align}` : ''}.` },
        story: { iframeHeight: '200px' },
      },
    },
    render: ({ theme }) => {
      const outer = document.createElement('div');
      outer.setAttribute('data-theme', theme);
      outer.style.alignItems = 'center';
      outer.style.display = 'flex';
      outer.style.justifyContent = 'center';
      outer.style.padding = padding;

      const tooltip = createTooltip(TOOLTIP_TEXT, placement, align);
      const content = tooltip.querySelector('.fmxe-tooltip__content');
      content.style.opacity = '1';
      content.style.visibility = 'visible';
      content.style.pointerEvents = 'auto';

      outer.appendChild(tooltip);
      return outer;
    },
  };
}

export const PlacementTop = {
  ...placementStory('top', null, 'Placement — Top', '120px 0 0'),
  parameters: { controls: { disable: true }, docs: { description: { story: 'Default. Use when the trigger has clear space above it.' }, story: { iframeHeight: '200px' } } },
};

export const PlacementTopStart = {
  ...placementStory('top', 'start', 'Placement — Top Start', '120px 0 0'),
  parameters: { controls: { disable: true }, docs: { description: { story: 'Use when the trigger is near the left edge of its container, such as the first column of a table.' }, story: { iframeHeight: '200px' } } },
};

export const PlacementTopEnd = {
  ...placementStory('top', 'end', 'Placement — Top End', '120px 0 0'),
  parameters: { controls: { disable: true }, docs: { description: { story: 'Use when the trigger is near the right edge of its container, such as a trailing icon in a toolbar.' }, story: { iframeHeight: '200px' } } },
};

export const PlacementBottom = {
  ...placementStory('bottom', null, 'Placement — Bottom', '0 0 120px'),
  parameters: { controls: { disable: true }, docs: { description: { story: 'Use when the trigger is near the top of the viewport, such as a sticky header, where the bubble would otherwise clip.' }, story: { iframeHeight: '200px' } } },
};

export const PlacementBottomStart = {
  ...placementStory('bottom', 'start', 'Placement — Bottom Start', '0 0 120px'),
  parameters: { controls: { disable: true }, docs: { description: { story: 'Use when the trigger is in the top-left of a fixed panel or modal header.' }, story: { iframeHeight: '200px' } } },
};

export const PlacementBottomEnd = {
  ...placementStory('bottom', 'end', 'Placement — Bottom End', '0 0 120px'),
  parameters: { controls: { disable: true }, docs: { description: { story: 'Use when the trigger is in the top-right of a fixed panel, such as a close or settings icon.' }, story: { iframeHeight: '200px' } } },
};

export const ExampleUse = {
  name: 'Example Use',
  parameters: {
    docs: {
      description: { story: 'Tooltip paired with a form label to clarify a field that may need additional context.' },
      story: { iframeHeight: '120px' },
    },
  },
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
