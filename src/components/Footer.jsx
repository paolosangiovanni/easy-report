import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Footer() {
  return (
    <footer className="easy-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>EASY Report 📄</h3>
          <p>La tua piattaforma per la sostenibilità.</p>
        </div>
        <div className="footer-links">
          <h4>Collegamenti Utili</h4>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>🏠Home</Link></li>
            <li><Link to="/Enviroment" onClick={scrollToTop}>🌿 Environment</Link></li>
            <li><Link to="/Social" onClick={scrollToTop}>👥 Social</Link></li>
            <li><Link to="/Governance" onClick={scrollToTop}>🏛️ Governance</Link></li>
            <li><Link to="/DownloadReport" onClick={scrollToTop}>📥 Scarica il Report di Sostenibilità</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contatti</h4>
          <p>📧 paolo.sangiovanni@studenti.unipegaso.it</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Easy Report. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

export default Footer;
