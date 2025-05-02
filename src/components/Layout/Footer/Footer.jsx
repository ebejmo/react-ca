import { Link } from 'react-router-dom';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import styles from './Footer.module.scss';
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerActions}>
        <GithubIcon className={styles.icon} />
        <LinkedinIcon />
      </div>
      <div className={styles.footerBottom}>
        <Link to="/" className={styles.logo}>
          SlapShop
        </Link>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} SlapShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
