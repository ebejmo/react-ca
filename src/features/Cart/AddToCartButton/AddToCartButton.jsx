import { BiCartAdd } from 'react-icons/bi';
import IconButton from '../../../components/IconButton/IconButton';
import styles from './AddToCartButton.module.scss';

export default function AddToCartButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      ariaLabel="Add to cart"
      className={styles.addToCartBtn}
    >
      <BiCartAdd className={styles.icon} />
    </IconButton>
  );
}
