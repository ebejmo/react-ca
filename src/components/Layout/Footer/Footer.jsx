import { Link } from 'react-router-dom';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import styles from './Footer.module.scss';
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon';
import Logo from '../../Logo/Logo';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerActions}>
        <GithubIcon className={styles.icon} />
        <LinkedinIcon />
      </div>
      <div className={styles.footerBottom}>
        <Link to="/" className={styles.logo}>
          <Logo variant="footer" />
        </Link>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} SlapShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
