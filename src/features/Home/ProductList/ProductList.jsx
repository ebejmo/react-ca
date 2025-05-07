import { Link } from 'react-router-dom';
// import { BASE_API_URL } from '../../../api/constants';
// import useApi from '../../../hooks/useApi';
// import PageLoader from '../../../components/PageLoader/PageLoader';

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
