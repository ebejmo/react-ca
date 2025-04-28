import { LuMoon } from 'react-icons/lu';
import IconButton from '../IconButton/IconButton';
import styles from '../IconButton/IconButton.module.scss';

export default function ThemeToggleIcon() {
  const handleThemeToggle = () => {
    console.log('Theme toggle clicked');
  };

  return (
    <IconButton onClick={handleThemeToggle} ariaLabel="Toggle theme">
      <LuMoon className={styles.icon} />
    </IconButton>
  );
}
