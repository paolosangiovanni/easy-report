import React, { useState } from 'react';
import './EsgOverview.css';
import OverviewStats from './OverviewStats'; 

const EsgOverviewSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (pillar) => setActiveModal(pillar);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="esg-section">
      <div className="esg-container">
        <h2 className="esg-heading">Chi è ENAV ?</h2>
        <p className="esg-text">
          <strong>ENAV S.p.A.</strong> è la società italiana responsabile della gestione e del controllo del traffico aereo civile, operante su tutto il territorio nazionale. Gestisce oltre <strong>2 milioni di voli all’anno</strong> e garantisce la sicurezza, efficienza e regolarità della navigazione aerea nello spazio aereo italiano.
        </p>
        <p className="esg-text">
          ENAV è quotata alla Borsa di Milano (Euronext Milan) ed è tra le poche società di Air Navigation Service Provider (ANSP) al mondo ad avere un modello <strong>completamente liberalizzato</strong>, operando secondo logiche industriali e concorrenziali.
        </p>
        <p className="esg-text">
          Il Gruppo ENAV è presente anche a livello internazionale attraverso <strong>partecipazioni strategiche</strong> in società che operano nella consulenza, sviluppo di tecnologie ATM (Air Traffic Management), e nella gestione di servizi in paesi come <strong>Emirati Arabi Uniti, Malesia, Brasile</strong> e <strong>Colombia</strong>.
        </p>
        <p className="esg-text">
          La sua visione strategica è guidata dai principi ESG e si sviluppa attraverso investimenti in <strong>sostenibilità ambientale</strong>, <strong>innovazione tecnologica</strong> e <strong>valorizzazione del capitale umano</strong>.
        </p>
        <OverviewStats />
        <h3 className="esg-subheading">Impegni ESG</h3>
        <p className="esg-text">La strategia ESG si fonda su tre pilastri:</p>

        <div className="esg-pillars">
          <div className="pillar" onClick={() => openModal('environment')}>
            <h4 className={`pillar-title ${activeModal === 'environment' ? 'open' : ''}`}>🌿 Ambiente</h4>
            <p>Riduzione delle emissioni e innovazione sostenibile.</p>
          </div>

          <div className="pillar" onClick={() => openModal('social')}>
            <h4 className={`pillar-title ${activeModal === 'social' ? 'open' : ''}`}>👥 Sociale</h4>
            <p>Inclusione, benessere lavorativo e formazione.</p>
          </div>

          <div className="pillar" onClick={() => openModal('governance')}>
            <h4 className={`pillar-title ${activeModal === 'governance' ? 'open' : ''}`}>🏛️ Governance</h4>
            <p>Etica, trasparenza e anticorruzione.</p>
          </div>
          <p>
            <br></br>
        <strong>Considerato da tempo tra i “big five” europei per performance operative e innovazione,</strong> il Gruppo ENAV è oggi in prima linea a sostegno dell’ambiente grazie alla costante ottimizzazione delle rotte per ridurre i consumi degli aerei e all’utilizzo di tecnologie innovative per migliorare l’efficienza delle proprie infrastrutture.
      </p>
        </div>

        {/* Modali ESG */}
        {activeModal === 'environment' && (
          <div className="esg-modal-overlay" onClick={closeModal}>
            <div className="esg-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <h3>🌿 Ambiente</h3>
              <p>
                ENAV si impegna nella decarbonizzazione del settore aviazione, contribuendo alla riduzione dell’impatto ambientale tramite:
              </p>
              <ul>
                <li><strong>Free Route:</strong> consente voli più diretti e meno CO₂.</li>
                <li><strong>AMAN:</strong> ottimizza gli avvicinamenti in aeroporto.</li>
                <li><strong>Efficienza energetica:</strong> riduzione dei consumi nelle strutture operative.</li>
                <li><strong>Digitalizzazione:</strong> tecnologie paperless e torri di controllo remote.</li>
              </ul>
            </div>
          </div>
        )}

        {activeModal === 'social' && (
          <div className="esg-modal-overlay" onClick={closeModal}>
            <div className="esg-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <h3>👥 Sociale</h3>
              <p>
                L’approccio sociale di ENAV pone al centro le persone. Le principali aree di intervento includono:
              </p>
              <ul>
                <li><strong>Formazione continua:</strong> oltre 60.000 ore erogate nel 2023, su competenze tecniche, soft skills e sostenibilità.</li>
                <li><strong>Welfare aziendale:</strong> benefit per salute, conciliazione vita-lavoro, supporto psicologico e flessibilità.</li>
                <li><strong>Diversità e inclusione:</strong> impegno per la parità di genere, accessibilità e valorizzazione delle competenze trasversali.</li>
                <li><strong>Salute e sicurezza:</strong> certificazione ISO 45001 e audit regolari.</li>
              </ul>
            </div>
          </div>
        )}

        {activeModal === 'governance' && (
          <div className="esg-modal-overlay" onClick={closeModal}>
            <div className="esg-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <h3>🏛️ Governance</h3>
              <p>
                ENAV adotta un modello di governance fondato su trasparenza, legalità e conformità normativa:
              </p>
              <ul>
                <li><strong>Codice Etico:</strong> regola comportamenti e relazioni con stakeholder.</li>
                <li><strong>Anticorruzione:</strong> certificazione ISO 37001 e presidi di controllo interni.</li>
                <li><strong>Whistleblowing:</strong> canali attivi e protetti per segnalazioni anonime.</li>
                <li><strong>Politiche ESG integrate:</strong> la sostenibilità è parte della governance strategica del gruppo.</li>
                <li><strong>Consiglio di amministrazione:</strong> composto da membri indipendenti e comitati dedicati (ESG, Rischi, Remunerazione).</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EsgOverviewSection;
