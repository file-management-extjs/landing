import Icon from './Icon.jsx';
import { navItems } from '../data.js';

const appUrl = import.meta.env.VITE_APP_URL || 'http://localhost:8082';

export default function Header({ navigate }) {
  const handleNavigate = (event, to) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={(event) => handleNavigate(event, '/')}>
        <span className="brand-mark">FM</span>
        <span>File Management</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.to} href={item.to} onClick={(event) => handleNavigate(event, item.to)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-action" href={appUrl}>
        <span>Open app</span>
        <Icon name="ArrowUpRight" size={16} />
      </a>
    </header>
  );
}
