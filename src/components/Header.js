import React, { useState } from 'react';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fs-4 fw-bold" href="#home">LesterDev</a>
          <button 
            className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
            type="button" 
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map(item => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`} 
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
