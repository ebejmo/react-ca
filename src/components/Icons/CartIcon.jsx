import { LuShoppingCart } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import IconButton from '../IconButton/IconButton';
import styles from './CartIcon.module.scss';

export default function CartIcon() {
  const navigate = useNavigate();
  const { cart } = useCart();
  console.log('Cart contents:', cart);
  const cartCount = cart.length;

  function handleClick() {
    navigate('/cart');
  }

  return (
    <IconButton onClick={handleClick} ariaLabel="View cart">
      <LuShoppingCart className="icon" />
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
    </IconButton>
  );
}
