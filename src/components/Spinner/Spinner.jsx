import styles from './Spinner.module.scss';

export default function Spinner({ size = 'medium' }) {
  return (
    <div
      className={`${styles.spinner} ${styles[size]}`}
      aria-label="Loading"
      role="status"
    />
  );
}
