import { createForm } from './form.js';
import { loadSprite } from '@components/Icon.jsx';
import './form.css';
import '../Field/field.css';
import '../Field/field-choice.css';
import '../Tooltip/tooltip.css';
import '../Icon/icon.css';
import '../Button/button.css';

const SAMPLE_FIELDS = [
  { type: 'input', label: 'Full name', placeholder: 'Enter your name…', required: true },
  { type: 'input', label: 'Email address', placeholder: 'Enter your email…', inputType: 'email', required: true },
  { type: 'input', label: 'Average hourly labor cost', placeholder: '0', icon: 'dollar-sign', description: 'Enter the average cost per hour across all technician roles.' },
  { type: 'select', label: 'Number of technicians', options: { '1-10': '1–10', '11-50': '11–50', '51-100': '51–100', '100+': '100+' } },
  { type: 'radio', legend: 'Preferred contact method', options: ['Email', 'Phone', 'In-app notification'] },
  { type: 'checkbox', legend: 'Areas of interest', options: ['Preventive maintenance', 'Asset tracking', 'Inventory management'] },
  { type: 'textarea', label: 'Additional notes', placeholder: 'Enter any additional notes…' },
];

export default {
  title: 'Components/Molecules/Form',
  tags: ['autodocs'],
  loaders: [() => loadSprite()],
  argTypes: {
    heading: {
      control: 'text',
      description: 'Form heading',
    },
    description: {
      control: 'text',
      description: 'Optional description below the heading',
    },
    submitLabel: {
      control: 'text',
      description: 'Submit button label',
    },
  },
  args: {
    heading: 'Contact us',
    description: "Fill out the form below and we'll get back to you shortly.",
    submitLabel: 'Submit',
  },
  render: ({ heading, description, submitLabel }) => createForm({ heading, description, submitLabel, fields: SAMPLE_FIELDS }),
  parameters: {
    docs: {
      description: {
        component: 'A form molecule combining a heading, description, one or more field atoms, and a submit button. Supports light and dark themes.',
      },
    },
  },
};

export const Preview = {};
export const Dark = {
  name: 'Dark',
  globals: { backgrounds: { value: 'cobalt-blue-midnight-dark' } },
  render: ({ heading, description, submitLabel }) => {
    const wrap = document.createElement('div');
    wrap.setAttribute('data-theme', 'dark');
    wrap.appendChild(createForm({ heading, description, submitLabel, fields: SAMPLE_FIELDS }));
    return wrap;
  },
  parameters: { docs: { description: { story: 'Form on a dark background.' } } },
};
