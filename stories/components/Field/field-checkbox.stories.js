import { createChoiceGroup } from './FieldChoice.js';
import './field-choice.css';

const SAMPLE_OPTIONS = ['Option one', 'Option two', 'Option three'];

const sharedArgTypes = {
  legend: {
    control: 'text',
    description: 'Group label',
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
    description: 'Input size',
  },
  state: {
    control: { type: 'select' },
    options: ['default', 'invalid', 'disabled'],
    description: 'Field state',
  },
};

const sharedArgs = {
  legend: 'Select all that apply',
  options: SAMPLE_OPTIONS,
  size: 'md',
  state: 'default',
};

export default {
  title: 'Components/Atoms/Form Field/Checkbox',
  tags: ['autodocs'],
  argTypes: sharedArgTypes,
  args: sharedArgs,
  render: (args) => createChoiceGroup({ ...args, inputType: 'checkbox' }),
  parameters: {
    docs: {
      description: {
        component: 'Checkbox group for multi-select options. Styled via CSS `appearance: none` for full design control. Supports default, invalid, and disabled states across sm, md, and lg sizes.',
      },
    },
  },
};

export const Preview = {};
export const Invalid  = { args: { state: 'invalid' } };
export const Disabled = { args: { state: 'disabled' } };
