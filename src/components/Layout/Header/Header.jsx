import styles from './Header.module.scss';
import TopBar from './TopBar';
import Navigation from './Navigation';

function Header() {
  return (
    <header className={styles.header}>
      <TopBar />
      <Navigation />
    </header>
  );
}

export default Header;
