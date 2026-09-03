import { createFieldInput } from '../Field/field-input.js';
import { createFieldSelect } from '../Field/field-select.js';
import { createFieldTextarea } from '../Field/field-textarea.js';
import { createCheckboxGroup } from '../Field/field-checkbox.js';
import { createRadioGroup } from '../Field/field-radio.js';
import { createButton } from '../Button/Button.js';

const FIELD_CREATORS = {
  input:    createFieldInput,
  select:   createFieldSelect,
  textarea: createFieldTextarea,
  checkbox: createCheckboxGroup,
  radio:    createRadioGroup,
};

let _formId = 0;

export function createForm({ heading = '', description = '', fields = [], submitLabel = 'Submit' }) {
  const formId = `fmxe-form-${++_formId}`;
  const form = document.createElement('form');
  form.className = 'fmxe-form';
  form.noValidate = true;

  if (heading || description) {
    const header = document.createElement('div');
    header.className = 'fmxe-form-header';

    if (heading) {
      const headingId = `${formId}-heading`;
      form.setAttribute('aria-labelledby', headingId);
      const h = document.createElement('h3');
      h.id = headingId;
      h.className = 'fmxe-form-heading';
      h.textContent = heading;
      header.appendChild(h);
    }

    if (description) {
      const p = document.createElement('p');
      p.className = 'fmxe-form-description';
      p.textContent = description;
      header.appendChild(p);
    }

    form.appendChild(header);
  }

  if (fields.length) {
    const fieldset = document.createElement('div');
    fieldset.className = 'fmxe-form-fields';

    fields.forEach(({ type = 'input', ...fieldProps }) => {
      const creator = FIELD_CREATORS[type];
      if (creator) fieldset.appendChild(creator(fieldProps));
    });

    form.appendChild(fieldset);
  }

  form.appendChild(createButton({ tag: 'button', type: 'submit', label: submitLabel }));

  const footer = document.createElement('div');
  footer.className = 'fmxe-form-footer';

  const recaptcha = document.createElement('p');
  recaptcha.className = 'fmxe-form-recaptcha';
  recaptcha.textContent = 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.';

  footer.appendChild(recaptcha);
  form.appendChild(footer);

  return form;
}
