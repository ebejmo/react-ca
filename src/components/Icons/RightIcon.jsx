import { FaChevronRight } from 'react-icons/fa';

export default function RightIcon({
  className,
  ariaLabel = '',
  role = 'presentation',
}) {
  return (
    <FaChevronRight
      className={className}
      aria-label={ariaLabel}
      role={role}
      focusable="false"
    />
  );
}
