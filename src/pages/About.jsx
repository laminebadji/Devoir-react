import React from 'react';
import './About.css';
import { FaReact, FaJs, FaCss3Alt, FaNodeJs } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
  <h2>01. À propos de moi</h2>
  <p>Je suis <strong>Mamadou Lamine</strong>...</p>

  <h3>Technologies que j'utilise :</h3>
  
  <div className="tech-container">
    <div className="tech-card">
      <FaReact size={40} color="#61DBFB" />
      <p>React</p>
    </div>
    <div className="tech-card">
      <FaJs size={40} color="#F7DF1E" />
      <p>JavaScript</p>
    </div>
    <div className="tech-card">
      <FaNodeJs size={40} color="#68A063" />
      <p>Node.js</p>
    </div>
    <div className="tech-card">
      <FaCss3Alt size={40} color="#264de4" />
      <p>CSS3</p>
    </div>
  </div>
</section>
  );
};
 export default About;
