import { Link } from 'react-router-dom';

export default function ProductList({ products = [] }) {
  return (
    <section id="products">
      <h2>Products</h2>
      <p>Fetched {products?.length || 0} products</p>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <Link to={`/product/${product.id}`}>View product</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
