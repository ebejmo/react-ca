import { Link } from 'react-router-dom';
import Card from '../../../../components/Card/Card';
import styles from './ProductCard.module.scss';
import { StarFilled, StarOutLine } from '../../../../components/Icons';
import AddToCartButton from '../../../../components/AddToCartButton/AddToCartButton';

export default function ProductCard({ product }) {
  const {
    id,
    title,
    price,
    discountedPrice,
    image: { url, alt },
    rating,
    reviews,
  } = product;
  const discountPercent =
    price > discountedPrice
      ? Math.round((1 - discountedPrice / price) * 100)
      : 0;

  // function handleAddToCart() {
  //   addToCartHandler(product);
  // }

  return (
    <Card className={styles.productCard}>
      <Link to={`/product/${id}`} className={styles.link}>
        <div className={styles.imgWrapper}>
          <img src={url} alt={alt || title} className={styles.image} />
          <div className={styles.overlay}>
            {[1, 2, 3, 4, 5].map((star) =>
              star <= rating ? (
                <StarFilled
                  key={`star-filled-star-${star}`}
                  className={styles.star}
                />
              ) : (
                <StarOutLine
                  key={`star-outline-${star}`}
                  className={styles.star}
                />
              )
            )}
            <span className={styles.ratingCount}>{reviews.length}</span>
          </div>
        </div>

        <div className={styles.body}>
          <p className={styles.title}>{title}</p>

          <div className={styles.priceSection}>
            <span className={styles.pricingDiscount}>
              ${discountedPrice.toFixed(2)}
            </span>

            {discountPercent > 0 && (
              <div className={styles.priceDetails}>
                <span className={styles.pricingOriginal}>
                  ${price.toFixed(2)}
                </span>
                <span className={styles.discountBadge}>
                  -{discountPercent}%
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className={styles.actions}>
        <AddToCartButton />
      </div>
    </Card>
  );
}
