import SaleBanner from '../../features/Home/SaleBanner/SaleBanner';
import HeroSection from '../../features/Home/HeroSection/HeroSection';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/constants';
import PageLoader from '../../components/PageLoader/PageLoader';
import ProductListWrapper from '../../features/Home/ProductList/ProductListWrapper';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import { refreshPage } from '../../utils/handlers';

export default function HomePage() {
  const { data: products, isLoading, isError } = useApi(BASE_API_URL);

  if (isLoading) return <PageLoader />;
  if (isError)
    return (
      <UserFeedback
        message="Oooops. Something went wrong. Please try again."
        type="error"
        onAction={refreshPage}
        buttonLabel="Retry"
      />
    );

  console.log('Fetched products:', products);
  return (
    <>
      <SaleBanner />
      <HeroSection />
      <ProductListWrapper products={products} />
    </>
  );
}
