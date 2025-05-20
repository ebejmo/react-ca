import Card from '../../components/Card/Card';
import RemoveFromCartButton from '../../components/RemoveFromCart/RemoveFromCartButton';
import { useCart } from '../../contexts/CartContext';
import styles from './CartItemCard.module.scss';

export default function CartItemCard({ product, quantity }) {
  const { removeFromCart } = useCart();
  const price = product.discountedPrice ?? product.price;
  const total = price * quantity;

  function handleRemoveClick() {
    removeFromCart(product.id);
  }

  return (
    <Card className={styles.cartItem}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>{product.title}</p>
          <RemoveFromCartButton onClick={handleRemoveClick} />
        </div>

        <div className={styles.row}>
          <p className={styles.rowDetails}>
            ${price.toFixed(2)} x {quantity}
          </p>
          <p className={styles.total}>${total.toFixed(2)}</p>
        </div>
      </div>
    </Card>
  );
}
