import { Link } from 'react-router-dom';
import CartIcon from '../Icons/CartIcon/CartIcon';
import headerStyles from './Header.module.scss';
import styles from './TopBar.module.scss';
import ThemeToggleIcon from '../Icons/ThemeToggleIcon/ThemeToggleIcon';

function TopBar() {
  return (
    <div className={headerStyles.headerInner}>
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
