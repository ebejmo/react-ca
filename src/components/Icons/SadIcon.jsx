import { PiSmileySad } from 'react-icons/pi';
import IconButton from '../IconButton/IconButton';

export default function SadIcon({ className = '' }) {
  return (
    <IconButton ariaLabel="Error icon">
      <PiSmileySad className={className} />
    </IconButton>
  );
}
