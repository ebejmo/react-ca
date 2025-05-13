import { Link } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { RightIcon } from '../../components/Icons';

export default function ProductHeader({ title }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link to="/" className="navigation-link">
        Home
      </Link>
      <RightIcon className={styles.separator} />
      <span>{title}</span>
    </nav>
  );
}
