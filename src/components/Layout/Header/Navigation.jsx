import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';
import headerStyles from './Header.module.scss';
import styles from './Navigation.module.scss';

function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function handleToggleSearch() {
    setIsSearchOpen((prev) => !prev);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
  }

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <nav className={headerStyles.headerInner}>
      <div className={styles.leftSection}>
        <SearchIcon onClick={handleToggleSearch} />

        <form
          onSubmit={handleSearchSubmit}
          className={`${styles.searchForm} ${isSearchOpen ? styles.open : ''}`}
        >
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search products"
            className={styles.searchInput}
          />
        </form>
      </div>

      <Link to="/contact" className={styles.contactLink}>
        Contact
      </Link>
    </nav>
  );
}

export default Navigation;
