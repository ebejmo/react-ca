import ProductCard from './ProductCard/ProductCard';
import styles from './ProductList.module.scss';

export default function ProductList({ products = [] }) {
  return (
    <>
      <h2>Noroff Shop</h2>
      <p>All products</p>
      <section id="products" className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </>
  );
}
