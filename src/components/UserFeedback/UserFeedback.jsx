import styles from './UserFeedback.module.scss';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { HappyIcon, SadIcon } from '../Icons';

export default function UserFeedback({
  type = 'info',
  message,
  onAction,
  buttonLabel = 'Retry',
  icon,
}) {
  const isError = type === 'error';
  const isSuccess = type === 'success';

  let buttonVariant = 'primary';
  if (isError) buttonVariant = 'danger';
  else if (isSuccess) buttonVariant = 'success';

  const renderIcon = () => {
    if (icon) return <span className={styles.icon}>{icon}</span>;
    if (isError)
      return <SadIcon className={styles.icon} aria-label="Error" role="img" />;
    if (isSuccess)
      return (
        <HappyIcon className={styles.icon} aria-label="Success" role="img" />
      );
    return null;
  };

  return (
    <Card className={styles.feedbackCard}>
      <div className={`${styles.top} ${styles[type]}`}>{renderIcon()}</div>
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
