import React, { useState } from 'react';
import './pagecontent.css';
import './SocialIntro.css';
import { Link } from 'react-router-dom';

function SocialIntro() {
  const [activeAreaModal, setActiveAreaModal] = useState(null);
  const [activeInitiativeModal, setActiveInitiativeModal] = useState(null);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="social-intro-content">
          <h2>👥 Impegno Sociale di ENAV</h2>
          <div className="social-intro-description">
            <p>
              Le <strong>persone</strong> sono il cuore pulsante del <strong>Gruppo ENAV</strong> 💙. Attraverso l’impegno e la dedizione dei propri dipendenti, ENAV assicura la qualità dei servizi di trasporto aereo, promuovendo un ambiente di lavoro <strong>inclusivo</strong> e <strong>collaborativo</strong>. Ogni individuo è valorizzato, rispettato e coinvolto.
            </p>
            <h3>Cultura di Sostenibilità 📚</h3>
            <p>
              La <strong>cultura della sostenibilità</strong> in ENAV si basa su tre azioni chiave:
            </p>
            <ul>
              <li><strong>Motivazione 🔥</strong> - <em>Inspire</em>: ENAV motiva le persone al cambiamento grazie agli <strong>Ambassador della sostenibilità</strong>.</li>
              <li><strong>Capacità 🎓</strong> - <em>Inform</em>: Fornisce strumenti e formazione per informare e sensibilizzare il personale.</li>
              <li><strong>Azione 🚀</strong> - <em>Engage</em>: Supporta le persone in attività di <strong>engagement</strong> accessibili a tutti.</li>
            </ul>
            <p>
              ENAV pone le <strong>persone al centro</strong> della propria strategia. L'azienda si impegna a valorizzare le competenze individuali e a garantire pari opportunità per tutti i dipendenti.
            </p>
            <p>
              Le principali aree di intervento sociale includono:
            </p>

            <div className="social-areas-canva">
              <div className="social-areas-container">
                <div className="social-areas-inner">
                  <div className="social-area-card area1" onClick={() => setActiveAreaModal('diversity')}>
                    <span className="area-icon">🌈</span>
                    <p>Diversità e Inclusione</p>
                    <button className={`modal-btn ${activeAreaModal === 'diversity' ? 'open' : ''}`}>&#43;</button>
                  </div>
                  <div className="social-area-card area2" onClick={() => setActiveAreaModal('safety')}>
                    <span className="area-icon">🩹</span>
                    <p>Salute e Sicurezza</p>
                    <button className={`modal-btn ${activeAreaModal === 'safety' ? 'open' : ''}`}>&#43;</button>
                  </div>
                  <div className="social-area-card area3" onClick={() => setActiveAreaModal('wealth')}>
                    <span className="area-icon">👨‍👩‍👧‍👦</span>
                    <p>Benessere dei dipendenti</p>
                    <button className={`modal-btn ${activeAreaModal === 'wealth' ? 'open' : ''}`}>&#43;</button>
                  </div>
                  <div className="social-area-card area4" onClick={() => setActiveAreaModal('relations')}>
                    <span className="area-icon">🏘️</span>
                    <p>Relazioni Comunitarie</p>
                    <button className={`modal-btn ${activeAreaModal === 'relations' ? 'open' : ''}`}>&#43;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modale Macroaree */}
          {activeAreaModal && (
            <div className="modal-overlay" onClick={() => setActiveAreaModal(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setActiveAreaModal(null)}>×</button>
                <h3>
                  {activeAreaModal === 'diversity' && '🌈 Diversità e Inclusione'}
                  {activeAreaModal === 'safety' && '🩹 Salute e Sicurezza'}
                  {activeAreaModal === 'wealth' && '👨‍👩‍👧‍👦 Benessere dei dipendenti'}
                  {activeAreaModal === 'relations' && '🏘️ Relazioni Comunitarie'}
                </h3>
                <p>
                  {activeAreaModal === 'diversity' && 'ENAV promuove un ambiente inclusivo attraverso politiche di diversità e pari opportunità, valorizzando le differenze individuali come risorsa per l’innovazione e la crescita.'}
                  {activeAreaModal === 'safety' && 'La salute e la sicurezza sul lavoro sono priorità per ENAV, che adotta misure preventive e promuove una cultura della sicurezza tra tutti i collaboratori.'}
                  {activeAreaModal === 'wealth' && 'Il Gruppo ENAV è fermamente convinto che il benessere delle proprie persone sia essenziale per la loro soddisfazione e il loro successo, e per questo ha implementato politiche di welfare aziendale finalizzate a migliorare la qualità della vita sul lavoro.'}
                  {activeAreaModal === 'relations' && 'ENAV promuove attivamente il dialogo e la collaborazione con le comunità locali, sostenendo iniziative sociali, culturali ed educative. Attraverso partnership con scuole, università e istituzioni, il Gruppo contribuisce alla crescita dei territori in cui opera, favorendo l’inclusione sociale e la diffusione della cultura aeronautica.'}
                </p>
              </div>
            </div>
          )}

          <h3>Iniziative per il Coinvolgimento 🎯</h3>
          <div className="social-initiatives-grid">
            <div className="social-initiative-card" onClick={() => setActiveInitiativeModal('ambassador')}>
              <span role="img" aria-label="ambassador">🧑‍🤝‍🧑</span>
              <h4>Ambassador della sostenibilità</h4>
              <button className={`modal-btn ${activeAreaModal === 'ambassador' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="social-initiative-card" onClick={() => setActiveInitiativeModal('intranet')}>
              <span role="img" aria-label="intranet">💻</span>
              <h4>Portale Sustainability</h4>
              <button className={`modal-btn ${activeAreaModal === 'intranet' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="social-initiative-card" onClick={() => setActiveInitiativeModal('podcast')}>
              <span role="img" aria-label="podcast">🎙️</span>
              <h4>Podcast Storie In-sostenibili</h4>
              <button className={`modal-btn ${activeAreaModal === 'podcast' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {/* Modale Iniziative */}
          {activeInitiativeModal && (
            <div className="modal-overlay" onClick={() => setActiveInitiativeModal(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setActiveInitiativeModal(null)}>×</button>
                {activeInitiativeModal === 'ambassador' && (
                  <>
                    <h3>🧑‍🤝‍🧑 Ambassador della sostenibilità</h3>
                    <p>Oltre <strong>60 persone</strong> provenienti da tutte le sedi ENAV sono state coinvolte come <strong>Ambassador della sostenibilità</strong> 🌍, per diffondere la cultura ESG in azienda.</p>
                  </>
                )}
                {activeInitiativeModal === 'intranet' && (
                  <>
                    <h3>💻 Portale Sustainability</h3>
                    <p>Il portale <strong>Sustainability</strong> raccoglie tutte le iniziative, news e materiali ESG, con sezioni dedicate a <strong>ENAV Sustainability News</strong> e una <strong>libreria di documenti</strong> 📚.</p>
                  </>
                )}
                {activeInitiativeModal === 'podcast' && (
                  <>
                    <h3>🎙️ Podcast Storie In-sostenibili</h3>
                    <p>Una serie di <strong>10 puntate</strong> che raccontano storie ESG, evidenziando l’impegno delle persone ENAV su temi ambientali e sociali.</p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Sezione link a Diversità e Inclusione */}
          <div className="next-section">
            <p>Per approfondire l’impegno di ENAV in ambito sociale, scopri la sezione dedicata alla <strong>Diversità e Inclusione</strong> 🌈.</p>
            <Link to="/Social/Diversita&Inclusione" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialIntro;