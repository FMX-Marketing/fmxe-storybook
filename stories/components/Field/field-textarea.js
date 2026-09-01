import { nextId, createFieldWrap, createLabel, createMsg } from './field-shared.js';

export function createFieldTextarea({ label, placeholder = '', tooltip = '', rows = 4, state = 'default', errorMessage = '', required = false }) {
  const id   = nextId();
  const wrap = createFieldWrap(state);

  const textarea = document.createElement('textarea');
  textarea.id          = id;
  textarea.name        = id;
  textarea.placeholder = placeholder;
  textarea.rows        = rows;
  textarea.required    = required;
  textarea.setAttribute('aria-describedby', `${id}-msg`);

  wrap.appendChild(createLabel(id, label, tooltip));
  wrap.appendChild(textarea);
  wrap.appendChild(createMsg(id, state, errorMessage));
  return wrap;
}
