import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import CartItemCard from './CartItemCard';
import Button from '../../components/Button/Button';

export default function CartItems() {
  const { cart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/">
          <Button variant="secondary" size="small">
            Back to shop
          </Button>
        </Link>
      </div>
    );
  }

  const grouped = [];

  cart.forEach((product) => {
    if (!product || !product.id) return;

    const existing = grouped.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      grouped.push({ ...product, quantity: 1 });
    }
  });

  return (
    <div>
      <h2>Your Cart</h2>
      {grouped.map((product) => (
        <CartItemCard
          key={product.id}
          product={product}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
}
