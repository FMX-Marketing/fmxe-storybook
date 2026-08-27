import { AssetGallery } from '@components/AssetGallery';
import './fmx-product-logo.css';

const ALL_PRODUCT_LOGOS = Object.keys(import.meta.glob('/public/product-logos/*.svg'))
  .map(p => p.replace('/public/product-logos/', '').replace('.svg', ''))
  .sort();

const PRODUCT_LOGOS = ALL_PRODUCT_LOGOS.filter(n => !n.endsWith('-white'));
const PRODUCT_LOGOS_WHITE = ALL_PRODUCT_LOGOS.filter(n => n.endsWith('-white'));

const ICON_LOGOS = Object.keys(import.meta.glob('/public/product-logos/icons/*.svg'))
  .map(p => p.replace('/public/product-logos/icons/product-icon-', '').replace('.svg', ''))
  .sort();

function renderLogo(name, variant = 'default', size = 'md') {
  const img = document.createElement('img');
  img.src = variant === 'icon'
    ? `/product-logos/icons/product-icon-${name}.svg`
    : `/product-logos/${name}.svg`;
  img.alt = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  img.className = `fmxe-product-logo size-${size}`;
  return img;
}

export default {
  title: 'Components/Atoms/FMX Product Logo',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ALL_PRODUCT_LOGOS,
      description: 'Product logo name',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'icon'],
      description: 'Full logo or icon-only mark',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Logo size',
    },
  },
  args: {
    name: ALL_PRODUCT_LOGOS[0],
    variant: 'default',
    size: 'md',
  },
  render: ({ name, variant, size }) => renderLogo(name, variant, size),
  parameters: {
    docs: {
      description: {
        component: 'FMX product logos available as full logos or icon-only marks, in small, medium, and large sizes. Light and dark variants are available for each product.',
      },
    },
  },
};

export const Preview = {};

// ── Gallery ───────────────────────────────────────────────────────────────────

const galleryArgTypes = {
  name:    { control: false },
  variant: { control: false },
  columns: {
    control: { type: 'select' },
    options: [1, 2, 3, 4],
    description: 'Number of columns in the gallery grid',
  },
};

const galleryArgs = { columns: 2 };

export const GalleryLight = {
  name: 'Gallery (Light)',
  argTypes: galleryArgTypes,
  args: galleryArgs,
  parameters: {
    docs: { description: { story: 'All full product logos on a light background.' } },
  },
  render: ({ columns }) => AssetGallery({
    names: PRODUCT_LOGOS,
    renderAsset: (name) => renderLogo(name, 'default', 'md'),
    theme: 'light',
    columns,
    align: 'start',
  }),
};

export const GalleryDark = {
  name: 'Gallery (Dark)',
  globals: { backgrounds: { value: 'cobalt-blue-midnight' } },
  argTypes: galleryArgTypes,
  args: galleryArgs,
  parameters: {
    backgrounds: { default: 'cobalt-blue-midnight' },
    docs: { description: { story: 'All full product logos on a dark background.' } },
  },
  render: ({ columns }) => AssetGallery({
    names: PRODUCT_LOGOS_WHITE,
    renderAsset: (name) => renderLogo(name, 'default', 'md'),
    theme: 'dark',
    columns,
    align: 'start',
    background: 'var(--fmxe-color-cobalt-blue-midnight)',
  }),
};

export const IconGalleryLight = {
  name: 'Icon Gallery (Light)',
  argTypes: galleryArgTypes,
  args: { columns: 4 },
  parameters: {
    docs: { description: { story: 'All product icon marks on a light background.' } },
  },
  render: ({ columns }) => AssetGallery({
    names: ICON_LOGOS,
    renderAsset: (name) => renderLogo(name, 'icon', 'md'),
    theme: 'light',
    columns,
  }),
};

export const IconGalleryDark = {
  name: 'Icon Gallery (Dark)',
  globals: { backgrounds: { value: 'cobalt-blue-midnight' } },
  argTypes: galleryArgTypes,
  args: { columns: 4 },
  parameters: {
    backgrounds: { default: 'cobalt-blue-midnight' },
    docs: { description: { story: 'All product icon marks on a dark background.' } },
  },
  render: ({ columns }) => AssetGallery({
    names: ICON_LOGOS,
    renderAsset: (name) => renderLogo(name, 'icon', 'md'),
    theme: 'dark',
    columns,
    background: 'var(--fmxe-color-cobalt-blue-midnight)',
  }),
};
