import { Link } from 'react-router-dom';
import CartIcon from '../Icons/CartIcon/CartIcon';
import styles from './TopBar.module.scss';
import ThemeToggleIcon from '../Icons/ThemeToggleIcon/ThemeToggleIcon';

function TopBar() {
  return (
    <div className={styles.topBar}>
      <Link to="/" className={styles.logo}>
        SlapShop
      </Link>

      <div className={styles.actions}>
        <ThemeToggleIcon />
        <CartIcon cartCount={0} />
      </div>
    </div>
  );
}

export default TopBar;
