import { createFieldTextarea } from './field-textarea.js';
import { loadSprite } from '@components/Icon.jsx';
import './field.css';
import '../Tooltip/tooltip.css';
import '../Icon/icon.css';

export default {
  title: 'Components/Atoms/Form Field/Textarea',
  tags: ['autodocs'],
  loaders: [() => loadSprite()],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required, showing a * after the label',
    },
    rows: {
      control: { type: 'number', min: 2, max: 20, step: 1 },
      description: 'Number of visible rows',
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
    label: 'Additional notes',
    placeholder: 'Enter your notes here…',
    required: false,
    rows: 4,
    tooltip: '',
    errorMessage: 'This field is required.',
  },
  render: (args) => createFieldTextarea(args),
  parameters: {
    docs: {
      description: {
        component: 'Textarea field for multi-line text input. Supports default, selected, disabled, and invalid states. An optional tooltip can be attached to the label.',
      },
    },
  },
};

export const Preview     = {};
export const Dark        = { name: 'Dark', args: { required: true }, globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } }, render: (args) => { const wrap = document.createElement('div'); wrap.setAttribute('data-theme', 'dark'); wrap.appendChild(createFieldTextarea(args)); return wrap; }, parameters: { docs: { description: { story: 'Default appearance on a dark background.' } } } };
export const WithTooltip = { name: 'With Tooltip', args: { tooltip: 'Include any additional context that may be helpful.' } };
export const LongValue   = { name: 'Long Value', args: { placeholder: 'This is an example of a long placeholder that spans multiple lines within the textarea to demonstrate how text wraps and the field expands to accommodate extended content. When users enter detailed notes, descriptions, or multi-line responses, the textarea should gracefully handle the overflow by wrapping text to the next line rather than extending horizontally beyond the bounds of the field container. This ensures a consistent and readable experience regardless of how much content the user provides.' }, parameters: { docs: { description: { story: 'Demonstrates how the textarea handles long text content that wraps across multiple lines.' } } } };
export const Invalid     = { args: { state: 'invalid', errorMessage: 'This field is required.' } };
export const Disabled    = { args: { state: 'disabled' } };
