import { Link } from 'react-router-dom';
import styles from './Search.module.scss';

export default function SearchResults({ results, isVisible }) {
  if (!isVisible) return null;

  if (results.length === 0) {
    return (
      <div className={styles.noResults}>No products matching your search.</div>
    );
  }

  return (
    <ul className={styles.resultList}>
      {results.map((item) => (
        <li key={item.id}>
          <Link to={`/product/${item.id}`} className={styles.resultItem}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
