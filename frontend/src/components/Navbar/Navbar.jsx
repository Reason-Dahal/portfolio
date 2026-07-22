import { useState } from 'react';
import { site } from '@/data/site';
import './Navbar.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Main navigation">
        <a className="navbar__brand" href="#top" onClick={closeMenu}>
          {site.name}
        </a>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <ul
          className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}
          id="navbar-menu"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a className="navbar__link" href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;