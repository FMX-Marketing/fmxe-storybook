import React from 'react';
import { createRoot } from 'react-dom/client';

let spritePromise = null;
let iconNames = [];
const inlineCache = {};

/**
 * Fetches the SVG sprite and injects it into the DOM as a hidden element.
 *
 * Must be called before any icon is rendered. In Storybook this is wired up
 * via the `loaders` array on each story that uses icons, ensuring the sprite
 * is present before the story renders.
 *
 * The promise is cached after the first call so the sprite is only ever
 * fetched and injected once per page, regardless of how many stories or
 * components call this function.
 *
 * @returns {Promise<void>} Resolves when the sprite is injected and icon names are populated
 */
export function loadSprite() {
  if (spritePromise) return spritePromise;
  spritePromise = fetch('/icons/sprite.svg')
    .then((res) => res.text())
    .then((text) => {
      const div = document.createElement('div');
      div.style.display = 'none';
      div.innerHTML = text;
      document.body.insertBefore(div, document.body.firstChild);
      iconNames = Array.from(div.querySelectorAll('symbol[id^="icon-"]'))
        .map((el) => el.id.replace(/^icon-/, ''))
        .sort();
    });
  return spritePromise;
}

/**
 * Returns the list of icon names discovered from the sprite.
 * Only populated after loadSprite() has resolved.
 *
 * @returns {string[]} Sorted array of icon names
 */
export function getIconNames() {
  return iconNames;
}

/**
 * Icons that cannot use the sprite pattern and must be fetched and inlined
 * as raw SVG markup instead. This is necessary when the icon requires
 * per-path CSS styling that cannot reach through a <use> shadow boundary.
 */
const INLINE_ICONS = [];

/**
 * JSX component that renders a single icon.
 *
 * For sprite-based icons, renders a <span> containing an <svg> with a <use>
 * reference to the pre-loaded sprite symbol — no path duplication regardless
 * of how many instances appear on the page.
 *
 * Orientation is applied as a CSS class and handled entirely via transform,
 * so a single symbol covers all directions without needing separate assets.
 *
 * @param {string} name - Icon name matching the filename in public/icons/ (without .svg)
 * @param {string} size - Size: xs | sm | md | lg | xl (rendered as size-{value} class)
 * @param {string|null} orientation - Optional orientation: right | down | left | up | flip-x | flip-y (rendered as orient-{value} class)
 * @param {string} [className] - Additional class names to apply to the wrapper span
 * @returns {React.ReactElement}
 */
export function Icon({ name, size = 'md', orientation = null, className = '' }) {
  const classes = ['fmxe-icon', `size-${size}`, `fmxe-icon-${name}`, orientation ? `orient-${orientation}` : null, className]
    .filter(Boolean)
    .join(' ');

  if (INLINE_ICONS.includes(name)) {
    const [markup, setMarkup] = React.useState(inlineCache[name] ?? '');
    React.useEffect(() => {
      if (!inlineCache[name]) {
        fetch(`/icons/${name}.svg`)
          .then((res) => res.text())
          .then((text) => {
            inlineCache[name] = text;
            setMarkup(text);
          });
      }
    }, [name]);
    return <span className={classes} dangerouslySetInnerHTML={{ __html: markup }} />;
  }

  const symbol = document.querySelector(`#icon-${name}`);
  const viewBox = symbol ? symbol.getAttribute('viewBox') : '0 0 24 24';

  return (
    <span className={classes}>
      <svg aria-hidden="true" viewBox={viewBox}>
        <use href={`#icon-${name}`} />
      </svg>
    </span>
  );
}

/**
 * Renders an Icon into a DOM node.
 * Use this when a DOM element is required (e.g. vanilla JS story render functions).
 *
 * @param {string} name - Icon name
 * @param {string} size - Size: xs | sm | md | lg | xl (rendered as size-{value} class)
 * @param {string|null} orientation - Optional orientation class
 * @returns {HTMLElement}
 */
export function renderIcon(name, size = 'md', orientation = null, className = '') {
  const container = document.createElement('span');
  createRoot(container).render(<Icon name={name} size={size} orientation={orientation} className={className} />);
  return container;
}
