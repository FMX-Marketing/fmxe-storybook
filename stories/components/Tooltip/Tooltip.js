import { renderIcon } from '@components/Icon.jsx';

function positionTooltip(tooltip) {
  const content = tooltip.querySelector('.fmxe-tooltip-content');
  if (!content) return;

  // Reset everything before measuring so stale styles don't affect the result
  tooltip.removeAttribute('data-flipped');
  content.style.left      = '';
  content.style.right     = '';
  content.style.transform = '';

  const margin = 8;

  if (content.getBoundingClientRect().top < margin) {
    tooltip.setAttribute('data-flipped', '');
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

let tooltipIdCounter = 0;

export function createTooltip(text, placement = 'top', align = null) {
  const id = `fmxe-tooltip-${++tooltipIdCounter}`;

  const wrap = document.createElement('span');
  const classes = ['fmxe-tooltip'];
  if (placement !== 'top') classes.push(`place-${placement}`);
  if (align) classes.push(`align-${align}`);
  wrap.className = classes.join(' ');

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'fmxe-tooltip-trigger';
  trigger.setAttribute('aria-describedby', id);
  trigger.addEventListener('mouseenter', () => positionTooltip(wrap));
  trigger.addEventListener('focus', () => positionTooltip(wrap));

  const iconWrap = renderIcon('information', 'md');
  iconWrap.setAttribute('aria-hidden', 'true');
  trigger.appendChild(iconWrap);

  const srLabel = document.createElement('span');
  srLabel.className = 'sr-only';
  srLabel.textContent = 'More information';
  trigger.appendChild(srLabel);

  const content = document.createElement('span');
  content.id = id;
  content.className = 'fmxe-tooltip-content';
  content.setAttribute('role', 'tooltip');

  const textEl = document.createElement('span');
  textEl.className = 'fmxe-tooltip-text';
  textEl.innerHTML = text;

  content.appendChild(textEl);
  wrap.appendChild(trigger);
  wrap.appendChild(content);

  return wrap;
}
