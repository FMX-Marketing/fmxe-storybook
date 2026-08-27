import { nextId, createFieldWrap, createLabel, createError } from './field-shared.js';

export function createFieldTextarea({ label, placeholder = '', tooltip = '', rows = 4, state = 'default', errorMessage = '' }) {
  const id   = nextId();
  const wrap = createFieldWrap(state);

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
