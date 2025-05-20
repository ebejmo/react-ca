import PageLoader from '../../components/PageLoader/PageLoader';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import { useCart } from '../../contexts/CartContext';
import CartView from '../../features/Cart/CartView';
import usePageTitle from '../../hooks/usePageTitle';
import { goBack } from '../../utils/handlers';

export default function CartPage() {
  usePageTitle('Cart');
  const { cart } = useCart();
  const isLoading = false;
  const isError = !cart || typeof cart.length !== 'number';

  if (isLoading) return <PageLoader />;
  if (isError)
    return (
      <UserFeedback
        type="error"
        message="Something went wrong"
        buttonLabel="Go back"
        onAction={goBack}
      />
    );
  return <CartView />;
}
