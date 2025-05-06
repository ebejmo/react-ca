import { LuSearch } from 'react-icons/lu';
import IconButton from '../IconButton/IconButton';

export default function SearchIcon({ onClick }) {
  return (
    <IconButton onClick={onClick} ariaLabel="Open search" disableHover>
      <LuSearch className="icon" />
    </IconButton>
  );
}
