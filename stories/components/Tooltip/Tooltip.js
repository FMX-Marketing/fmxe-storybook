import { renderIcon } from '@components/Icon.jsx';

function positionTooltip(tooltip) {
  const content = tooltip.querySelector('.fmxe-tooltip__content');
  if (!content) return;

  // Reset everything before measuring so stale styles don't affect the result
  tooltip.classList.remove('is-flipped');
  content.style.left      = '';
  content.style.right     = '';
  content.style.transform = '';

  const margin = 8;

  if (content.getBoundingClientRect().top < margin) {
    tooltip.classList.add('is-flipped');
  }

  const rect = content.getBoundingClientRect();
  if (rect.right > window.innerWidth - margin) {
    content.style.left      = 'auto';
    content.style.right     = '0';
    content.style.transform = 'none';
  } else if (rect.left < margin) {
    content.style.left      = '0';
    content.style.transform = 'none';
  }
}

export function createTooltip(text) {
  const wrap = document.createElement('span');
  wrap.className = 'fmxe-tooltip';
  wrap.addEventListener('mouseenter', () => positionTooltip(wrap));

  const iconWrap = renderIcon('information', 'md');
  iconWrap.classList.add('fmxe-tooltip__icon');

  const content = document.createElement('span');
  content.className = 'fmxe-tooltip__content';
  content.setAttribute('role', 'tooltip');

  const textEl = document.createElement('span');
  textEl.className = 'fmxe-tooltip__text';
  textEl.innerHTML = text;

  content.appendChild(textEl);
  wrap.appendChild(iconWrap);
  wrap.appendChild(content);

  return wrap;
}
