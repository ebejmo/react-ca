import { BiHappy } from 'react-icons/bi';
import IconButton from '../IconButton/IconButton';

export default function HappyIcon({ className = '' }) {
  return (
    <IconButton ariaLabel="Success icon">
      <BiHappy className={className} />
    </IconButton>
  );
}
