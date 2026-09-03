import { nextId, createFieldWrap, createLabel, createFieldDesc, createMsg, applyDisabled } from './field-shared.js';

export function createFieldInput({ label, description = '', placeholder = '', tooltip = '', state = 'default', errorMessage = '', icon = '', inputType = 'text', size = 'lg', required = false }) {
  const id   = nextId();
  const wrap = createFieldWrap(state, size);

  const input = document.createElement('input');
  input.type        = inputType;
  input.inputMode   = inputType === 'number' ? 'numeric' : undefined;
  input.id          = id;
  input.name        = id;
  input.placeholder = placeholder;
  input.required    = required;
  input.setAttribute('aria-describedby', `${id}-msg`);
  applyDisabled(input, state);

  wrap.appendChild(createLabel(id, label, tooltip));
  if (description) wrap.appendChild(createFieldDesc(description));

  if (icon) {
    const inputWrap = document.createElement('div');
    inputWrap.className = `fmxe-field-input-wrap has-icon icon-${icon}`;
    inputWrap.appendChild(input);
    wrap.appendChild(inputWrap);
  } else {
    wrap.appendChild(input);
  }

  wrap.appendChild(createMsg(id, state, errorMessage));
  return wrap;
}
