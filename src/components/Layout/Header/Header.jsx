import styles from './Header.module.scss';
import HeaderActions from './HeaderActions/HeaderActions';
// import HeaderMenu from './HeaderMenu/HeaderMenu';

function Header() {
  return (
    <header className={styles.header}>
      <HeaderActions />
      {/* <HeaderMenu /> */}
    </header>
  );
}

export default Header;
