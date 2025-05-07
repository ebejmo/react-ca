import styles from './HeaderActions.module.scss';
import { ThemeToggleIcon, CartIcon } from '../../../Icons';
import Logo from '../../../Logo/Logo';

function HeaderActions() {
  return (
    <div className={styles.actionsRow}>
      <Logo />

      <div className={styles.iconGroup}>
        <ThemeToggleIcon />
        <CartIcon cartCount={0} />
      </div>
    </div>
  );
}

export default HeaderActions;
