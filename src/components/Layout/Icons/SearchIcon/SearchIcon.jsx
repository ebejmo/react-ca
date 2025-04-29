import { LuSearch } from 'react-icons/lu';
import IconButton from '../IconButton/IconButton';
import styles from '../IconButton/IconButton.module.scss';

export default function SearchIcon({ onClick }) {
  return (
    <IconButton onClick={onClick} ariaLabel="Open search">
      <LuSearch className={styles.icon} />
    </IconButton>
  );
}
