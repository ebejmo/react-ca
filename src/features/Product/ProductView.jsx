import ProductCardFull from '../../components/ProductCard/ProductCardFull';
import usePageTitle from '../../hooks/usePageTitle';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

export default function ProductView({ product }) {
  usePageTitle(product.title);

  return (
    <>
      <Breadcrumb title={product.title} />
      <ProductCardFull product={product} />
    </>
  );
}
