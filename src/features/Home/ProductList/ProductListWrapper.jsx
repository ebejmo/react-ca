import ProductList from './ProductList';

export default function ProductListWrapper({ products }) {
  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return <ProductList products={products} />;
}
