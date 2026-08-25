import { createFieldSelect } from './Field.js';
import { loadSprite } from '@utils/createIcon.js';
import './field.css';
import '../Tooltip/tooltip.css';
import '../Icon/icon.css';

const STATES = ['default', 'selected', 'disabled', 'invalid'];

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
    label: 'Number of technicians',
    tooltip: '',
    state: 'default',
    errorMessage: 'Please select an option.',
  },
  render: ({ label, tooltip, state, errorMessage }) => createFieldSelect({ label, options: SAMPLE_OPTIONS, tooltip, state, errorMessage }),
  parameters: {
    docs: {
      description: {
        component: 'Select dropdown field. Supports default, selected, disabled, and invalid states. An optional tooltip can be attached to the label.',
      },
    },
  },
};

export const Preview  = {};
export const WithTooltip = { name: 'With Tooltip', args: { tooltip: 'Select the range that best describes your team size.' } };
export const Invalid  = { args: { state: 'invalid', errorMessage: 'Please select an option.' } };
export const Disabled = { args: { state: 'disabled' } };
