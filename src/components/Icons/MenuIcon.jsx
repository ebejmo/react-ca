import { FiMenu, FiX } from 'react-icons/fi';
import IconButton from '../IconButton/IconButton';
import styles from '../IconButton/IconButton.module.scss';

export default function MenuIcon({ isOpen, onClick }) {
  return (
    <IconButton
      onClick={onClick}
      ariaLabel={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <FiX className={styles.icon} />
      ) : (
        <FiMenu className={styles.icon} />
      )}
    </IconButton>
  );
}
