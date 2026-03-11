const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white tracking-wider uppercase">
            Mon<span className="text-blue-500">Portfolio</span>
          </h2>
          <p className="text-sm mt-2 text-gray-400">Développeur React & Tailwind CSS</p>
        </div>

        
        <div className="flex space-x-6 text-sm">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="mailto:votre-email@gmail.com" className="hover:text-blue-400 transition">Contact</a>
        </div>

        
        <div className="mt-6 md:mt-0 text-xs text-gray-500">
          <p>© {currentYear} - Tous droits réservés.</p>
          <p>Fait avec React </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;