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
    tooltip: '',
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
