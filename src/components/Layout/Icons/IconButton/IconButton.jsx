import styles from './IconButton.module.scss';

export default function IconButton({ children, onClick, ariaLabel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.iconButton}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
