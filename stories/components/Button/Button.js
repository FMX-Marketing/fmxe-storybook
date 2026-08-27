import './button.css';
import '../Icon/icon.css';
import { renderIcon } from '@components/Icon.jsx';

function renderIconEl(name, orientation) {
  return renderIcon(name, 'md', orientation || null);
}

const COLORS = ['orange', 'white', 'gray-core'];

export const createButton = ({ tag = 'a', label = 'Button text', href = '#', type = 'button', size = 'md', variant = 'default', icon = 'none', iconPosition = 'after', iconOrientation = '', color = 'orange' } = {}) => {
  const el = document.createElement(tag);
  const classes = ['fmxe-button', `size-${size}`];
  if (variant === 'text') classes.push('is-text');
  if (variant === 'icon-only') classes.push('is-icon');
  if (color && COLORS.includes(color)) classes.push(`color-${color}`);
  el.className = classes.join(' ');
  if (tag === 'a') el.href = href;
  if (tag === 'button') el.type = type;

  const labelSpan = document.createElement('span');
  labelSpan.textContent = label;

  if (icon && icon !== 'none') {
    const iconEl = renderIconEl(icon, iconOrientation);
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
