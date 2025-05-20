import { useNavigate } from 'react-router-dom';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import usePageTitle from '../../hooks/usePageTitle';
import { goHome } from '../../utils/handlers';

export default function CheckoutSuccessPage() {
  usePageTitle('Checkout');

  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb title="Checkout" />
      <UserFeedback
        type="success"
        message="Your order was successful!"
        buttonLabel="Back to shop"
        onAction={goHome(navigate)}
      />
    </>
  );
}
