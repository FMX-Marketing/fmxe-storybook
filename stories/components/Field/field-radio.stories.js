import { createRadioGroup } from './field-radio.js';
import './field-choice.css';

const SAMPLE_OPTIONS = ['Option one', 'Option two', 'Option three'];

const sharedArgTypes = {
  legend: {
    control: 'text',
    description: 'Group label',
  },
  required: {
    control: 'boolean',
    description: 'Marks the first input as required, showing a * after the legend',
  },
  size: {
    control: false,
    options: ['sm'],
    description: 'Input size',
  },
};

const sharedArgs = {
  legend: 'Select an option',
  options: SAMPLE_OPTIONS,
  required: false,
  size: 'sm',
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
        component: 'Radio button group for single-select options. Supports default, invalid, and disabled states. Rendered at a fixed small size.',
      },
    },
  },
};

export const Preview   = {};
export const Dark      = { name: 'Dark', args: { required: true }, globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } }, render: (args) => { const wrap = document.createElement('div'); wrap.setAttribute('data-theme', 'dark'); wrap.appendChild(createRadioGroup(args)); return wrap; }, parameters: { docs: { description: { story: 'Default appearance on a dark background.' } } } };
export const LongValue = { name: 'Long Value', args: { legend: 'Preferred contact method', options: ['Email me at my primary business address on file, including any follow-up correspondence related to my account', 'Call my direct office line during standard business hours, Monday through Friday, between 9am and 5pm local time', 'Send a message via the in-app notification system so I can respond at my earliest convenience without missing updates'] }, parameters: { docs: { description: { story: 'Demonstrates how option labels wrap when text exceeds the available width.' } } } };
export const Invalid   = { args: { state: 'invalid' } };
export const Disabled  = { args: { state: 'disabled' } };
