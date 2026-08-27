import { createRadioGroup } from './field-radio.js';
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
  legend: 'Select an option',
  options: SAMPLE_OPTIONS,
  size: 'md',
};

export default {
  title: 'Components/Atoms/Form Field/Radio',
  tags: ['autodocs'],
  argTypes: sharedArgTypes,
  args: sharedArgs,
  render: (args) => createRadioGroup(args),
  parameters: {
    figmaUrl: 'https://www.figma.com/design/4XRgVV07db8aSCntzB8WSC/FMX-Components?node-id=2351-4272&m=dev',
    docs: {
      description: {
        component: 'Radio button group for single-select options. Supports default, invalid, and disabled states across small, medium, and large sizes.',
      },
    },
  },
};

export const Preview = {};
export const Invalid  = { args: { state: 'invalid' } };
export const Disabled = { args: { state: 'disabled' } };
