/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Button.module.scss';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  type,
  onClick,
  to,
  href,
  disabled = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  ...props
}) {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled
  );

  const iconMarkup = icon ? (
    <span className={classNames(styles.icon, styles[iconPosition])}>
      {icon}
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' && iconMarkup}
      <span>{children}</span>
      {iconPosition === 'right' && iconMarkup}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClass} aria-disabled={disabled} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        aria-disabled={disabled}
        {...props}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
