import './section-wave.css';

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

function createSection({ color, label, wave = true }) {
  const el = document.createElement('div');
  if (wave) el.className = 'fmxe-section-wave';
  el.style.backgroundColor = `var(--fmxe-color-${color})`;
  el.style.padding = 'var(--fmxe-space-xl) var(--fmxe-space-lg)';
  el.textContent = label;
  return el;
}

export default {
  title: 'Styles/Decorators/Section Wave',
  tags: ['autodocs'],
  loaders: [() => injectClipPath()],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
      description: 'Background color of the wavy section',
    },
  },
  args: {
    color: 'cobalt-blue-midnight',
  },
  render: ({ color }) => {
    const wrap = document.createElement('div');

    wrap.appendChild(createSection({ color, label: 'Section with wave' }));
    wrap.appendChild(createSection({ color: 'sky-blue-light-1', label: 'Following section', wave: false }));
    return wrap;
  },
  parameters: {
    docs: {
      description: {
        component: 'Applies a wavy bottom edge to a section that flows into the next. Uses a CSS `clip-path` on a `::after` pseudo-element colored via `background-color: inherit`. When two wave sections are adjacent, a `::before` fills the negative space with the following section\'s color, creating a two-tone wave transition with no z-index management required.',
      },
    },
  },
};

export const Preview = {};

export const Stacked = {
  name: 'Stacked waves',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Multiple consecutive wave sections with no z-index management required.' } },
  },
  render: () => {
    const wrap = document.createElement('div');

    [
      { color: 'cobalt-blue-midnight', label: 'Section 1' },
      { color: 'electric-blue-core', label: 'Section 2' },
      { color: 'sky-blue-light-1', label: 'Section 3' },
      { color: 'white', label: 'Final section', wave: false },
    ].forEach(section => wrap.appendChild(createSection(section)));

    return wrap;
  },
};
