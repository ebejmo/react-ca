import { useState } from 'react';
import styles from './Exbandable.module.scss';
import Button from '../../../components/Button/Button';

export default function ExpandableSection({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={styles.section}>
      <Button
        className={styles.toggle}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
      </Button>

      <div
        className={`${styles.content} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}
