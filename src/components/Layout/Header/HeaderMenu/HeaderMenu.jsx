import { Link } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

function HeaderMenu() {
  return (
    <div className={styles.menuRow}>
      <nav className={styles.links}>
        <Link to="/contact" className="navigation-link nav-header">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default HeaderMenu;
