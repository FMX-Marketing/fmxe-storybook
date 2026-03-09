import './button.scss';

export const createButton = ({
  label = '',
  href = '',
  style = '',
}) => {
  const buttonClasses = ['wp-block-button'];

  if (style) {
    buttonClasses.push(`is-style-${style}`);
  }

  const btn = `
  <div class="${buttonClasses.join(' ')}">
    <a class="wp-block-button__link wp-element-button" href="${href}">${label}</a>
  </div>`;

  return btn;
};
