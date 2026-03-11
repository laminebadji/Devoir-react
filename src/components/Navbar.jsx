import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#041e42] text-white py-4 px-8 flex justify-between items-center shadow-2xl sticky top-0 z-50">
      
      <div className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform cursor-pointer">
        <Link to="/" className="text-white no-underline">
          ML<span className="text-[#64ffda]">.Portfolio</span>
        </Link>
      </div>

    
      <ul className="flex gap-8 items-center list-none m-0 p-0">
        <li>
          <Link to="/" className="text-white no-underline hover:text-[#64ffda] transition-colors font-medium">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white no-underline hover:text-[#64ffda] transition-colors font-medium">
            À propos
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-white hover:text-[#64ffda] transition">
            Projets
          </Link>
        </li>
        <li>
          <Link to="/contact" className="bg-[#64ffda] text-[#041e42] px-4 py-2 rounded-md font-bold hover:bg-white transition-all no-underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;