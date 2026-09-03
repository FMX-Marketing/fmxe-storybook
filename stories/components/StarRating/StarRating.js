import { renderIcon } from '@components/Icon.jsx';

export function createStarRating(rating) {
  const wrap = document.createElement('div');
  wrap.className = 'fmxe-star-rating';
  wrap.setAttribute('aria-label', `${rating} out of 5 stars`);
  wrap.setAttribute('role', 'img');

  for (let i = 1; i <= 5; i++) {
    const icon = renderIcon('star', 'md', null, i <= rating ? 'is-filled' : '');
    wrap.appendChild(icon);
  }

  return wrap;
}
