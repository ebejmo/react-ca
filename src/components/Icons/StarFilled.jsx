import { IoIosStar } from 'react-icons/io';

export default function StarFilled({
  className,
  ariaLabel = 'Star filled',
  role = 'img',
}) {
  return <IoIosStar className={className} aria-label={ariaLabel} role={role} />;
}
