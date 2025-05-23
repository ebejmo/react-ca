import { PiSmileySad } from 'react-icons/pi';

export default function SadIcon({
  className,
  ariaLabel = 'Error icon',
  role = 'img',
}) {
  return (
    <PiSmileySad className={className} aria-label={ariaLabel} role={role} />
  );
}
