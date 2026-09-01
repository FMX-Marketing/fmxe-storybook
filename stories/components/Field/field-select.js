import { nextId, createFieldWrap, createLabel, createMsg } from './field-shared.js';

export function createFieldSelect({ label, options = {}, tooltip = '', state = 'default', errorMessage = '', icon = '', required = false, selected = '' }) {
  const id   = nextId();
  const wrap = createFieldWrap(state);

  const select = document.createElement('select');
  select.id       = id;
  select.name     = id;
  select.required = required;
  select.setAttribute('aria-describedby', `${id}-msg`);

  const placeholder = document.createElement('option');
  placeholder.value       = '';
  placeholder.textContent = 'Select...';
  select.appendChild(placeholder);

  Object.entries(options).forEach(([value, optLabel]) => {
    const opt = document.createElement('option');
    opt.value       = value;
    opt.textContent = optLabel;
    if (value === selected) opt.selected = true;
    select.appendChild(opt);
  });

  const selectWrap = document.createElement('div');
  selectWrap.className = 'fmxe-field-select-wrap';
  if (icon) selectWrap.classList.add('has-icon', `icon-${icon}`);
  selectWrap.appendChild(select);

  wrap.appendChild(createLabel(id, label, tooltip));
  wrap.appendChild(selectWrap);
  wrap.appendChild(createMsg(id, state, errorMessage));
  return wrap;
}
