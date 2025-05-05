import { useEffect, useState } from 'react';
import PageLoader from '../../components/PageLoader/PageLoader';
import SaleBanner from '../../components/Home/SaleBanner/SaleBanner';
import HeroSection from '../../components/Home/HeroSection/HeroSection';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <SaleBanner />
      <HeroSection />
    </>
  );
}
