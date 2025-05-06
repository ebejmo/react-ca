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
        <Logo variant="footer" />
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} SlapShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
