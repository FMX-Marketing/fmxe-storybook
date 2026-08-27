import './eyebrow.css';

const TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
const ALIGNMENTS = ['left', 'center', 'right'];
const COLORS = ['electric-blue', 'white'];

function createEyebrow({ tag, text, align, color }) {
  const classes = ['fmxe-eyebrow'];
  if (align !== 'left') classes.push(`align-${align}`);
  if (color !== 'electric-blue') classes.push(`color-${color}`);
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
    figmaUrl: 'https://www.figma.com/design/4XRgVV07db8aSCntzB8WSC/FMX-Components?node-id=2348-4052&m=dev',
    docs: {
      description: {
        component: 'A small decorative label with an accent bar, used above headings to introduce a section. Supports left, center, and right alignment.',
      },
    },
  },
};

export const Preview = {};
