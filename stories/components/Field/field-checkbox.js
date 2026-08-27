let _choiceId = 0;
function nextId() { return `fmxe-choice-${++_choiceId}`; }

export function createCheckboxGroup({ options, size, state, legend = '' }) {
  const group = document.createElement('fieldset');
  const classes = ['fmxe-field-choice'];
  if (size !== 'md') classes.push(`size-${size}`);
  if (state === 'invalid') classes.push('is-invalid');
  group.className = classes.join(' ');

  if (legend) {
    const legendEl = document.createElement('legend');
    legendEl.className   = 'fmxe-field-choice-legend';
    legendEl.textContent = legend;
    group.appendChild(legendEl);
  }

  const groupName = nextId();

  options.forEach((optLabel, i) => {
    const id = `${groupName}-${i}`;
    const row = document.createElement('div');
    row.className = 'fmxe-field-choice-option';

    const input = document.createElement('input');
    input.type  = 'checkbox';
    input.id    = id;
    input.name  = groupName;
    input.value = `option-${i}`;
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

  if (state === 'invalid') {
    const error = document.createElement('span');
    error.className   = 'fmxe-field-choice-error';
    error.textContent = 'Please select an option.';
    group.appendChild(error);
  }

  return group;
}
