import ExpandableSection from './ExpandableSection';
import styles from '../../components/ProductCard/ProductCard.module.scss';

export default function ProductReviews({ reviews }) {
  return (
    <ExpandableSection label="Reviews" className={styles.reviews}>
      {reviews.length ? (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id}>
              <span className={styles.reviewName}>{review.username}</span>{' '}
              {review.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </ExpandableSection>
  );
}
