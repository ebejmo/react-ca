import { useNavigate } from 'react-router-dom';
import { goHome } from '../../utils/handlers';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import { SadIcon } from '../../components/Icons';

export default function NotFoundPage() {
  const navigate = useNavigate();
  function handleGoHome() {
    goHome(navigate);
  }

  return (
    <UserFeedback
      type="error"
      message="Ooops. The page you are looking for does not exist."
      icon={<SadIcon />}
      onAction={handleGoHome}
      buttonLabel="Go to back to Homepage"
    />
  );
}
