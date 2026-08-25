import './avatar.css';

const SIZES = { sm: 55, md: 90, lg: 180 };

function createAvatar({ src, alt = '', size }) {
  const px = SIZES[size];
  const el = document.createElement('img');
  el.className = `fmxe-avatar size-${size}`;
  el.src = src;
  el.alt = alt;
  el.width = px;
  el.height = px;
  return el;
}

export default {
  title: 'Components/Atoms/Avatar',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text — leave empty for decorative avatars',
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(SIZES),
      description: 'Avatar size',
    },
  },
  args: {
    src: '/images/avatars/cat-profile-square.jpeg',
    alt: '',
    size: 'md',
  },
  render: (args) => createAvatar({ src: args.src, alt: args.alt, size: args.size }),
  parameters: {
    docs: {
      description: {
        component: 'Stylized avatar image for content creators, authors, and team members.',
      },
    },
  },
};

export const Preview = {};
