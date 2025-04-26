import React, { useState } from 'react';
import './pagecontent.css';
import './GovernanceIntro.css';
import { Link } from 'react-router-dom';

function GovernanceIntro() {
  const [activeAreaModal, setActiveAreaModal] = useState(null);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="governance-intro-content">
          <h2>🏛️ Governance di ENAV</h2>
          <div className="governance-intro-description">
            <p>
              Il <strong>Gruppo ENAV</strong> adotta un modello di <strong>corporate governance</strong> orientato alla <strong>sostenibilità</strong> e al <strong>successo di lungo termine</strong>. La struttura di governance integra responsabilità di controllo e gestione per assicurare la trasparenza, l'efficienza e il rispetto delle normative vigenti.
            </p>
            <p>
              La governance si articola in diversi organi, ciascuno con specifici ruoli e responsabilità, a garanzia di una <strong>gestione efficace</strong> e di una <strong>costante attenzione</strong> verso tutti gli <strong>stakeholder</strong>. I principi di <strong>trasparenza</strong>, <strong>equità</strong> e <strong>integrità</strong> sono al centro di tutte le decisioni aziendali.
            </p>
          </div>

          <h3>Principi di Corporate Governance 📋</h3>
          <div className="governance-principles">
            <div className="principle-card">
              <h4>🔍 Trasparenza</h4>
              <p>ENAV garantisce la trasparenza nelle decisioni, nella comunicazione interna ed esterna e nei rapporti con gli stakeholder.</p>
            </div>
            <div className="principle-card">
              <h4>⚖️ Equità</h4>
              <p>La governance promuove pratiche eque e inclusive, valorizzando il contributo di ogni individuo e favorendo la diversità.</p>
            </div>
            <div className="principle-card">
              <h4>🛡️ Integrità</h4>
              <p>Ogni decisione aziendale è presa con integrità, rispettando normative, regolamenti e codici etici.</p>
            </div>
          </div>

          <h3>Macroaree della Governance 🔎</h3>
          <div className="relazioni-canva">
            <div className="relazioni-canva-item" onClick={() => setActiveAreaModal('cda')}>
              <h4>🏢 Struttura del CDA</h4>
              <button className={`relazioni-modal-btn ${activeAreaModal === 'cda' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="relazioni-canva-item" onClick={() => setActiveAreaModal('etica')}>
              <h4>⚖️ Etica e Conformità</h4>
              <button className={`relazioni-modal-btn ${activeAreaModal === 'etica' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="relazioni-canva-item" onClick={() => setActiveAreaModal('rischio')}>
              <h4>🔒 Gestione del Rischio</h4>
              <button className={`relazioni-modal-btn ${activeAreaModal === 'rischio' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="relazioni-canva-item" onClick={() => setActiveAreaModal('compensi')}>
              <h4>💶 Compensi e Incentivi</h4>
              <button className={`relazioni-modal-btn ${activeAreaModal === 'compensi' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="relazioni-canva-item" onClick={() => setActiveAreaModal('trasparenza')}>
              <h4>📢 Trasparenza e Comunicazione</h4>
              <button className={`relazioni-modal-btn ${activeAreaModal === 'trasparenza' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {/* Modali */}
          {activeAreaModal && (
            <div className="relazioni-modal-overlay" onClick={() => setActiveAreaModal(null)}>
              <div className="relazioni-modal" onClick={(e) => e.stopPropagation()}>
                <button className="relazioni-modal-close" onClick={() => setActiveAreaModal(null)}>×</button>
                <h3>
                  {activeAreaModal === 'cda' && '🏢 Struttura del CDA'}
                  {activeAreaModal === 'etica' && '⚖️ Etica e Conformità'}
                  {activeAreaModal === 'rischio' && '🔒 Gestione del Rischio'}
                  {activeAreaModal === 'compensi' && '💶 Compensi e Incentivi'}
                  {activeAreaModal === 'trasparenza' && '📢 Trasparenza e Comunicazione'}
                </h3>
                <p>
                  {activeAreaModal === 'cda' && 'Il Consiglio di Amministrazione di ENAV è composto da membri indipendenti e non, con responsabilità di indirizzo strategico e controllo delle attività aziendali. La sua composizione garantisce competenze diversificate e rappresentatività.'}
                  {activeAreaModal === 'etica' && 'ENAV adotta un Codice Etico che definisce i principi di comportamento a cui devono attenersi tutti i dipendenti e collaboratori. Le attività di conformità sono supervisionate da organismi di controllo dedicati.'}
                  {activeAreaModal === 'rischio' && 'La gestione dei rischi è integrata nei processi decisionali e nelle strategie aziendali, attraverso l’identificazione, la valutazione e il monitoraggio dei rischi operativi, finanziari e reputazionali.'}
                  {activeAreaModal === 'compensi' && 'Il sistema di remunerazione di ENAV è disegnato per attrarre e trattenere talenti, con criteri di meritocrazia, equità e trasparenza. Include incentivi legati al raggiungimento di obiettivi di performance.'}
                  {activeAreaModal === 'trasparenza' && 'La trasparenza e la comunicazione sono garantite attraverso la pubblicazione di documenti ufficiali, relazioni periodiche e il dialogo continuo con gli stakeholder, al fine di assicurare un’informazione chiara e tempestiva.'}
                </p>
              </div>
            </div>
          )}

          {/* Sezione link a Struttura del CDA */}
          <div className="next-section">
            <p>Per approfondire la struttura del CDA di <strong>ENAV</strong>, scopri la sezione <strong> Struttura del CDA</strong> 🏢.</p>
            <Link to="/Governance/StrutturaDelCDA" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernanceIntro;
