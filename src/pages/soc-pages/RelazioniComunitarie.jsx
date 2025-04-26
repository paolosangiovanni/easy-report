import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './RelazioniComunitarie.css';

function RelazioniComunitarie() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (topic) => {
    setActiveModal(activeModal === topic ? null : topic);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="relazioni-container">
          <h2>🏘️ Relazioni con la Comunità</h2>
          <div className="relazioni-description">
            <p>Il <strong>Gruppo ENAV</strong> considera il dialogo con gli <strong>stakeholder</strong> parte integrante della propria strategia di sostenibilità. Il confronto continuo con le <strong>parti sociali</strong>, <strong>enti regolatori</strong>, <strong>associazioni di settore</strong> e <strong>clienti</strong> è essenziale per garantire trasparenza, collaborazione e crescita condivisa.</p>
          </div>

          <h3>🔗 Relazioni Industriali</h3>
          <div className="relazioni-section">
            <p>ENAV gestisce un dialogo strutturato con le <strong>organizzazioni sindacali</strong> al fine di creare un ambiente lavorativo equo e favorevole. Sono stati firmati numerosi <strong>accordi integrativi</strong> che mirano a migliorare la qualità della vita lavorativa dei dipendenti. Tra le principali tematiche affrontate figurano il benessere organizzativo, la sicurezza, e le politiche di conciliazione vita-lavoro.</p>
            <div className="relazioni-canva-item" onClick={() => toggleModal('industriali')}>
              <h4>🔗 Approfondisci</h4>
              <button className={`relazioni-modal-btn ${activeModal === 'industriali' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          <h3>🏛️ Relazioni con Enti, Istituzioni e Associazioni</h3>
          <div className="relazioni-section">
            <p>ENAV partecipa attivamente a <strong>tavoli istituzionali</strong>, <strong>progetti europei</strong> e iniziative con <strong>organismi internazionali</strong>. Questa rete di relazioni permette all'azienda di contribuire allo sviluppo di normative, promuovere pratiche di sostenibilità e innovazione, e garantire la sicurezza e l'efficienza del traffico aereo a livello globale.</p>
            <div className="relazioni-canva-item" onClick={() => toggleModal('enti')}>
              <h4>🏛️ Approfondisci</h4>
              <button className={`relazioni-modal-btn ${activeModal === 'enti' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          <h3>🤝 Relazioni con i Clienti</h3>
          <div className="relazioni-section">
            <p>Le relazioni con i <strong>clienti</strong> sono basate su un ascolto attento e continuo, mirato a comprendere le loro esigenze e a garantire servizi di alta qualità. ENAV conduce <strong>survey periodiche</strong>, organizza <strong>focus group</strong> e implementa azioni di miglioramento continuo, con l'obiettivo di costruire relazioni durature e soddisfacenti.</p>
            <div className="relazioni-canva">
              <div className="relazioni-circle">🔍<p>Focus sul cliente</p></div>
              <div className="relazioni-circle">❓<p>Identificare esigenze</p></div>
              <div className="relazioni-circle">⭐<p>Soddisfare aspettative</p></div>
              <div className="relazioni-circle">🤝<p>Rafforzare relazioni</p></div>
            </div>
            <div className="relazioni-canva-item" onClick={() => toggleModal('clienti')}>
              <h4>🤝 Approfondisci</h4>
              <button className={`relazioni-modal-btn ${activeModal === 'clienti' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal && (
            <div className="relazioni-modal-overlay" onClick={() => setActiveModal(null)}>
              <div className="relazioni-modal" onClick={(e) => e.stopPropagation()}>
                <button className="relazioni-modal-close" onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'industriali' && (
                  <>
                    <h3>🔗 Relazioni Industriali</h3>
                    <p>ENAV ha consolidato un sistema di relazioni industriali che consente un confronto aperto e costruttivo con le rappresentanze sindacali. Le politiche negoziate comprendono miglioramenti in termini di flessibilità lavorativa, sicurezza, salute, benessere psicofisico e programmi di formazione continua per il personale. Nel 2023 sono stati siglati oltre 10 accordi integrativi che coprono tematiche di innovazione tecnologica e smart working, con l'obiettivo di promuovere un ambiente di lavoro più dinamico e moderno.</p>
                  </>
                )}
                {activeModal === 'enti' && (
                  <>
                    <h3>🏛️ Relazioni con Enti e Istituzioni</h3>
                    <p>La partecipazione di ENAV a enti come <strong>EUROCONTROL</strong> e <strong>CANSO</strong> permette di influenzare e seguire l’evoluzione delle normative aeronautiche a livello europeo e internazionale. ENAV partecipa a oltre 15 progetti europei ogni anno, focalizzandosi su temi come l’innovazione digitale, la decarbonizzazione del trasporto aereo e la sicurezza operativa. Queste attività rafforzano il posizionamento di ENAV come player strategico nel panorama aeronautico globale.</p>
                  </>
                )}
                {activeModal === 'clienti' && (
                  <>
                    <h3>🤝 Relazioni con i Clienti</h3>
                    <p>ENAV monitora costantemente il grado di soddisfazione dei propri clienti attraverso strumenti strutturati di <strong>customer satisfaction</strong>. Ogni anno vengono raccolti feedback da oltre 100 compagnie aeree e operatori del settore, con un tasso di soddisfazione superiore al 90%. Le attività di miglioramento si concentrano sull’ottimizzazione dei servizi di navigazione aerea, la riduzione dei tempi di attesa e l’incremento dell’efficienza dei voli. Attraverso workshop e incontri bilaterali, ENAV rafforza la collaborazione e sviluppa soluzioni condivise per migliorare le operazioni aeronautiche.</p>
                  </>
                )}
              </div>
            </div>
          )}

            <div className="relazionicom-links-wrapper">
              <div className="relazionicom-links-description">
                <p>Esplora gli altri ambiti <strong>ESG</strong> oppure torna alla Home 🏠</p>
              </div>
              <div className="relazionicom-links">
                <Link to="/Governance" className="relazionicom-link-btn" onClick={scrollToTop}>🏛️ Vai alla sezione Governance</Link>
                <Link to="/Social" className="relazionicom-link-btn" onClick={scrollToTop}>👥 Vai alla sezione Sociale</Link>
                <Link to="/" className="relazionicom-link-btn" onClick={scrollToTop}>🏠 Vai alla Home</Link>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default RelazioniComunitarie;
