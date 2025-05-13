// import { useMemo } from 'react';
// import { Link } from 'react-router-dom';
// import Card from '../Card/Card';
// import styles from './ProductCard.module.scss';
// import { StarFilled, StarOutLine } from '../Icons';
// import AddToCartButton from '../AddToCartButton/AddToCartButton';

// function RatingOverlay({ rating, count }) {
//   const stars = [1, 2, 3, 4, 5];
//   return (
//     <div className={styles.overlay}>
//       {stars.map((n) =>
//         n <= rating ? (
//           <StarFilled key={n} className={styles.star} />
//         ) : (
//           <StarOutLine key={n} className={styles.star} />
//         )
//       )}
//       <span className={styles.ratingCount}>{count}</span>
//     </div>
//   );
// }

// function PriceSection({ price, discountedPrice }) {
//   const discountPercent = useMemo(() => {
//     return price > discountedPrice
//       ? Math.round((1 - discountedPrice / price) * 100)
//       : 0;
//   }, [price, discountedPrice]);

//   return (
//     <div className={styles.priceSection}>
//       <span className={styles.pricingDiscount}>
//         ${discountedPrice.toFixed(2)}
//       </span>
//       {discountPercent > 0 && (
//         <div className={styles.priceDetails}>
//           <span className={styles.pricingOriginal}>${price.toFixed(2)}</span>
//           <span className={styles.discountBadge}>-{discountPercent}%</span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function ProductCard({ product }) {
//   const {
//     id,
//     title,
//     price,
//     discountedPrice,
//     image: { url, alt },
//     rating,
//     reviews,
//   } = product;

//   // function handleAddToCart() {
//   //   addToCartHandler(product);
//   // }

//   return (
//     <Card className={styles.productCard}>
//       <div className={styles.content}>
//         <Link to={`/product/${id}`} className={styles.linkArea}>
//           <div className={styles.imgWrapper}>
//             <img src={url} alt={alt || title} className={styles.image} />
//             <RatingOverlay rating={rating} count={reviews.length} />
//           </div>

//           <div className={styles.body}>
//             <p className={styles.title}>{title}</p>

//             <PriceSection price={price} discountedPrice={discountedPrice} />
//           </div>
//         </Link>

//         <div className={styles.actions}>
//           <AddToCartButton />
//         </div>
//       </div>
//     </Card>
//   );
// }
