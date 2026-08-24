import './eyebrow.css';

const TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
const ALIGNMENTS = ['left', 'center', 'right'];
const COLORS = ['electric-blue', 'white'];

function createEyebrow({ tag, text, align, color }) {
  const classes = ['fmxe-eyebrow'];
  if (align !== 'left') classes.push(align);
  if (color !== 'electric-blue') classes.push(color);
  const el = document.createElement(tag);
  el.className = classes.join(' ');
  el.textContent = text;
  return el;
}

export default {
  title: 'Components/Atoms/Eyebrow',
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: TAGS,
      description: 'HTML element to render',
    },
    text: {
      control: 'text',
      description: 'Eyebrow text content',
    },
    align: {
      control: { type: 'inline-radio' },
      options: ALIGNMENTS,
      description: 'Text alignment — the bar follows the text',
    },
    color: {
      control: { type: 'inline-radio' },
      options: COLORS,
      description: 'Bar color',
    },
  },
  args: {
    tag: 'h2',
    text: 'Why FMX',
    align: 'left',
    color: 'electric-blue',
  },
  render: (args) => createEyebrow(args),
  parameters: {
    docs: {
      description: {
        component: 'Adds a decorative bar above any heading-like element via `::before`. Apply `.fmxe-eyebrow` to any `h1`–`h6`, `p`, or `span`. The bar cannot inherit `text-align` from the element — alignment must be set explicitly via `.center` or `.right` modifier classes. Left is the default.',
      },
    },
  },
};

export const Preview = {};
