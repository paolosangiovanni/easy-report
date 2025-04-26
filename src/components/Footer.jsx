import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
            <li><a href="/">🏠Home</a></li>
            <li><a href="/Enviroment">🌿 Environment</a></li>
            <li><a href="/Social">👥 Social</a></li>
            <li><a href="/Governance">🏛️ Governance</a></li>
            <li><a href="/DownloadReport">📥 Scarica il Report di Sostenibilità</a></li>
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
