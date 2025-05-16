import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

export default function useCartFeedback(product) {
  const { addToCart } = useCart();
  const [showFeedback, setShowFeedback] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setShowFeedback(true);
  }

  function handleHideFeedback() {
    setShowFeedback(false);
  }

  return {
    showFeedback,
    handleAddToCart,
    handleHideFeedback,
  };
}
