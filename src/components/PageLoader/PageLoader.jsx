import Spinner from '../Spinner/Spinner';
import styles from './PageLoader.module.scss';

export default function PageLoader() {
  return (
    <div className={styles.pageLoader}>
      <Spinner className="large" />
    </div>
  );
}
