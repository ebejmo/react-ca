import { IoIosClose } from 'react-icons/io';
import IconButton from '../IconButton/IconButton';
import styles from './RemoveFromCartButton.module.scss';

export default function RemoveFromCartButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      ariaLabel="Remove item"
      title="Remove item"
      className={styles.removeBtn}
    >
      <IoIosClose className={styles.icon} />
    </IconButton>
  );
}
