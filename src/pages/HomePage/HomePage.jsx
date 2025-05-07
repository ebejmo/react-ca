import SaleBanner from '../../features/Home/SaleBanner/SaleBanner';
import HeroSection from '../../features/Home/HeroSection/HeroSection';
import ProductList from '../../features/Home/ProductList/ProductList';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/constants';
import PageLoader from '../../components/PageLoader/PageLoader';

export default function HomePage() {
  const { data: products, isLoading, isError } = useApi(BASE_API_URL);

  if (isLoading) return <PageLoader />;
  if (isError) return <p>Failed to load products</p>;

  console.log('Fetched products:', products);
  return (
    <>
      <SaleBanner />
      <HeroSection />
      {products?.length ? (
        <ProductList products={products} />
      ) : (
        <div>No Products found</div>
      )}
    </>
  );
}
