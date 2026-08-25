import { createButton } from './Button';
import { loadSprite, getIconNames } from '@components/Icon.jsx';

export default {
  title: 'Components/Atoms/Button',
  tags: ['autodocs'],
  loaders: [() => loadSprite().then(() => ({ iconNames: getIconNames() }))],
  render: (args) => createButton(args),
  argTypes: {
    tag: {
      control: { type: 'inline-radio' },
      options: ['a', 'button'],
      description: 'HTML element — "a" for links, "button" for form submission',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    href: {
      control: 'text',
      description: 'Link URL',
      if: { arg: 'tag', eq: 'a' },
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute',
      if: { arg: 'tag', eq: 'button' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size variant',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'text', 'icon-only'],
      description: 'Button variant — "default" adds no modifier class, "text" adds is-text, "icon-only" adds is-icon',
    },
    icon: {
      control: { type: 'select' },
      options: ['none', ...getIconNames()],
      description: 'Icon to display',
    },
    iconPosition: {
      control: { type: 'inline-radio' },
      options: ['before', 'after'],
      description: 'Icon position relative to label',
    },
    iconOrientation: {
      control: { type: 'select' },
      options: ['', 'right', 'down', 'left', 'up', 'flip-x', 'flip-y'],
      description: 'Icon orientation — overrides default direction',
      if: { arg: 'icon', neq: 'none' },
    },
    color: {
      control: { type: 'select' },
      options: ['orange', 'white', 'gray-core'],
      description: 'Button color (sets --_bg)',
    },
  },
  args: {
    tag: 'a',
    label: 'Register now',
    href: '#',
    type: 'button',
    size: 'md',
    variant: 'default',
    icon: 'none',
    iconPosition: 'after',
    iconOrientation: '',
    color: 'orange',
  },
  parameters: {
    docs: {
      description: {
        component: 'Standard button component supporting multiple sizes, color variants, icon positions, and text/icon-only modes.',
      },
    },
  },
};

export const Default = {};
