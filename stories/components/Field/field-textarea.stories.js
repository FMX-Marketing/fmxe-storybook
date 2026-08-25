import { createFieldTextarea } from './Field.js';
import { loadSprite } from '@utils/createIcon.js';
import './field.css';
import '../Tooltip/tooltip.css';
import '../Icon/icon.css';

const STATES = ['default', 'selected', 'disabled', 'invalid'];

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
    state: {
      control: { type: 'select' },
      options: STATES,
      description: 'Field state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when state is invalid',
      if: { arg: 'state', eq: 'invalid' },
    },
  },
  args: {
    label: 'Additional notes',
    placeholder: 'Enter your notes here…',
    rows: 4,
    tooltip: '',
    state: 'default',
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
