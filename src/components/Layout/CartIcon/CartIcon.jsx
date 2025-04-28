import { CiShoppingCart } from 'react-icons/ci';
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
      <CiShoppingCart className={styles.icon} />
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
    </button>
  );
}
