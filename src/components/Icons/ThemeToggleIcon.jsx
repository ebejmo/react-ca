import { LuMoon, LuSun } from 'react-icons/lu';
import IconButton from '../IconButton/IconButton';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggleIcon() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} ariaLabel="Toggle theme">
      {theme === 'dark' ? (
        <LuSun className="icon icon-header" />
      ) : (
        <LuMoon className="icon icon-header" />
      )}
    </IconButton>
  );
}
