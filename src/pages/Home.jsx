import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css'; 

const Home = () => {
  return (
    <section className="home-hero">
      <div className="home-content">
        <p className="home-pretitle">Bonjour, je suis</p>
        <h2 className="home-title">Mamadou Lamine Badji</h2>
        
        <div className="home-typewriter">
          <Typewriter
            options={{
              strings: [
                'Développeur Full-Stack',
                'Passionné par React.js',
                'Créateur d’interfaces modernes',
                'Freelance & Innovateur'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </div>

        <p className="home-description">
          Je conçois des applications web performantes et élégantes. 
          Spécialisé dans l'écosystème JavaScript, j'aime donner vie à des idées complexes.
        </p>

        <div className="home-buttons">
          <a href="/projects" className="btn-primary">Voir mes projets</a>
          <a href="/contact" className="btn-secondary">Me contacter</a>
        </div>
      </div>
    </section>
  );
};

export default Home;