import { FaLinkedin } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
import styles from '../IconButton/IconButton.module.scss';

export default function LinkedinIcon() {
  return (
    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
      <IconButton ariaLabel="LinkedIn">
        <FaLinkedin className={styles.icon} />
      </IconButton>
    </a>
  );
}
