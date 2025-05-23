import { ThemeToggleIcon, CartIcon } from '../../../components/Icons';
import Logo from '../../../components/Logo/Logo';
import styles from './HeaderActions.module.scss';

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
