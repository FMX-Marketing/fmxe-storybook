import { createCheckboxGroup } from './field-checkbox.js';
import './field-choice.css';

const SAMPLE_OPTIONS = ['Option one', 'Option two', 'Option three'];

const sharedArgTypes = {
  legend: {
    control: 'text',
    description: 'Group label',
  },
  description: {
    control: 'text',
    description: 'Optional helper text displayed below the legend',
  },
  required: {
    control: 'boolean',
    description: 'Marks the first input as required, showing a * after the legend',
  },
};

const sharedArgs = {
  legend: 'Select all that apply',
  description: '',
  options: SAMPLE_OPTIONS,
  required: false,
};

export default {
  title: 'Components/Atoms/Form Field/Checkbox',
  tags: ['autodocs'],
  argTypes: sharedArgTypes,
  args: sharedArgs,
  render: (args) => createCheckboxGroup(args),
  parameters: {
    figmaUrl: 'https://www.figma.com/design/4XRgVV07db8aSCntzB8WSC/FMX-Components?node-id=2348-3911&m=dev',
    docs: {
      description: {
        component: 'Checkbox group for multi-select options. Supports default, invalid, and disabled states.',
      },
    },
  },
};

export const Preview   = {};
export const Dark      = { name: 'Dark', args: { required: true }, globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } }, render: (args) => { const wrap = document.createElement('div'); wrap.setAttribute('data-theme', 'dark'); wrap.appendChild(createCheckboxGroup(args)); return wrap; }, parameters: { docs: { description: { story: 'Default appearance on a dark background.' } } } };
export const WithDescription = { name: 'With Description', args: { description: 'Select all areas you would like to learn more about.' } };
export const LongValue = { name: 'Long Value', args: { legend: 'Areas of interest', options: ['Preventive maintenance scheduling and automated work order generation', 'Asset tracking and lifecycle management across multiple facilities', 'Inventory and supply chain management with low-stock alerts'] }, parameters: { docs: { description: { story: 'Demonstrates how option labels wrap when text exceeds the available width.' } } } };
export const Invalid   = { args: { state: 'invalid' } };
export const Disabled  = { args: { state: 'disabled' } };
