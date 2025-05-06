import { LuMoon } from 'react-icons/lu';
import IconButton from '../IconButton/IconButton';

export default function ThemeToggleIcon() {
  function handleThemeToggle() {}

  return (
    <IconButton onClick={handleThemeToggle} ariaLabel="Toggle theme">
      <LuMoon className="icon" />
    </IconButton>
  );
}
