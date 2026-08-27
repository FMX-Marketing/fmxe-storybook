import './badge-group.css';

const AWARD_BADGES = Object.keys(import.meta.glob('/public/badges/*.svg'))
  .map(path => path.replace('/public/badges/', '').replace('.svg', ''));

const ICON_BADGES = Object.keys(import.meta.glob('/public/badges/icon/*.svg'))
  .map(path => path.replace('/public/badges/icon/', '').replace('.svg', ''));

const BADGE_DIMENSIONS = {
  'g2':         { width: 120, height: 93 },
  'capterra':   { width: 119, height: 93 },
  'software':   { width: 88,  height: 93 },
  'getapp':     { width: 120, height: 93 },
  'customer':   { width: 118, height: 93 },
  'featured':   { width: 118, height: 93 },
};

const ICON_DIMENSIONS = {
  'capterra': { width: 28, height: 29 },
  'g2':       { width: 22, height: 28 },
};

function generateAlt(name) {
  return name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function getDimensions(name, map, fallback) {
  const prefix = Object.keys(map).find(k => name.startsWith(k));
  return prefix ? map[prefix] : fallback;
}

function createBadge(name, variant) {
  const isIcon = variant === 'icon';
  const wrap = document.createElement('div');
  wrap.className = 'fmxe-badge';
  const img = document.createElement('img');
  img.src = isIcon ? `/badges/icon/${name}.svg` : `/badges/${name}.svg`;
  img.alt = generateAlt(name);
  const { width, height } = isIcon
    ? getDimensions(name, ICON_DIMENSIONS, { width: 28, height: 28 })
    : getDimensions(name, BADGE_DIMENSIONS, { width: 93, height: 93 });
  img.width = width;
  img.height = height;
  wrap.appendChild(img);
  return wrap;
}

export default {
  title: 'Components/Atoms/Badges',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'icon'],
      description: 'Badge variant',
    },
  },
  args: {
    variant: 'default',
  },
  render: ({ variant }) => {
    const isIcon = variant === 'icon';
    const names = isIcon ? ICON_BADGES : AWARD_BADGES;
    const wrap = document.createElement('div');
    wrap.className = isIcon ? 'fmxe-badge-group is-icon' : 'fmxe-badge-group';
    names.forEach(name => wrap.appendChild(createBadge(name, variant)));
    return wrap;
  },
  parameters: {
    docs: {
      description: {
        component: 'Award and review badges from third-party platforms. Two variants are available: full award badges, and compact reviewer logo icons.',
      },
    },
  },
};

export const Preview = {};
