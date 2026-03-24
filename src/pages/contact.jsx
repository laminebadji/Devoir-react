import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">04. Me contacter</h2>
        <p className="contact-intro">
          Je suis actuellement ouvert à de nouvelles opportunités. 
          Que vous ayez une question ou que vous vouliez simplement me saluer, 
          ma boîte de réception est ouverte !
        </p>

        <div className="contact-methods">
          
          <a href="mailto:ton-email@gmail.com" className="contact-card">
            <div className="icon"></div>
            <h3>Email</h3>
            <p>laminebadji0417@gmail.com</p>
          </a>

          
          <a href="tel:+221XXXXXXXXX" className="contact-card">
            <div className="icon"></div>
            <h3>Téléphone</h3>
            <p>+221 764182399</p>
          </a>

        
          <a href="https://wa.me/221XXXXXXXXX" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon"></div>
            <h3>WhatsApp</h3>
            <p>Discutons en direct</p>
          </a>
        </div>

        <div className="contact-button-container">
          <a href="mailto:ton-email@gmail.com" className="main-contact-btn">
            Dire Bonjour 👋
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;