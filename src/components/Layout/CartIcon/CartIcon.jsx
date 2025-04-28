import { LuShoppingCart } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import styles from './CartIcon.module.scss';

export default function CartIcon({ cartCount = 0 }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={styles.cartButton}
      onClick={() => navigate('/cart')}
      aria-label="View cart"
    >
      <LuShoppingCart className={styles.icon} />
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
    </button>
  );
}
