import { LuShoppingCart } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';
import styles from './CartIcon.module.scss';

export default function CartIcon({ cartCount = 0 }) {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate('/cart')} ariaLabel="View cart">
      <LuShoppingCart className={styles.icon} />
      {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
    </IconButton>
  );
}
