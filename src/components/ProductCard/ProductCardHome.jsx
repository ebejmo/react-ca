import { Link } from 'react-router-dom';
import ProductCardBase from './ProductCardBase';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import CartFeedback from '../CartFeedback/CartFeedback';
import Card from '../Card/Card';
import styles from './ProductCard.module.scss';
import useCartFeedback from '../../hooks/useCartFeedback';

export default function ProductCardHome({ product }) {
  const { showFeedback, handleAddToCart, handleHideFeedback } =
    useCartFeedback(product);

  return (
    <>
      <CartFeedback show={showFeedback} onHide={handleHideFeedback} />

      <Card className={styles.productCard}>
        <Link to={`/product/${product.id}`} className={styles.linkArea}>
          <ProductCardBase product={product} />
        </Link>
        <div className={styles.actions}>
          <AddToCartButton onClick={handleAddToCart} />
        </div>
      </Card>
    </>
  );
}
