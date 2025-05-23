import { useState } from 'react';
import styles from './Expandable.module.scss';
import Button from '../../components/Button/Button';

export default function ExpandableSection({ label, children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`${styles.section} ${className || ''}`}>
      <Button
        className={styles.toggle}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.labelWrapper}>
          <span className={styles.label}>{label}</span>
          <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
        </div>
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
