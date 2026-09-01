import { createTooltip } from '../Tooltip/Tooltip.js';

let _fieldId = 0;

export function nextId() {
  return `fmxe-field-${++_fieldId}`;
}

export function createFieldWrap(state, size) {
  const wrap = document.createElement('div');
  const classes = ['fmxe-field'];
  if (size && size !== 'lg') classes.push(`size-${size}`);
  if (state === 'invalid') classes.push('is-invalid');
  if (state === 'disabled') classes.push('is-disabled');
  wrap.className = classes.join(' ');
  return wrap;
}

export function createLabel(id, labelText, tooltip) {
  const label = document.createElement('label');
  label.htmlFor = id;

  const text = document.createElement('span');
  text.className = 'fmxe-field-label-text';
  text.textContent = labelText;
  label.appendChild(text);

  if (tooltip) label.appendChild(createTooltip(tooltip));
  return label;
}

export function createMsg(id, state, errorMessage) {
  const msg = document.createElement('span');
  msg.className = 'fmxe-field-msg';
  msg.setAttribute('data-msg', 'error');
  msg.id = `${id}-msg`;
  msg.setAttribute('aria-live', 'polite');
  if (state === 'invalid' && errorMessage) msg.textContent = errorMessage;
  return msg;
}
