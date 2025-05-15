import styles from './Search.module.scss';

export default function SearchInput({ isOpen, value, onChange }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className={`${styles.searchForm} ${isOpen ? styles.open : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search products"
        className={styles.searchInput}
      />
    </form>
  );
}
