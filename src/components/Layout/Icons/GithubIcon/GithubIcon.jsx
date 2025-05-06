import { FaGithub } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';

export default function GithubIcon() {
  return (
    <IconButton
      href="https://github.com/ebejmo"
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="GitHub"
    >
      <FaGithub className="icon-footer" />
    </IconButton>
  );
}
