import { FiPackage } from 'react-icons/fi';

export default function BoxIcon({
  className,
  ariaLabel = 'No products',
  role = 'img',
}) {
  return <FiPackage className={className} aria-label={ariaLabel} role={role} />;
}
