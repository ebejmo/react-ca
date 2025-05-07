import { PiSmileySad } from 'react-icons/pi';
import { BiHappy } from 'react-icons/bi';
import styles from './UserFeedback.module.scss';
import Card from '../Card/Card';
import Button from '../Button/Button';

export default function UserFeedback({
  type = 'info',
  message,
  onAction,
  buttonLabel = 'Retry',
}) {
  const isError = type === 'error';
  const isSuccess = type === 'success';

  let buttonVariant = 'primary';
  if (isError) buttonVariant = 'danger';
  else if (isSuccess) buttonVariant = 'success';

  return (
    <Card className={styles.feedbackCard}>
      <div className={`${styles.top} ${styles[type]}`}>
        {isError && <PiSmileySad className={styles.icon} />}
        {isSuccess && <BiHappy className={styles.icon} />}
      </div>
      <div className={styles.bottom}>
        <p>{message}</p>
        {onAction && (
          <Button
            variant={buttonVariant}
            onClick={onAction}
            size="medium"
            fullWidth
          >
            {buttonLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}
