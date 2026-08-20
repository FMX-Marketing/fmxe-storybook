import { createButton } from './ButtonLegacy';

export default {
  title: 'Components/Atoms/Button Legacy',
  tags: ['autodocs'],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button text content',
    },
    href: {
      control: 'text',
      description: 'Link URL',
    },
    style: {
      control: { type: 'select' },
      options: ['default', 'arrow', 'arrow-lg', 'arrow-prev', 'arrow-prev-lg', 'arrow-electric', 'arrow-lg-electric'],
      description: 'Block style variant.',
    },
  },
  args: {
    label: 'Button text',
    href: '#',
    style: '',
  },
  parameters: {
    docs: {
      description: {
        component: 'Wordpress core button block which supports multiple style variants.',
      },
      source: {
        language: 'html',
        format: true,
        type: 'dynamic',
      },
    },
  },
};

const createStyleStory = (styleValue) => ({
  args: { style: styleValue },
});

// Output block style variants.
export const Default = createStyleStory('');
export const Arrow = createStyleStory('arrow');
export const ArrowLarge = createStyleStory('arrow-lg');
export const ArrowPrevious = createStyleStory('arrow-prev');
export const ArrowPreviousLarge = createStyleStory('arrow-prev-lg');
export const ArrowElectric = createStyleStory('arrow-electric');
export const ArrowLargeElectric = createStyleStory('arrow-lg-electric');
