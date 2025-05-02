import { FaGithub } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
import styles from '../IconButton/IconButton.module.scss';

export default function GithubIcon() {
  return (
    <a
      href="https://github.com/ebejmo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton ariaLabel="GitHub">
        <FaGithub className={styles.icon} />
      </IconButton>
    </a>
  );
}
