import './divider.css';

const COLORS = ['gray-light', 'white'];
const MARGINS = ['none', 'sm', 'md', 'lg'];

function createDivider({ color, margin }) {
  const el = document.createElement('hr');
  const classes = ['fmxe-divider'];
  if (color !== 'gray-light') classes.push(color);
  if (margin !== 'none') classes.push(`space-${margin}`);
  el.className = classes.join(' ');
  return el;
}

function createDividerInContext({ color, margin }) {
  const hr = createDivider({ color, margin });
  const wrap = document.createElement('div');
  const before = document.createElement('p');
  before.textContent = 'Content above the divider.';
  const after = document.createElement('p');
  after.textContent = 'Content below the divider.';
  wrap.appendChild(before);
  wrap.appendChild(hr);
  wrap.appendChild(after);
  return wrap;
}

export default {
  title: 'Components/Atoms/Divider',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      options: COLORS,
      description: 'Divider color',
    },
    margin: {
      control: { type: 'select' },
      options: MARGINS,
      description: 'Vertical margin above and below the divider',
    },
  },
  args: {
    color: 'gray-light',
    margin: 'none',
  },
  render: (args) => createDivider(args),
  parameters: {
    docs: {
      description: {
        component: 'A horizontal rule for separating sections of content. Fills all available horizontal space with optional vertical margin.',
      },
    },
  },
};

export const Preview = {};

export const ExampleUse = {
  name: 'Example Use',
  render: (args) => createDividerInContext(args),
};
