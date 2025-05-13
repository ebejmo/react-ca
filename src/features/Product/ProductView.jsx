import { useEffect } from 'react';
import ProductHeader from './ProductHeader';

export default function ProductView({ product }) {
  useEffect(() => {
    document.title = `SlapShop | ${product.title}`;
  }, [product]);

  return (
    <div>
      <ProductHeader title={product.title} />
      <h1>{product.title}</h1>
    </div>
  );
}
