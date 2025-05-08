import UserFeedback from '../../../components/UserFeedback/UserFeedback';
import ProductList from './ProductList';
import { BoxIcon } from '../../../components/Icons';

export default function ProductListWrapper({ products }) {
  if (!products || products.length === 0) {
    return (
      <UserFeedback
        message="Looks like there is no products available right now. Please try again later!"
        type="info"
        icon={<BoxIcon />}
      />
    );
  }

  return <ProductList products={products} />;
}
