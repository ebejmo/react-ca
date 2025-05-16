import { BiCartAdd } from 'react-icons/bi';
import IconButton from '../IconButton/IconButton';
import { useCart } from '../../contexts/CartContext';
import styles from './AddToCartButton.module.scss';

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <IconButton
      onClick={handleAddToCart}
      ariaLabel="Add to cart"
      className={styles.addToCartBtn}
    >
      <BiCartAdd className={styles.icon} />
    </IconButton>
  );
}
