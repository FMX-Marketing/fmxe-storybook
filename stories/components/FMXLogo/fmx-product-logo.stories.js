import { AssetGallery } from '@components/AssetGallery';
import './logo.css';

const PRODUCT_LOGOS = [
  'asset-manager',
  'capital-planner',
  'event-manager',
  'financial-planner',
  'fleet-manager',
  'it-asset-manager',
  'safety-manager',
  'space-manager',
  'utility-manager',
  'warehouse-manager',
  'work-manager',
];

function getUrl(name) {
  return `/logos/products/${name}.svg`;
}

function renderProductLogo(name) {
  const panel = document.createElement('div');
  panel.className = 'logo-panel';
  const img = document.createElement('img');
  img.src = getUrl(name);
  img.alt = name;
  panel.appendChild(img);
  return panel;
}

export default {
  title: 'Components/Atoms/FMX Product Logo',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: PRODUCT_LOGOS,
      description: 'Product logo name',
    },
    theme: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Preview background theme',
    },
  },
  args: {
    name: 'work-manager',
    theme: 'light',
  },
  render: (args) => {
    const root = document.createElement('div');
    root.className = `logo-preview logo-preview--${args.theme}`;
    root.appendChild(renderProductLogo(args.name));
    return root;
  },
  parameters: {
    docs: {
      description: {
        component: 'FMX product logos rendered as `<img>` elements. Colors are fixed — product logos are self-contained graphics and are not recolored via CSS.',
      },
    },
  },
};

export const Preview = {
  args: { name: 'work-manager', theme: 'light' },
};

// ── Gallery ───────────────────────────────────────────────────────────────────

const galleryArgTypes = {
  name:  { control: false },
  theme: { control: false },
  columns: {
    control: { type: 'select' },
    options: [1, 2, 3, 4],
    description: 'Number of columns in the gallery grid',
  },
};

const galleryArgs = { columns: 1 };

export const GalleryLight = {
  name: 'Gallery (Light)',
  argTypes: galleryArgTypes,
  args: galleryArgs,
  parameters: {
    docs: {
      description: { story: 'All product logos on a light background.' },
    },
  },
  render: ({ columns }) => AssetGallery({
    names: PRODUCT_LOGOS,
    renderAsset: renderProductLogo,
    theme: 'light',
    columns,
  }),
};

export const GalleryDark = {
  name: 'Gallery (Dark)',
  globals: { backgrounds: { value: 'dark' } },
  argTypes: galleryArgTypes,
  args: galleryArgs,
  parameters: {
    docs: {
      description: { story: 'All product logos on a dark background.' },
    },
  },
  render: ({ columns }) => AssetGallery({
    names: PRODUCT_LOGOS,
    renderAsset: renderProductLogo,
    theme: 'dark',
    columns,
  }),
};
