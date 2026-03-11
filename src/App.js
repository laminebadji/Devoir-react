import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/contact'; 
import './App.css';

function App() {
  return (
    <Router>
      
      <div className="min-h-screen bg-[#0a192f] text-slate-300 flex flex-col font-sans">
        
        
        <Navbar />

        
        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        
        <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-800">
          <p>© 2026 - Conçu par Mamadou Lamine</p>
        </footer>
        
      </div>
    </Router>
  );
}

export default App;