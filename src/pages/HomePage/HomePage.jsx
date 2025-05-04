import { useEffect, useState } from 'react';
import PageLoader from '../../components/PageLoader/PageLoader';

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
    <div>
      <h1>Welcome to SlapShop</h1>
    </div>
  );
}
