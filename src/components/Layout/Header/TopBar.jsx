import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import styles from './TopBar.module.scss';

function TopBar() {
  return (
    <div className={styles.topBar}>
      <Link to="/" className={styles.logo}>
        SlapShop
      </Link>
      <div className={styles.actions}>
        <CartIcon cartCount={3} />
        {/* theme toggler */}
      </div>
    </div>
  );
}

export default TopBar;
