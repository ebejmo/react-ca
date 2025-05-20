import { Link } from 'react-router-dom';
import { RightIcon } from '../Icons';
import styles from './Breadcrumb.module.scss';

export default function Breadcrumb({ title }) {
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
