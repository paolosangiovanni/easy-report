import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './SaluteeSicurezza.css';

function SaluteeSicurezza() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (topic) => {
    setActiveModal(activeModal === topic ? null : topic);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="salute-content">
          <h2>🩹 Salute e Sicurezza nei Luoghi di Lavoro</h2>
          <div className="salute-description">
            <p>
              Il <strong>Gruppo ENAV</strong> considera la <strong>salute</strong> e la <strong>sicurezza</strong> dei propri dipendenti una priorità assoluta. L'azienda adotta un approccio proattivo, volto a garantire non solo la conformità alle normative vigenti (come la <strong>ISO 45001:2018</strong> e il <strong>D.Lgs. 81/2008</strong>), ma anche a promuovere una cultura della <strong>prevenzione</strong> e del <strong>benessere</strong> diffusa in tutte le sue sedi operative.
            </p>
            <p>
              Ogni anno, ENAV conduce <strong>valutazioni dei rischi</strong>, organizza <strong>audit interni</strong> e monitora l'efficacia delle misure di sicurezza. Il personale partecipa a <strong>percorsi formativi</strong> in presenza e online, assicurando aggiornamento continuo.
            </p>
            <p>
              Particolare attenzione è rivolta ai <strong>fattori psicosociali</strong>, con <strong>indagini di clima organizzativo</strong> e iniziative di <strong>benessere mentale</strong>, promuovendo un ambiente sereno e inclusivo.
            </p>
          </div>

          <h3>Iniziative di Sicurezza 🚨</h3>
          <div className="salute-initiatives-grid">
            {['sistemi', 'formazione', 'emergenze', 'wellbeing'].map(topic => (
              <div key={topic} className="salute-initiative-card" onClick={() => toggleModal(topic)}>
                <span>{topic === 'sistemi' ? '🛡️' : topic === 'formazione' ? '🎓' : topic === 'emergenze' ? '🚒' : '🧠'}</span>
                <h4>{topic === 'sistemi' ? 'Sistemi di Gestione Sicurezza' : topic === 'formazione' ? 'Formazione e-learning' : topic === 'emergenze' ? 'Piano di Emergenza' : 'Benessere e Fattori Psicosociali'}</h4>
                <button className={`salute-modal-btn ${activeModal === topic ? 'open' : ''}`}>&#43;</button>
              </div>
            ))}
          </div>

          <h3>Iniziative per la Salute 🏥</h3>
          <div className="salute-initiatives-grid">
            {['prevenzione', 'wellness'].map(topic => (
              <div key={topic} className="salute-initiative-card" onClick={() => toggleModal(topic)}>
                <span>{topic === 'prevenzione' ? '🩺' : '💪'}</span>
                <h4>{topic === 'prevenzione' ? 'Prevenzione e Screening' : 'Programmi di Wellness'}</h4>
                <button className={`salute-modal-btn ${activeModal === topic ? 'open' : ''}`}>&#43;</button>
              </div>
            ))}
          </div>

          {activeModal && (
            <div className="salute-modal-overlay" onClick={() => setActiveModal(null)}>
              <div className="salute-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="salute-modal-close" onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'sistemi' && (
                  <>
                    <h3>🛡️ Sistemi di Gestione Sicurezza</h3>
                    <p>ENAV ha implementato un <strong>Sistema di Gestione Salute e Sicurezza</strong> certificato ISO 45001:2018 per tutelare il benessere fisico e psicologico di tutti i dipendenti. Questo sistema prevede il monitoraggio continuo dei rischi, audit periodici e il coinvolgimento attivo di tutte le figure aziendali nella promozione di pratiche sicure e responsabili.</p>
                  </>
                )}
                {activeModal === 'formazione' && (
                  <>
                    <h3>🎓 Formazione e-learning</h3>
                    <p>ENAV offre <strong>percorsi formativi</strong> obbligatori e facoltativi in modalità blended (aula ed e-learning), su temi quali la gestione dei rischi, sicurezza in viaggio, utilizzo dei dispositivi di protezione individuale (DPI), piattaforme elevabili e prevenzione incendi. Nel 2023 sono state erogate <strong>oltre 3.500 ore di formazione</strong> sulla sicurezza.</p>
                  </>
                )}
                {activeModal === 'emergenze' && (
                  <>
                    <h3>🚒 Piano di Emergenza</h3>
                    <p>Il <strong>Piano di Emergenza</strong> di ENAV include misure preventive e reattive per la gestione di situazioni critiche, come incendi o evacuazioni. Il piano viene aggiornato periodicamente e prevede <strong>esercitazioni pratiche</strong> per tutto il personale, garantendo prontezza e consapevolezza nelle procedure da seguire in caso di emergenza.</p>
                  </>
                )}
                {activeModal === 'wellbeing' && (
                  <>
                    <h3>🧠 Benessere e Fattori Psicosociali</h3>
                    <p>ENAV dedica attenzione al <strong>benessere psicologico</strong> dei dipendenti attraverso <strong>valutazioni specifiche</strong> sui fattori di stress lavoro-correlato, workshop e percorsi di supporto psicologico. L’obiettivo è prevenire disagi, promuovere un clima lavorativo positivo e migliorare la qualità della vita sul lavoro.</p>
                  </>
                )}
                {activeModal === 'prevenzione' && (
                  <>
                    <h3>🩺 Prevenzione e Screening</h3>
                    <p>ENAV organizza <strong>screening sanitari periodici</strong> per il monitoraggio dello stato di salute dei dipendenti, con particolare attenzione alla prevenzione di malattie croniche e ai rischi emergenti. Le campagne comprendono controlli cardiologici, oculistici, e altre visite specialistiche.</p>
                  </>
                )}
                {activeModal === 'wellness' && (
                  <>
                    <h3>💪 Programmi di Wellness</h3>
                    <p>Attraverso i <strong>Programmi di Wellness</strong>, ENAV promuove uno stile di vita sano per i dipendenti, offrendo attività di fitness, yoga, corsi di rilassamento, gestione dello stress e workshop sul benessere psicofisico. L'obiettivo è favorire l'equilibrio tra vita lavorativa e personale.</p>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="salute-next-section">
            <p>Per esplorare altre aree di impegno, visita la sezione <strong>Benessere dei Dipendenti</strong> 👨‍👩‍👧‍👦.</p>
            <Link to="/Social/BenessereDeiDipendenti" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaluteeSicurezza;
