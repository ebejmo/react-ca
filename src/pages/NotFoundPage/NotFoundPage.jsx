import { useNavigate } from 'react-router-dom';
import { goHome } from '../../utils/handlers';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import { SadIcon } from '../../components/Icons';
import usePageTitle from '../../hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Not found');
  const navigate = useNavigate();

  return (
    <UserFeedback
      type="error"
      message="Ooops. The page you are looking for does not exist."
      icon={<SadIcon className="icon" />}
      onAction={goHome(navigate)}
      buttonLabel="Go to back to Homepage"
    />
  );
}
