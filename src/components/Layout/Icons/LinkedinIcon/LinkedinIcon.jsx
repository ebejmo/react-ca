import { FaLinkedin } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';

export default function LinkedinIcon() {
  return (
    <IconButton
      href="www.linkedin.com/in/emil-bejmo-032854148"
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="LinkedIn"
    >
      <FaLinkedin className="icon-footer" />
    </IconButton>
  );
}
