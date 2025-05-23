import styles from './Footer.module.scss';
import Logo from '../../components/Logo/Logo';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerActions}>
        <GithubIcon className={styles.icon} />
        <LinkedinIcon />
      </div>
      <div className={styles.footerBottom}>
        <Logo variant="footer" />
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} SlapShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
