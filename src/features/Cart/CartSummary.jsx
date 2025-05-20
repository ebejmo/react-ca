import { useCart } from '../../contexts/CartContext';
import Button from '../../components/Button/Button';
import styles from './CartSummary.module.scss';

export default function CartSummary() {
  const { cart, clearCart } = useCart();

  let total = 0;
  let totalDiscount = 0;

  cart.forEach((item) => {
    if (!item) return;

    const { price } = item;
    const discounted = item.discountedPrice ?? item.price;

    total += discounted;
    if (price > discounted) {
      totalDiscount += price - discounted;
    }
  });

  function handleClearCart() {
    clearCart();
  }

  return (
    <div className={styles.summary}>
      <p className={styles.order}>Order Summary</p>
      {totalDiscount > 0 && (
        <p className={styles.discount}>
          You saved: ${totalDiscount.toFixed(2)}
        </p>
      )}
      <p className={styles.total}>Total: ${total.toFixed(2)}</p>

      <div className={styles.actions}>
        <Button variant="primary" size="small">
          Checkout
        </Button>
        <Button variant="secondary" size="small" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
