import { createFieldInput } from './field-input.js';
import { loadSprite } from '@components/Icon.jsx';
import './field.css';
import '../Tooltip/tooltip.css';
import '../Icon/icon.css';

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
    required: {
      control: 'boolean',
      description: 'Marks the field as required — appends * to the label',
    },
    description: {
      control: 'text',
      description: 'Optional helper text displayed below the label',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown in the invalid state',
    },
  },
  args: {
    required: false,
    inputType: 'text',
    label: 'Full name',
    description: '',
    placeholder: 'Enter text…',
    icon: '',
    tooltip: '',
    errorMessage: 'This field is required.',
  },
  render: (args) => createFieldInput(args),
  parameters: {
    figmaUrl: 'https://www.figma.com/design/4XRgVV07db8aSCntzB8WSC/FMX-Components?node-id=2348-4065&m=dev',
    docs: {
      description: {
        component: 'A general purpose text input supporting multiple input modes including text, email, password, date, and more. Supports an optional leading icon, tooltip, and default, selected, disabled, and invalid states.',
      },
    },
  },
};

export const Preview     = {};
export const Dark        = { name: 'Dark', args: { required: true }, globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } }, render: (args) => { const wrap = document.createElement('div'); wrap.setAttribute('data-theme', 'dark'); wrap.appendChild(createFieldInput(args)); return wrap; }, parameters: { docs: { description: { story: 'Default appearance on a dark background.' } } } };
export const WithIcon    = { name: 'With Icon', args: { icon: 'dollar-sign', label: 'Average hourly labor cost', placeholder: '0' } };
export const WithDescription = { name: 'With Description', args: { description: 'Enter your first and last name as they appear on your government-issued ID.' } };
export const WithTooltip = { name: 'With Tooltip', args: { tooltip: 'Enter your full legal name.' } };
export const LongValue   = { name: 'Long Value', args: { label: 'Address', placeholder: '1234 Very Long Street Name, Suite 500, Springfield, United States of America 99999' }, parameters: { docs: { description: { story: 'Demonstrates how the input handles long text values that exceed the field width.' } } } };
export const Invalid     = { args: { state: 'invalid', errorMessage: 'This field is required.' } };
export const Disabled    = { args: { state: 'disabled' } };
