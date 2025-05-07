import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SearchIcon } from '../../../Icons';
import SearchBar from './SearchBar';
import styles from './HeaderMenu.module.scss';

function HeaderMenu() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleToggleSearch() {
    setIsSearchOpen((prev) => !prev);
  }

  return (
    <div className={styles.menuRow}>
      <div className={styles.left}>
        <SearchIcon onClick={handleToggleSearch} />
        <SearchBar isOpen={isSearchOpen} />
      </div>
      <nav className={styles.right}>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default HeaderMenu;
