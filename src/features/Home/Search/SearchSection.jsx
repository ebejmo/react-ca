import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../components/Icons';

export default function SearchSection({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  if (!products) return null;

  function toggleSearch() {
    setIsOpen((prev) => !prev);
    setSearchValue('');
  }

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  const filteredResults = products.filter((p) =>
    p.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const shouldShowResults = isOpen && searchValue;

  return (
    <section className={styles.searchWrapper}>
      <div className={styles.menuRow}>
        <SearchIcon onClick={toggleSearch} />
        <SearchInput
          isOpen={isOpen}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <SearchResults results={filteredResults} isVisible={shouldShowResults} />
    </section>
  );
}
