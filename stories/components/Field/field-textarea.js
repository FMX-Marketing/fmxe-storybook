import { nextId, createFieldWrap, createLabel, createMsg, applyDisabled } from './field-shared.js';

export function createFieldTextarea({ label, placeholder = '', value = '', tooltip = '', rows = 4, state = 'default', errorMessage = '', required = false }) {
  const id   = nextId();
  const wrap = createFieldWrap(state);

  const textarea = document.createElement('textarea');
  textarea.id          = id;
  textarea.name        = id;
  textarea.placeholder = placeholder;
  textarea.value       = value;
  textarea.rows        = rows;
  textarea.required    = required;
  textarea.setAttribute('aria-describedby', `${id}-msg`);
  applyDisabled(textarea, state);

  wrap.appendChild(createLabel(id, label, tooltip));
  wrap.appendChild(textarea);
  wrap.appendChild(createMsg(id, state, errorMessage));
  return wrap;
}
