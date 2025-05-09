import { IoIosStarOutline } from 'react-icons/io';

export default function StarOutline({
  className,
  ariaLabel = 'Star outline',
  role = 'img',
}) {
  return (
    <IoIosStarOutline
      className={className}
      aria-label={ariaLabel}
      role={role}
    />
  );
}
