import { createStarRating } from './StarRating.js';
import { loadSprite } from '@utils/createIcon.js';
import './star-rating.css';
import '../Icon/icon.css';

export default {
  title: 'Components/Atoms/Star Rating',
  tags: ['autodocs'],
  loaders: [() => loadSprite()],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Number of filled stars (0–5)',
    },
  },
  args: {
    rating: 5,
  },
  render: ({ rating }) => createStarRating(rating),
  parameters: {
    docs: {
      description: {
        component: 'Star rating display out of 5. Filled stars use the brand yellow; unfilled stars are transparent.',
      },
    },
  },
};

export const Preview = {};
