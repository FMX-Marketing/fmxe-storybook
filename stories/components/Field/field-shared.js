import { createTooltip } from '../Tooltip/Tooltip.js';

let _fieldId = 0;

export function nextId() {
  return `fmxe-field-${++_fieldId}`;
}

export function createFieldWrap(state) {
  const wrap = document.createElement('div');
  const classes = ['fmxe-field'];
  if (state === 'invalid') classes.push('is-invalid');
  if (state === 'disabled') classes.push('is-disabled');
  wrap.className = classes.join(' ');
  return wrap;
}

export function createLabel(id, labelText, tooltip) {
  const label = document.createElement('label');
  label.htmlFor = id;

  const text = document.createElement('span');
  text.className = 'fmxe-field-label';
  text.textContent = labelText;
  label.appendChild(text);

  if (tooltip) label.appendChild(createTooltip(tooltip));
  return label;
}

export function createError(id, state, errorMessage) {
  const error = document.createElement('span');
  error.className = 'fmxe-field-error';
  error.id = `${id}-error`;
  error.setAttribute('aria-live', 'polite');
  if (state === 'invalid' && errorMessage) error.textContent = errorMessage;
  return error;
}
