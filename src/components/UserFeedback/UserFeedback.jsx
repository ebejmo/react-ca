import styles from './UserFeedback.module.scss';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { HappyIcon, SadIcon } from '../Icons';

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
        {isError && <SadIcon className={styles.icon} />}
        {isSuccess && <HappyIcon className={styles.icon} />}
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
