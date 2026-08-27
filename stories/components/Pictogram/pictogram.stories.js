import { AssetGallery } from '@components/AssetGallery';
import './pictogram.css';

const SIZES = { sm: 44, md: 64, lg: 96, xl: 128, '2xl': 175 };

const PICTOGRAM_NAMES = Object.keys(import.meta.glob('/public/pictograms/*.svg'))
  .map(path => path.replace('/public/pictograms/', '').replace('.svg', ''))
  .sort();

function renderPictogram(name, size = 'md', background = 'theme', space = 'default') {
  const wrap = document.createElement('div');
  const spaceClass = space === 'none' ? ' space-none' : '';
  wrap.className = `fmxe-pictogram${background === 'transparent' ? ' is-transparent' : ''}${spaceClass}`;

  const img = document.createElement('img');
  img.src = `/pictograms/${name}.svg`;
  img.alt = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  img.className = `size-${size}`;
  // img.width  = SIZES[size];
  img.height = SIZES[size];
  wrap.appendChild(img);
  return wrap;
}

export default {
  title: 'Components/Atoms/Pictogram',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: PICTOGRAM_NAMES,
      description: 'Pictogram name',
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(SIZES),
      description: 'Pictogram size',
    },
    background: {
      control: { type: 'inline-radio' },
      options: ['theme', 'transparent'],
      description: 'Background variant — theme inherits from the surrounding context, transparent removes the background entirely',
    },
    space: {
      control: { type: 'inline-radio' },
      options: ['none', 'default'],
      description: 'Vertical padding around the pictogram — default scales with size',
    },
  },
  args: {
    name: PICTOGRAM_NAMES[0],
    size: 'md',
    background: 'theme',
    space: 'default',
  },
  render: ({ name, size, background, space }) => renderPictogram(name, size, background, space),
  parameters: {
    docs: {
      description: {
        component: 'Illustrated pictograms for representing features, industries, and concepts. Designed to be embedded within other components such as cards. Available in multiple sizes with a transparent background variant. Theme-aware — responds to a `data-theme="dark"` attribute on any ancestor element.',
      },
    },
  },
};

export const Preview = {};

// ── Gallery ───────────────────────────────────────────────────────────────────

const galleryArgTypes = {
  size:       { control: false },
  name:       { control: false },
  background: { control: false },
  padding:    { control: false },
  columns: {
    control: { type: 'select' },
    options: [2, 3, 4, 6, 8],
    description: 'Number of columns in the gallery grid',
  },
};

const galleryArgs = { columns: 3 };

export const GalleryLight = {
  name: 'Gallery (Light)',
  argTypes: galleryArgTypes,
  args: galleryArgs,
  parameters: {
    docs: {
      description: { story: 'All available pictograms on a light background.' },
    },
  },
  render: ({ columns }) => AssetGallery({
    names: PICTOGRAM_NAMES,
    renderAsset: (name) => renderPictogram(name, 'sm', 'theme'),
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
      description: { story: 'All available pictograms on a dark background.' },
    },
  },
  render: ({ columns }) => AssetGallery({
    names: PICTOGRAM_NAMES,
    renderAsset: (name) => renderPictogram(name, 'sm', 'theme'),
    theme: 'dark',
    columns,
  }),
};
