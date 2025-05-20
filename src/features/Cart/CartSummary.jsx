import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import Button from '../../components/Button/Button';
import styles from './CartSummary.module.scss';
import PageLoader from '../../components/PageLoader/PageLoader';

export default function CartSummary() {
  const { cart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

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

  function handleCheckout() {
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate('/checkout-success');
    }, 1500);
  }

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
        <Button variant="primary" size="small" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button variant="secondary" size="small" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>

      {isProcessing && <PageLoader />}
    </div>
  );
}
