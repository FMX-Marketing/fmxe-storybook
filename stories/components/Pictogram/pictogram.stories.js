import { AssetGallery } from '@components/AssetGallery';
import './pictogram.css';

const SIZES = { sm: 44, md: 64, lg: 96, xl: 128, '2xl': 175 };

const PICTOGRAM_NAMES = Object.keys(import.meta.glob('/public/pictograms/*.svg'))
  .map(path => path.replace('/public/pictograms/', '').replace('.svg', ''))
  .sort();

function renderPictogram(name, size = 'md', background = 'light', padding = true) {
  const wrap = document.createElement('div');
  const bgClass = background !== 'light' ? ` bg-${background}` : '';
  wrap.className = `fmxe-pictogram${bgClass}${padding ? '' : ' no-padding'}`;

  const img = document.createElement('img');
  img.src = `/pictograms/${name}.svg`;
  img.alt = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  img.className = size;
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
      description: 'Pictogram name (filename without .svg)',
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(SIZES),
      description: 'Pictogram size',
    },
    background: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark', 'transparent'],
      description: 'Background color',
    },
    padding: {
      control: { type: 'boolean' },
      description: 'Toggle padding on/off',
    },
  },
  args: {
    name: PICTOGRAM_NAMES[0],
    size: 'md',
    background: 'light',
    padding: true,
  },
  render: ({ name, size, background, padding }) => renderPictogram(name, size, background, padding),
  parameters: {
    docs: {
      description: {
        component: 'Multi-color pictograms rendered as `<img>` elements. Colors are fixed and cannot be overridden via CSS. Pictograms are designed to be embedded within other components such as cards — because source dimensions vary across assets, sizing is governed by aspect ratio to ensure visual consistency regardless of where a pictogram appears.',
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
    renderAsset: (name) => renderPictogram(name, 'sm', 'light'),
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
    renderAsset: (name) => renderPictogram(name, 'sm', 'dark'),
    theme: 'dark',
    columns,
  }),
};
