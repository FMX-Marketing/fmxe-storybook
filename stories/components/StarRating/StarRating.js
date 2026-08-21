import { createIcon } from '@utils/createIcon.js';

export function createStarRating(rating) {
  const wrap = document.createElement('div');
  wrap.className = 'fmxe-star-rating';
  wrap.setAttribute('aria-label', `${rating} out of 5 stars`);
  wrap.setAttribute('role', 'img');

  for (let i = 1; i <= 5; i++) {
    const icon = createIcon('star', 'md');
    if (i <= rating) icon.classList.add('is-filled');
    wrap.appendChild(icon);
  }

  return wrap;
}
