import Card from '../Card/Card';
import { ProductImage, ProductInfo } from './ProductCardBase';
import styles from './ProductCard.module.scss';
import Button from '../Button/Button';
import ExpandableSection from '../../features/Product/components/ExbandableSection';

export default function ProductCardFull({ product }) {
  return (
    <Card className={styles.productCardFull}>
      <div className={styles.imgCol}>
        <ProductImage
          image={product.image}
          rating={product.rating}
          reviews={product.reviews}
        />
      </div>

      <div className={styles.infoCol}>
        <ProductInfo
          title={product.title}
          price={product.price}
          discountedPrice={product.discountedPrice}
        >
          <Button variant="primary" size="small" fullWidth>
            Add to cart
          </Button>
        </ProductInfo>

        <ExpandableSection label="Description">
          <p>{product.description}</p>
        </ExpandableSection>

        <ExpandableSection label="Reviews">
          {product.reviews.length ? (
            <ul>
              {product.reviews.map((review) => (
                <li key={review.id}>
                  <strong>{review.username}</strong> {review.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet</p>
          )}
        </ExpandableSection>
      </div>
    </Card>
  );
}
