import { useEffect, useState } from 'react';
import styles from './CartFeedback.module.scss';

export default function CartFeedback({
  show,
  onHide,
  message = 'Added to cart!',
}) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (typeof onHide === 'function') {
          onHide();
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [show, onHide]);

  if (!visible) return null;

  return <div className={styles.cartFeedback}>{message}</div>;
}
