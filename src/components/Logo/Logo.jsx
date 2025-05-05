import { Link } from 'react-router-dom';
import { GiWindSlap } from 'react-icons/gi';
import styles from './Logo.module.scss';

export default function Logo({ className = '', variant = 'default' }) {
  const isFooter = variant === 'footer';

  return (
    <Link
      to="/"
      className={`${styles.logo} ${isFooter ? styles.footer : ''} ${className}`}
      aria-label="SlapShop homepage"
    >
      <span className={styles.text}>
        Slap<span className={styles.primary}>Shop</span>
      </span>
      <GiWindSlap className={styles.icon} />
    </Link>
  );
}
