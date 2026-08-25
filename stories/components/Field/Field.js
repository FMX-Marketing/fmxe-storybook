import { createTooltip } from '../Tooltip/Tooltip.js';

let _fieldId = 0;

function nextId() {
  return `fmxe-field-${++_fieldId}`;
}

function createFieldWrap(type, state) {
  const wrap = document.createElement('div');
  const classes = ['fmxe-field'];
  if (state === 'invalid') classes.push('is-invalid');
  if (state === 'disabled') classes.push('is-disabled');
  wrap.className = classes.join(' ');
  return wrap;
}

function createLabel(id, labelText, tooltip) {
  const label = document.createElement('label');
  label.htmlFor = id;

  const text = document.createElement('span');
  text.className = 'fmxe-field__label-text';
  text.textContent = labelText;
  label.appendChild(text);

  if (tooltip) label.appendChild(createTooltip(tooltip));
  return label;
}

function createError(id, state, errorMessage) {
  const error = document.createElement('span');
  error.className = 'fmxe-field__error';
  error.id = `${id}-error`;
  error.setAttribute('aria-live', 'polite');
  if (state === 'invalid' && errorMessage) error.textContent = errorMessage;
  return error;
}

export function createFieldNumber({ label, placeholder = '', tooltip = '', state = 'default', errorMessage = '', icon = '', inputType = 'text' }) {
  const id   = nextId();
  const wrap = createFieldWrap('number', state);

  const input = document.createElement('input');
  input.type        = inputType;
  input.inputMode   = inputType === 'number' ? 'numeric' : undefined;
  input.id          = id;
  input.name        = id;
  input.placeholder = placeholder;
  input.setAttribute('aria-describedby', `${id}-error`);

  wrap.appendChild(createLabel(id, label, tooltip));

  if (icon) {
    const inputWrap = document.createElement('div');
    inputWrap.className = `fmxe-field__input-wrap has-icon icon-${icon}`;
    inputWrap.appendChild(input);
    wrap.appendChild(inputWrap);
  } else {
    wrap.appendChild(input);
  }

  wrap.appendChild(createError(id, state, errorMessage));
  return wrap;
}

export function createFieldCurrency(args) {
  return createFieldNumber({ icon: 'dollar-sign', ...args });
}

export function createFieldTextarea({ label, placeholder = '', tooltip = '', rows = 4, state = 'default', errorMessage = '' }) {
  const id   = nextId();
  const wrap = createFieldWrap('textarea', state);

  const textarea = document.createElement('textarea');
  textarea.id          = id;
  textarea.name        = id;
  textarea.placeholder = placeholder;
  textarea.rows        = rows;
  textarea.setAttribute('aria-describedby', `${id}-error`);

  wrap.appendChild(createLabel(id, label, tooltip));
  wrap.appendChild(textarea);
  wrap.appendChild(createError(id, state, errorMessage));
  return wrap;
}

export function createFieldSelect({ label, options = {}, tooltip = '', state = 'default', errorMessage = '', icon = '' }) {
  const id   = nextId();
  const wrap = createFieldWrap('select', state);

  const select = document.createElement('select');
  select.id   = id;
  select.name = id;
  select.setAttribute('aria-describedby', `${id}-error`);

  const placeholder = document.createElement('option');
  placeholder.value       = '';
  placeholder.textContent = 'Select...';
  select.appendChild(placeholder);

  Object.entries(options).forEach(([value, optLabel]) => {
    const opt = document.createElement('option');
    opt.value       = value;
    opt.textContent = optLabel;
    select.appendChild(opt);
  });

  const selectWrap = document.createElement('div');
  selectWrap.className = 'fmxe-field__select-wrap';
  if (icon) {
    selectWrap.classList.add('has-icon', `icon-${icon}`);
  }
  selectWrap.appendChild(select);

  wrap.appendChild(createLabel(id, label, tooltip));
  wrap.appendChild(selectWrap);
  wrap.appendChild(createError(id, state, errorMessage));
  return wrap;
}
