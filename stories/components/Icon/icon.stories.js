import { AssetGallery } from '@components/AssetGallery';
import { renderIcon, loadSprite, getIconNames } from '@components/Icon.jsx';
import { variables } from '@src/variables';
import './icon.css';

const COLOR_OPTIONS = variables
  .filter(c => c.category.startsWith('fmxe-color'))
  .flatMap(c => c.values.map(v => {
    const sub = c.category.replace('fmxe-color/', '').replace('fmxe-color', '');
    return sub ? `${sub}-${v.name}` : v.name;
  }));

const SIZES = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 };


export default {
  title: 'Components/Atoms/Icon',
  tags: ['autodocs'],
  loaders: [() => loadSprite().then(() => ({ iconNames: getIconNames() }))],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: getIconNames(),
      description: 'Icon name',
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(SIZES),
      description: 'Icon size',
    },
    orientation: {
      control: { type: 'select' },
      options: ['right', 'down', 'left', 'up', 'flip-x', 'flip-y'],
      description: 'Icon orientation — right is default',
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', ...COLOR_OPTIONS],
      description: 'Icon color',
    },
  },
  args: {
    name: 'arrow',
    size: 'md',
    orientation: 'right',
    color: 'inherit',
  },
  render: ({ name, size, orientation, color }) => {
    const icon = renderIcon(name, size, orientation);
    icon.style.color = color === 'inherit' ? '' : `var(--fmxe-color-${color})`;
    return icon;
  },
  parameters: {
    docs: {
      description: {
        component: 'A set of icons available in multiple sizes, colors, and orientations. Directional icons default to pointing right and can be rotated or flipped as needed.',
      },
    },
  },
};

export const Preview = {
  args: { name: 'arrow', size: 'md' },
};

// ── Gallery ──────────────────────────────────────────────────────────────────

const galleryArgTypes = {
  size:         { control: false },
  name:         { control: false },
  borderRadius: { control: false },
  theme:        { control: false },
  columns: {
    control: { type: 'select' },
    options: [2, 3, 4, 6, 8],
    description: 'Number of columns in the gallery grid',
  },
};

const galleryArgs = { columns: 4 };

export const GalleryLight = {
  name: 'Gallery (Light)',
  argTypes: galleryArgTypes,
  args: galleryArgs,
  parameters: {
    docs: {
      description: { story: 'All available icons on a light background.' },
    },
  },
  render: ({ columns }, { loaded: { iconNames } }) => AssetGallery({
    names: iconNames,
    renderAsset: (name) => renderIcon(name, 'md'),
    theme: 'light',
    columns,
  }),
};

export const GalleryDark = {
  name: 'Gallery (Dark)',
  globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } },
  argTypes: galleryArgTypes,
  args: galleryArgs,
  parameters: {
    backgrounds: { default: 'cobalt-blue-midnight-dark' },
    docs: {
      description: { story: 'All available icons on a dark background.' },
    },
  },
  render: ({ columns }, { loaded: { iconNames } }) => AssetGallery({
    names: iconNames,
    renderAsset: (name) => renderIcon(name, 'md'),
    theme: 'dark',
    columns,
  }),
};
