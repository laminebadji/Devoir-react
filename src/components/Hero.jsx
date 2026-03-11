import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'; 
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <p className="hero-greeting">Bonjour, je suis</p>
        <h2 className="hero-name">Mamadou Lamine</h2>
        
        
        <h2 className="hero-title">
          <Typewriter
            options={{
              strings: [
                'Passionné par React', 
                'Développeur Web Fullstack', 
                'Créateur d\'applications élégantes'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>

        <p className="hero-description">
          Je conçois des applications web performantes et élégantes. 
          Spécialisé dans l'écosystème React et les technologies modernes.
        </p>
        
        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">Voir mes projets</Link>
          <Link to="/contact" className="btn-secondary">Me contacter</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;