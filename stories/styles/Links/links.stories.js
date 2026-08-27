import './links.css';

const STATES = ['default', 'hover', 'visited', 'focus'];

function createLink({ label = 'Learn more about FMX', href = '#' } = {}) {
  const a = document.createElement('a');
  a.href = href;
  a.textContent = label;
  return a;
}

const STATE_CLASSES = {
  default: 'fmxe-link-state',
  hover:   'fmxe-link-state is-hover',
  visited: 'fmxe-link-state is-visited',
  focus:   'fmxe-link-state is-focus',
};

function createStatesDisplay(theme) {
  const wrap = document.createElement('div');
  wrap.className = 'link-states';
  if (theme === 'dark') wrap.setAttribute('data-theme', 'dark');

  STATES.forEach((state) => {
    const row = document.createElement('div');
    row.className = 'link-states__row';

    const labelEl = document.createElement('span');
    labelEl.className   = 'link-states__label';
    labelEl.textContent = state.charAt(0).toUpperCase() + state.slice(1);

    const span = document.createElement('span');
    span.className   = STATE_CLASSES[state];
    span.textContent = 'Learn more about FMX';

    row.appendChild(labelEl);
    row.appendChild(span);
    wrap.appendChild(row);
  });

  return wrap;
}

export default {
  title: 'Styles/Links',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Link text content',
    },
    href: {
      control: 'text',
      description: 'Link URL',
    },
    theme: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Theme context',
    },
  },
  args: {
    label: 'Learn more about FMX',
    href: '#',
    theme: 'light',
  },
  render: ({ label, href, theme }) => {
    const wrap = document.createElement('div');
    wrap.className = 'link-states';
    if (theme === 'dark') wrap.setAttribute('data-theme', 'dark');
    wrap.appendChild(createLink({ label, href }));
    return wrap;
  },
  parameters: {
    docs: {
      description: {
        component: 'Global link styles covering default, hover, focus, and visited states. A dark theme variant is available for use on dark backgrounds.',
      },
    },
  },
};

export const Preview = {};

export const InParagraph = {
  name: 'In Paragraph',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Links as they appear within body copy.' } },
  },
  render: () => {
    const wrap = document.createElement('div');
    wrap.className = 'link-states';
    wrap.innerHTML = `
      <p>FMX is a facilities management platform built for teams that need to move fast.
      <a href="#">Learn more about our mission</a> or explore how
      <a href="#">maintenance tracking</a> can help reduce downtime across your facilities.
      For enterprise inquiries, <a href="#">contact our sales team</a>.</p>
    `;
    return wrap;
  },
};

export const States = {
  name: 'All States',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'All interaction states side by side.' } },
  },
  render: () => createStatesDisplay('light'),
};

export const StatesDark = {
  name: 'All States (Dark)',
  globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } },
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'All interaction states on a dark background.' } },
  },
  render: () => createStatesDisplay('dark'),
};
