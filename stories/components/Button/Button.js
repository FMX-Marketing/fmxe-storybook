import './button.css';
import '../Icon/icon.css';
import { createIcon } from '@utils/createIcon.js';

function createIconEl(name) {
  return createIcon(name, 'md');
}

const COLORS = ['orange', 'white', 'gray-core'];

export const createButton = ({ tag = 'a', label = 'Button text', href = '#', type = 'button', size = 'md', variant = 'default', icon = 'none', iconPosition = 'after', color = 'orange' } = {}) => {
  const el = document.createElement(tag);
  const classes = ['fmxe-button', size];
  if (variant === 'text') classes.push('is-text');
  if (variant === 'icon-only') classes.push('is-icon-only');
  if (color && COLORS.includes(color)) classes.push(`bg-color-${color}`);
  el.className = classes.join(' ');
  if (tag === 'a') el.href = href;
  if (tag === 'button') el.type = type;

  const labelSpan = document.createElement('span');
  labelSpan.textContent = label;

  if (icon && icon !== 'none') {
    const iconEl = createIconEl(icon);
    if (iconPosition === 'before') {
      el.appendChild(iconEl);
      el.appendChild(labelSpan);
    } else {
      el.appendChild(labelSpan);
      el.appendChild(iconEl);
    }
  } else {
    el.appendChild(labelSpan);
  }


  return el;
};
