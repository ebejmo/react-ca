import { Link } from 'react-router-dom';
import CartIcon from '../../Icons/CartIcon/CartIcon';
import styles from './HeaderActions.module.scss';
import ThemeToggleIcon from '../../Icons/ThemeToggleIcon/ThemeToggleIcon';

function HeaderActions() {
  return (
    <div className={styles.actionsRow}>
      <Link to="/" className={styles.logo} aria-label="SlapShop homepage">
        SlapShop
      </Link>

      <div className={styles.iconGroup}>
        <ThemeToggleIcon />
        <CartIcon cartCount={0} />
      </div>
    </div>
  );
}

export default HeaderActions;
