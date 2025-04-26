import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './GestionedelRischio.css';

function GestionedelRischio() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (topic) => {
    setActiveModal(activeModal === topic ? null : topic);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="risk-content">
          <h2>🔒 Gestione del Rischio in ENAV</h2>
          <div className="risk-description">
            <p>
              La <strong>Gestione del Rischio</strong> rappresenta un elemento centrale del sistema di <strong>Corporate Governance</strong> di ENAV. L'obiettivo primario è garantire un monitoraggio costante e una gestione proattiva dei rischi che possano influenzare il raggiungimento degli obiettivi strategici, finanziari, operativi e reputazionali dell'azienda.
            </p>
            <p>
              ENAV ha adottato un <strong>Enterprise Risk Management (ERM)</strong> in linea con le migliori pratiche internazionali, integrando i principi del framework <strong>CoSO</strong> e le linee guida <strong>ISO 31000</strong>. Questo approccio consente di identificare, valutare e monitorare sistematicamente i rischi, favorendo decisioni consapevoli e resilienti.
            </p>
          </div>

          <h3>🌐 Approccio Integrato al Rischio</h3>
          <div className="risk-cards">
            <div className="risk-graph-card">
              <h4>ERM Framework</h4>
              <p>Adottato il modello <strong>Enterprise Risk Management</strong> per una gestione integrata dei rischi aziendali, garantendo coerenza con le strategie di lungo termine.</p>
            </div>
            <div className="risk-graph-card">
              <h4>Comitato Controllo e Rischi</h4>
              <p>Supervisiona l'efficacia del sistema di controllo interno e della gestione dei rischi, relazionando periodicamente al Consiglio di Amministrazione.</p>
            </div>
          </div>

          <h3>🛡️ Categorie di Rischio</h3>
          <div className="risk-modals">
            <div className="risk-modal-card" onClick={() => toggleModal('strategico')}>
              <h4>📈 Rischio Strategico</h4>
              <button className={`risk-modal-btn ${activeModal === 'strategico' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="risk-modal-card" onClick={() => toggleModal('operativo')}>
              <h4>⚙️ Rischio Operativo</h4>
              <button className={`risk-modal-btn ${activeModal === 'operativo' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="risk-modal-card" onClick={() => toggleModal('finanziario')}>
              <h4>💰 Rischio Finanziario</h4>
              <button className={`risk-modal-btn ${activeModal === 'finanziario' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="risk-modal-card" onClick={() => toggleModal('reputazionale')}>
              <h4>🗣️ Rischio Reputazionale</h4>
              <button className={`risk-modal-btn ${activeModal === 'reputazionale' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal && (
            <div className="risk-modal-overlay" onClick={() => setActiveModal(null)}>
              <div className="risk-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="risk-modal-close" onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'strategico' && (
                  <>
                    <h3>📈 Rischio Strategico</h3>
                    <p>Comprende rischi legati a cambiamenti normativi, evoluzione del mercato, innovazione tecnologica, che possono influenzare la competitività e la realizzazione degli obiettivi strategici di ENAV.</p>
                  </>
                )}
                {activeModal === 'operativo' && (
                  <>
                    <h3>⚙️ Rischio Operativo</h3>
                    <p>Rischi derivanti da processi interni, sistemi tecnologici, infrastrutture e fattori esterni (come eventi naturali), che possono compromettere la continuità operativa e la qualità dei servizi.</p>
                  </>
                )}
                {activeModal === 'finanziario' && (
                  <>
                    <h3>💰 Rischio Finanziario</h3>
                    <p>Include rischi di natura finanziaria come oscillazioni dei tassi di cambio, variazioni dei tassi d'interesse, rischi di credito e di liquidità, con impatto sulla stabilità economica dell’azienda.</p>
                  </>
                )}
                {activeModal === 'reputazionale' && (
                  <>
                    <h3>🗣️ Rischio Reputazionale</h3>
                    <p>Riguarda la percezione di ENAV da parte di stakeholder interni ed esterni. Eventi negativi possono compromettere la fiducia nel brand, con ricadute economiche e sociali.</p>
                  </>
                )}
              </div>
            </div>
          )}

          <h3>🔍 Monitoraggio e Reporting</h3>
          <p>Il sistema di <strong>monitoraggio</strong> dei rischi prevede aggiornamenti periodici e <strong>reporting</strong> puntuali agli organi di controllo. ENAV utilizza <strong>indicatori chiave di rischio (KRI)</strong> per individuare tempestivamente segnali di criticità e adottare azioni correttive.</p>

          {/* Sezione link alla prossima pagina */}
          <div className="next-section">
            <p>Per approfondire i <strong>Compensi e Incentivi</strong> in ENAV, scopri la sezione dedicata 💶.</p>
            <Link to="/Governance/Compensi&Incentivi" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default GestionedelRischio;
