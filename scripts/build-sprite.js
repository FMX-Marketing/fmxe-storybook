/**
 * Builds a single SVG sprite from all individual icon and logo SVG files.
 *
 * WHY A SPRITE?
 * Each icon lives as its own .svg file in public/icons/ for easy authoring and
 * version control. At runtime, however, referencing hundreds of separate files
 * means hundreds of network requests. The sprite solves this by inlining every
 * icon as a <symbol> inside one hidden <svg> that is fetched once and injected
 * into the DOM. Every icon on the page then references its symbol via
 * <use href="#icon-name">, so there are zero duplicate SVG payloads and only
 * one network request regardless of how many icons are displayed.
 *
 * WHY NOT JUST INLINE EACH SVG?
 * Inlining individual SVGs at the component level repeats the full markup for
 * every instance of the same icon (e.g. 50 arrow icons = 50 copies of the path
 * data). The sprite pattern keeps the path data in one place and lets <use>
 * act as a lightweight reference — no duplication, no per-icon fetches.
 *
 * WHY A BUILD STEP INSTEAD OF DYNAMIC IMPORT?
 * SVG <use> requires the symbol to already be present in the DOM at render
 * time. Dynamic per-icon fetches would cause a flash of missing icons on every
 * page load. The pre-built sprite is fetched once up front (see loadSprite in
 * src/utilities/createIcon.js), ensuring all symbols are available before any
 * icon component renders.
 *
 * WHEN TO RUN:
 * Run `node scripts/build-sprite.js` whenever an SVG is added, removed, or
 * renamed in public/icons/ or public/logos/. The output is committed to the
 * repo so Storybook can serve it as a static asset without a runtime build step.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, basename } from 'node:path';

const ICONS_DIR = resolve('public/icons');
const LOGOS_DIR = resolve('public/logos');
const OUT_FILE  = resolve('public/icons/sprite.svg');

async function buildSymbols(dir, prefix) {
  const files = (await readdir(dir))
    .filter((f) => f.endsWith('.svg') && f !== 'sprite.svg')
    .sort();

  return Promise.all(
    files.map(async (file) => {
      const name    = basename(file, '.svg');
      const markup  = await readFile(resolve(dir, file), 'utf8');
      const viewBox = markup.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 24 24';
      const inner   = markup
        .replace(/<svg[^>]*>/, '')
        .replace(/<\/svg>/g, '')
        .trim();

      return `  <symbol id="${prefix}-${name}" viewBox="${viewBox}">\n    ${inner}\n  </symbol>`;
    })
  );
}

const [iconSymbols, logoSymbols] = await Promise.all([
  buildSymbols(ICONS_DIR, 'icon'),
  buildSymbols(LOGOS_DIR, 'logo'),
]);

const sprite = [
  '<svg xmlns="http://www.w3.org/2000/svg" hidden aria-hidden="true">',
  ...iconSymbols,
  ...logoSymbols,
  '</svg>',
].join('\n');

await writeFile(OUT_FILE, sprite + '\n', 'utf8');
console.log(`Sprite built: ${iconSymbols.length} icons, ${logoSymbols.length} logos → public/icons/sprite.svg`);
