import { useCart } from '../../contexts/CartContext';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import styles from './CartView.module.scss';

export default function CartView() {
  const { cart } = useCart();
  return (
    <div className={styles.cartGrid}>
      <CartItems />
      {cart.length > 0 && <CartSummary />}
    </div>
  );
}
