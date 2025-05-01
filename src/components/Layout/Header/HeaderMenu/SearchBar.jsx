import { useState } from 'react';
import styles from './HeaderMenu.module.scss';

function SearchBar({ isOpen }) {
  const [searchValue, setSearchValue] = useState('');

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log('Search:', searchValue);
  }

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`${styles.searchForm} ${isOpen ? styles.open : ''}`}
    >
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search products"
        className={styles.searchInput}
      />
    </form>
  );
}

export default SearchBar;
