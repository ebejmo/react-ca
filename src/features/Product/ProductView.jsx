import { useEffect } from 'react';
import ProductHeader from './ProductHeader';
import ProductCardFull from '../../components/ProductCard/ProductCardFull';

export default function ProductView({ product }) {
  useEffect(() => {
    document.title = `SlapShop | ${product.title}`;
  }, [product]);

  return (
    <>
      <ProductHeader title={product.title} />
      <ProductCardFull product={product} />
    </>
  );
}
