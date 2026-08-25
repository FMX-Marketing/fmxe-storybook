import './fmx-logo.css';
import { loadSprite } from '@components/Icon.jsx';

const SIZES = { sm: 32, md: 44, lg: 64 };

const LOGO_COLORS = [
  'electric-blue-core',
  'electric-blue-dark',
  'gray-core',
  'white',
];

export default {
  title: 'Components/Atoms/FMX Logo',
  tags: ['autodocs'],
  loaders: [() => loadSprite()],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: LOGO_COLORS,
      description: 'Brand color token',
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(SIZES),
      description: 'Logo size',
    },
  },
  args: {
    color: 'electric-blue-core',
    size: 'md',
  },
  render: (args) => {
    const root = document.createElement('div');
    root.className = `fmxe-logo ${args.size} color-${args.color}`;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#logo-fmx-logo');
    svg.appendChild(use);
    root.appendChild(svg);

    return root;
  },
  parameters: {
    docs: {
      description: {
        component: 'The FMX brand logo. By default supports selected color tokens.',
      },
    },
  },
};

export const Preview = {
  args: { color: 'electric-blue-core', size: 'md' },
};
