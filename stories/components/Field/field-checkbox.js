import { nextChoiceId, createFieldDesc } from './field-shared.js';

export function createCheckboxGroup({ options, size, state, legend = '', description = '', required = false }) {
  const group = document.createElement('fieldset');
  const classes = ['fmxe-field-choice'];
  if (size !== 'sm') classes.push(`size-${size}`);
  if (state === 'invalid') classes.push('is-invalid');
  group.className = classes.join(' ');

  if (legend) {
    const legendEl = document.createElement('legend');
    legendEl.className   = 'fmxe-field-choice-legend';
    legendEl.textContent = legend;
    group.appendChild(legendEl);
  }

  if (description) group.appendChild(createFieldDesc(description));

  const groupName = nextChoiceId();
  const msgId = `${groupName}-msg`;

  options.forEach((optLabel, i) => {
    const id = `${groupName}-${i}`;
    const row = document.createElement('div');
    row.className = 'fmxe-field-choice-option';

    const input = document.createElement('input');
    input.type  = 'checkbox';
    input.id    = id;
    input.name  = groupName;
    input.value = `option-${i}`;
    if (!state && i === 0) input.checked = true;
    if (required && i === 0) input.required = true;
    input.setAttribute('aria-describedby', msgId);
    if (state === 'disabled') {
      input.disabled = true;
      if (i === options.length - 1) input.checked = true;
    }
    if (state === 'invalid' && i === options.length - 1) input.checked = true;

    const label = document.createElement('label');
    label.htmlFor     = id;
    label.textContent = optLabel;

    row.appendChild(input);
    row.appendChild(label);
    group.appendChild(row);
  });

  const error = document.createElement('span');
  error.id          = msgId;
  error.className   = 'fmxe-field-msg';
  error.setAttribute('data-msg', 'error');
  if (state === 'invalid') error.textContent = 'Please select an option.';
  group.appendChild(error);

  return group;
}
