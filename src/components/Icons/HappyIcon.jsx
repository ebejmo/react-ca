import { BiHappy } from 'react-icons/bi';

export default function HappyIcon({
  className = '',
  ariaLabel = 'Success icon',
  role = 'img',
}) {
  return <BiHappy className={className} ariaLabel={ariaLabel} role={role} />;
}
