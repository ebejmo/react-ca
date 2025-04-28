import styles from './Header.module.scss';
import TopBar from './TopBar';

function Header() {
  return (
    <header className={styles.header}>
      <TopBar />
      {/* <Navigation /> */}
    </header>
  );
}

export default Header;
