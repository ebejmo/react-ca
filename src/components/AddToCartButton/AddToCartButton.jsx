import { MdOutlineAddCircleOutline } from 'react-icons/md';
import IconButton from '../IconButton/IconButton';
import styles from './AddToCartButton.module.scss';

export default function AddToCartButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      ariaLabel="Add to cart"
      className={styles.addToCartBtn}
    >
      <MdOutlineAddCircleOutline className={styles.icon} />
    </IconButton>
  );
}
