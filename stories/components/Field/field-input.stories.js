import { createFieldNumber } from './Field.js';
import { loadSprite } from '@components/Icon.jsx';
import './field.css';
import '../Tooltip/tooltip.css';
import '../Icon/icon.css';

const STATES = ['default', 'selected', 'disabled', 'invalid'];

export default {
  title: 'Components/Atoms/Form Field/Input',
  tags: ['autodocs'],
  loaders: [() => loadSprite()],
  argTypes: {
    inputType: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number', 'date', 'time'],
      description: 'Input mode',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    icon: {
      control: { type: 'select' },
      options: ['', 'dollar-sign', 'search'],
      description: 'Optional leading icon',
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
    inputType: 'text',
    label: 'Full name',
    placeholder: 'Enter text…',
    icon: '',
    tooltip: '',
    state: 'default',
    errorMessage: 'This field is required.',
  },
  render: (args) => createFieldNumber(args),
  parameters: {
    docs: {
      description: {
        component: 'A general purpose text input supporting multiple input modes including text, email, password, date, and more. Supports an optional leading icon, tooltip, and default, selected, disabled, and invalid states.',
      },
    },
  },
};

export const Preview     = {};
export const WithIcon    = { name: 'With Icon', args: { icon: 'dollar-sign', label: 'Average hourly labor cost', placeholder: '0' } };
export const WithTooltip = { name: 'With Tooltip', args: { tooltip: 'Enter your full legal name.' } };
export const Invalid     = { args: { state: 'invalid', errorMessage: 'This field is required.' } };
export const Disabled    = { args: { state: 'disabled' } };
