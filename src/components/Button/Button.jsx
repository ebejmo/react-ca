import classNames from 'classnames';
import styles from './Button.module.scss';

export default function Button({
  children,
  variant = 'primary',
  type,
  onClick,
}) {
  const buttonClass = classNames(styles.button, styles[variant]);

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
}
