import styles from './UserFeedback.module.scss';

export default function UserFeedback({
  message = 'Something went wrong.',
  type = 'info',
}) {
  return (
    <div
      className={`${styles.userFeedback} ${styles[type]}`}
      role={type === 'error' ? 'alert' : 'status'}
    >
      {message}
    </div>
  );
}
