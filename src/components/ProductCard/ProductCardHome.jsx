import { Link } from 'react-router-dom';
import ProductCardBase from './ProductCardBase';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import Card from '../Card/Card';
import styles from './ProductCard.module.scss';

export default function ProductCardHome({ product }) {
  return (
    <Card className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.linkArea}>
        <ProductCardBase product={product} />
      </Link>
      <div className={styles.actions}>
        <AddToCartButton />
      </div>
    </Card>
  );
}
