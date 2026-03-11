import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo-container">
        <Link to="/" className="logo">
          ML<span>.Portfolio</span>
        </Link>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">À propos</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-item">Projets</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;