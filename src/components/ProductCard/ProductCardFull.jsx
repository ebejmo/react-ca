import Card from '../Card/Card';
import { ProductImage, ProductInfo } from './ProductCardBase';
import styles from './ProductCard.module.scss';
import Button from '../Button/Button';
import ProductReviews from '../../features/Product/components/ProductReviews';

export default function ProductCardFull({ product }) {
  return (
    <>
      <Card className={styles.productCardFull}>
        <div className={styles.topLayout}>
          <div className={styles.imageCol}>
            <ProductImage
              image={product.image}
              rating={product.rating}
              reviews={product.reviews}
            />
          </div>
          <div className={styles.infoCol}>
            <ProductInfo
              title={product.title}
              description={product.description}
              price={product.price}
              discountedPrice={product.discountedPrice}
            >
              <div className={styles.buttonWrapper}>
                <Button variant="primary" size="small" fullWidth>
                  Add to cart
                </Button>
              </div>
            </ProductInfo>
          </div>
        </div>
      </Card>

      <ProductReviews reviews={product.reviews} />
    </>
  );
}
