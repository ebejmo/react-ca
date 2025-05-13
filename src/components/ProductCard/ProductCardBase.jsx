import { StarFilled, StarOutLine } from '../Icons';
import styles from './ProductCard.module.scss';

export function ProductImage({ image, rating, reviews }) {
  return (
    <div className={styles.imgWrapper}>
      <img src={image.url} alt={image.alt || ''} className={styles.image} />
      <RatingOverlay rating={rating} count={reviews.length} />
    </div>
  );
}

export function RatingOverlay({ rating, count }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={styles.overlay}>
      {stars.map((n) =>
        n <= rating ? (
          <StarFilled key={n} className={styles.star} />
        ) : (
          <StarOutLine key={n} className={styles.star} />
        )
      )}
      <span className={styles.ratingCount}>{count}</span>
    </div>
  );
}

export function ProductInfo({ title, price, discountedPrice, children }) {
  return (
    <div className={styles.body}>
      <p className={styles.title}>{title}</p>
      <PriceSection price={price} discountedPrice={discountedPrice} />
      {children}
    </div>
  );
}

function PriceSection({ price, discountedPrice }) {
  const discountPercent =
    price > discountedPrice
      ? Math.round((1 - discountedPrice / price) * 100)
      : 0;

  return (
    <div className={styles.priceSection}>
      <span className={styles.pricingDiscount}>
        ${discountedPrice.toFixed(2)}
      </span>
      {discountPercent > 0 && (
        <div className={styles.priceDetails}>
          <span className={styles.pricingOriginal}>${price.toFixed(2)}</span>
          <span className={styles.discountBadge}>-{discountPercent}%</span>
        </div>
      )}
    </div>
  );
}

export default function ProductCardBase({ product, children }) {
  const { title, price, discountedPrice, image, rating, reviews } = product;

  return (
    <div className={styles.cardBase}>
      <ProductImage image={image} rating={rating} reviews={reviews} />
      <ProductInfo
        title={title}
        price={price}
        discountedPrice={discountedPrice}
      >
        {children}
      </ProductInfo>
    </div>
  );
}
