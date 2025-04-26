import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './pagecontent.css';
import './EticaeConformita.css';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

function EticaeConformita() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="etica-content">
          <h2>⚖️ Etica e Conformità</h2>

          <div className="etica-description">
            <p>
              Il <strong>Gruppo ENAV</strong> fonda la propria attività su principi di <strong>integrità</strong>, <strong>legalità</strong> e <strong>trasparenza</strong>, elementi cardine che regolano il comportamento dell'organizzazione e dei suoi stakeholder. Attraverso un solido sistema di <strong>etica e compliance</strong>, ENAV promuove una cultura aziendale che previene il rischio di comportamenti illeciti, assicurando il rispetto di normative e regolamenti in ogni ambito operativo.
            </p>
            <p>
              Il <strong>Codice Etico</strong> rappresenta il punto di riferimento per la definizione di standard comportamentali, estendendosi a tutti i dipendenti, collaboratori, fornitori e partner commerciali. Tale documento guida le decisioni e le azioni quotidiane, garantendo la coerenza con i valori aziendali.
            </p>
          </div>

          <h3>📚 Codice Etico di ENAV</h3>
          <p>
            Il <strong>Codice Etico</strong> di ENAV contiene i principi fondamentali di <strong>onestà</strong>, <strong>trasparenza</strong>, <strong>legalità</strong> e <strong>responsabilità</strong>. Viene aggiornato periodicamente per recepire le novità normative e per allinearsi ai migliori standard internazionali. La sua applicazione è garantita da un sistema di segnalazioni (whistleblowing) che permette ai dipendenti e agli stakeholder di riportare eventuali violazioni.
          </p>
          <div className="etica-principles">
            <div className="etica-card">
              <h4>🛡️ Integrità</h4>
              <p>Ogni attività è svolta nel pieno rispetto delle leggi, dei regolamenti e dei principi etici adottati dall'azienda.</p>
            </div>
            <div className="etica-card">
              <h4>🔍 Trasparenza</h4>
              <p>ENAV si impegna a garantire una comunicazione chiara, completa e tempestiva verso tutti gli stakeholder.</p>
            </div>
            <div className="etica-card">
              <h4>⚖️ Legalità</h4>
              <p>Il rispetto delle normative vigenti è un pilastro imprescindibile dell'attività aziendale di ENAV, in ogni contesto operativo.</p>
            </div>
          </div>

          <h3>🚨 Sistema di Segnalazione (Whistleblowing)</h3>
          <p>
            ENAV ha implementato un sistema di <strong>whistleblowing</strong> in linea con le migliori pratiche internazionali, che consente di segnalare in modo anonimo eventuali violazioni del <strong>Codice Etico</strong>, delle normative vigenti o delle procedure aziendali. Le segnalazioni vengono gestite con <strong>riservatezza</strong> e <strong>tutela dell'anonimato</strong> dei segnalanti.
          </p>
          <div className="etica-modals">
            <div className="etica-modal-card" onClick={() => setActiveModal('whistleblowing')}>
              <h4>📢 Come funziona il Whistleblowing</h4>
              <button className={`etica-modal-btn ${activeModal === 'whistleblowing' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal === 'whistleblowing' && (
            <div className="etica-modal-overlay" onClick={() => setActiveModal(null)}>
              <div className="etica-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="etica-modal-close" onClick={() => setActiveModal(null)}>×</button>
                <h3>📢 Sistema di Whistleblowing</h3>
                <p>Il sistema di segnalazione di ENAV garantisce un canale sicuro e anonimo per la comunicazione di comportamenti non conformi. Le segnalazioni possono riguardare frodi, violazioni etiche o qualsiasi altro comportamento illecito.</p>
              </div>
            </div>
          )}

          <h3>📝 Monitoraggio e Audit Interni</h3>
          <p>
            ENAV effettua regolarmente <strong>audit interni</strong> per verificare l'efficacia del sistema di <strong>compliance</strong> e per monitorare il rispetto delle normative e delle procedure aziendali. Queste attività garantiscono un costante aggiornamento e miglioramento dei processi.
          </p>

          <div className="next-section">
            <p>Per approfondire la gestione del rischio in ENAV, visita la sezione <strong>Gestione del Rischio</strong> 🔒.</p>
            <Link to="/Governance/GestioneDelRischio" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EticaeConformita;
