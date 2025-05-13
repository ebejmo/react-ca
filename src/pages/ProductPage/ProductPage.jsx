import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/constants';
import PageLoader from '../../components/PageLoader/PageLoader';
import ProductView from '../../features/Product/ProductView';

// skeleton loader?
export default function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useApi(`${BASE_API_URL}/${id}`);

  if (isLoading) return <PageLoader />;
  if (isError) return <div>Could not load product {id}</div>;
  if (!product || !product.id) return <div>No product found</div>;

  return <ProductView product={product} />;
}
