import { BASE_API_URL } from '../../../api/constants';
import useApi from '../../../api/useApi';
import PageLoader from '../../PageLoader/PageLoader';

export default function ProductList() {
  const { data: products, isLoading, isError } = useApi(BASE_API_URL);

  if (isLoading) return <PageLoader />;
  if (isError) return <p>Failed to load products</p>;

  console.log('Fetched products:', products);

  return (
    <section id="products">
      <h2>Products</h2>
      <p>Fetched {products?.length || 0} products</p>
    </section>
  );
}
