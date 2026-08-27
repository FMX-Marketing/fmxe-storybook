import { createCheckboxGroup } from './field-checkbox.js';
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
};

const sharedArgs = {
  legend: 'Select all that apply',
  options: SAMPLE_OPTIONS,
  size: 'md',
};

export default {
  title: 'Components/Atoms/Form Field/Checkbox',
  tags: ['autodocs'],
  argTypes: sharedArgTypes,
  args: sharedArgs,
  render: (args) => createCheckboxGroup(args),
  parameters: {
    docs: {
      description: {
        component: 'Checkbox group for multi-select options. Supports default, invalid, and disabled states across small, medium, and large sizes.',
      },
    },
  },
};

export const Preview = {};
export const Invalid  = { args: { state: 'invalid' } };
export const Disabled = { args: { state: 'disabled' } };
