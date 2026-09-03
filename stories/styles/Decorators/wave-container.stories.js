import './wave-container.css';

function injectClipPath() {
  if (document.getElementById('fmxe-wave-clip-svg')) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'fmxe-wave-clip-svg';
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  svg.innerHTML = `
    <defs>
      <clipPath id="fmxe-wave-clip" clipPathUnits="objectBoundingBox"
        transform="scale(${1/1440} ${1/75})">
        <path d="M0 0 L1440 0 L1440 38.8974 C1202.67 76.7849 956.373 87.3271 717.78 58.0857 C590.624 42.4895 466.363 21.4151 335.87 16.1389 C277.155 13.7433 217.893 14.3902 159.629 19.3025 C130.122 21.7487 97.3076 24.1648 65.7699 28.6683 C57.3892 29.8651 0 38.9377 0 38.8973 Z"/>
      </clipPath>
    </defs>
  `;
  document.body.prepend(svg);
}

const COLORS = [
  'cobalt-blue-midnight',
  'cobalt-blue-midnight-dark',
  'sky-blue-light-1',
  'sky-blue-light-2',
  'electric-blue-core',
  'white',
];

function createSection({ color, wave = true }) {
  const el = document.createElement('div');
  if (wave) el.className = 'fmxe-deco-wave-container';
  el.style.backgroundColor = `var(--fmxe-color-${color})`;
  el.style.padding = 'var(--fmxe-space-xl) var(--fmxe-space-lg)';

  const label = document.createElement('span');
  label.textContent = wave ? 'Wave container' : 'Regular container';
  label.style.backgroundColor = 'var(--fmxe-color-cobalt-blue-midnight-dark)';
  label.style.borderRadius = 'var(--fmxe-border-radius-sm)';
  label.style.color = 'var(--fmxe-color-white)';
  label.style.display = 'inline-block';
  label.style.fontSize = 'var(--fmxe-font-family-size-xs)';
  label.style.padding = 'var(--fmxe-space-xs) var(--fmxe-space-sm)';
  el.appendChild(label);

  return el;
}

export default {
  title: 'Styles/Decorators/Wave Container',
  tags: ['autodocs'],
  loaders: [() => injectClipPath()],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
      description: 'Background color of the wavy section',
    },
    wave: {
      control: 'boolean',
      description: 'Toggle the wave decorator on or off',
    },
  },
  args: {
    color: 'cobalt-blue-midnight',
    wave: true,
  },
  render: ({ color, wave }) => {
    const wrap = document.createElement('div');

    wrap.appendChild(createSection({ color, wave }));
    wrap.appendChild(createSection({ color: 'sky-blue-light-1', wave: false }));
    return wrap;
  },
  parameters: {
    docs: {
      description: {
        component: 'Adds a decorative wave to the bottom of a section, creating a smooth visual transition into the next. When two wave sections are stacked, the colors of both sections blend naturally into the wave shape.',
      },
    },
  },
};

export const Preview = {};

export const Stacked = {
  name: 'Stacked waves',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Wave sections can be stacked in any order and freely mixed with regular sections — no z-index management required. The wave automatically picks up the background color of its section and blends into whatever follows.' } },
  },
  render: () => {
    const wrap = document.createElement('div');

    [
      { color: 'cobalt-blue-midnight' },
      { color: 'electric-blue-core' },
      { color: 'sky-blue-light-1', wave: false },
      { color: 'cobalt-blue-dark' },
      { color: 'sky-blue-light-2' },
      { color: 'white', wave: false },
    ].forEach(section => wrap.appendChild(createSection(section)));

    return wrap;
  },
};
