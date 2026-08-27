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

export const Preview    = {};
export const WithTooltip = { name: 'With Tooltip', args: { tooltip: 'Include any additional context that may be helpful.' } };
export const Invalid    = { args: { state: 'invalid', errorMessage: 'This field is required.' } };
export const Disabled   = { args: { state: 'disabled' } };
