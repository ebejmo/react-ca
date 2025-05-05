import styles from './SaleBanner.module.scss';

export default function SaleBanner() {
  return (
    <div className={styles.banner} role="note" aria-label="Promotion">
      <p className={styles.text}>Selected items on Sale</p>
    </div>
  );
}
