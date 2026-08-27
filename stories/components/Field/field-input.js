import { nextId, createFieldWrap, createLabel, createError } from './field-shared.js';

export function createFieldInput({ label, placeholder = '', tooltip = '', state = 'default', errorMessage = '', icon = '', inputType = 'text' }) {
  const id   = nextId();
  const wrap = createFieldWrap(state);

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
    inputWrap.className = `fmxe-field-input-wrap has-icon icon-${icon}`;
    inputWrap.appendChild(input);
    wrap.appendChild(inputWrap);
  } else {
    wrap.appendChild(input);
  }

  wrap.appendChild(createError(id, state, errorMessage));
  return wrap;
}
