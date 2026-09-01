import { createFieldSelect } from './field-select.js';
import { loadSprite } from '@components/Icon.jsx';
import './field.css';
import '../Tooltip/tooltip.css';
import '../Icon/icon.css';

const SAMPLE_OPTIONS = {
  '1-10':   '1–10',
  '11-50':  '11–50',
  '51-100': '51–100',
  '100+':   '100+',
};

export default {
  title: 'Components/Atoms/Form Field/Select',
  tags: ['autodocs'],
  loaders: [() => loadSprite()],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required, showing a * after the label',
    },
    tooltip: {
      control: 'text',
      description: 'Optional tooltip content',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown in the invalid state',
    },
  },
  args: {
    label: 'Number of technicians',
    required: false,
    tooltip: '',
    errorMessage: 'Please select an option.',
  },
  render: ({ label, required, tooltip, state, errorMessage }) => createFieldSelect({ label, options: SAMPLE_OPTIONS, required, tooltip, state, errorMessage }),
  parameters: {
    figmaUrl: 'https://www.figma.com/design/4XRgVV07db8aSCntzB8WSC/FMX-Components?node-id=2348-4065&m=dev',
    docs: {
      description: {
        component: 'Select dropdown field. Supports default, selected, disabled, and invalid states. An optional tooltip can be attached to the label.',
      },
    },
  },
};

const LONG_OPTIONS = {
  'option-1': 'This is a very long option label that may exceed the width of the select field',
  'option-2': 'Another lengthy option demonstrating text truncation behavior within a dropdown',
};

export const Preview     = {};
export const Dark        = { name: 'Dark', globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } }, render: ({ label, tooltip, state, errorMessage }) => { const wrap = document.createElement('div'); wrap.setAttribute('data-theme', 'dark'); wrap.appendChild(createFieldSelect({ label, options: SAMPLE_OPTIONS, tooltip, state, errorMessage, required: true })); return wrap; }, parameters: { docs: { description: { story: 'Default appearance on a dark background.' } } } };
export const WithTooltip = { name: 'With Tooltip', args: { tooltip: 'Select the range that best describes your team size.' } };
export const LongValue   = { name: 'Long Value', render: ({ state }) => createFieldSelect({ label: 'Category', options: LONG_OPTIONS, selected: 'option-1', state }), parameters: { docs: { description: { story: 'Demonstrates how the select handles long option labels that exceed the field width.' } } } };
export const Invalid     = { args: { state: 'invalid', errorMessage: 'Please select an option.' } };
export const Disabled    = { args: { state: 'disabled' } };
