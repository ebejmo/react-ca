/* eslint-disable react/jsx-props-no-spreading */
import styles from './IconButton.module.scss';
import Button from '../../../Button/Button';

export default function IconButton({
  children,
  onClick,
  ariaLabel,
  disableHover = false,
  className = '',
  ...props
}) {
  const combinedClassName =
    `${styles.iconButton} ${disableHover ? styles.noHover : ''} ${className}`.trim();
  return (
    <Button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClassName}
      {...props}
    >
      {children}
    </Button>
  );
}
