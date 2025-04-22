import React, { useState } from 'react';
import './pagecontent.css';
import './PianoSostenibilita.css';

const pillars = [
  {
    name: 'Strategie e Governance',
    objectives: 5,
    targets: 12,
    achieved: 12,
    description: 'Rafforzare la governance aziendale e integrare le tematiche ESG nella gestione strategica.'
  },
  {
    name: 'Politiche aziendali',
    objectives: 4,
    targets: 8,
    achieved: 7,
    description: 'Sviluppare politiche interne coerenti con gli obiettivi di sostenibilità e responsabilità.'
  },
  {
    name: 'Innovazione tecnologica',
    objectives: 3,
    targets: 6,
    achieved: 5,
    description: 'Promuovere soluzioni tecnologiche innovative per supportare la sostenibilità.'
  },
  {
    name: 'Reporting e comunicazione',
    objectives: 2,
    targets: 5,
    achieved: 5,
    description: 'Garantire trasparenza nella comunicazione dei risultati ESG.'
  },
  {
    name: 'Cultura aziendale',
    objectives: 3,
    targets: 7,
    achieved: 6,
    description: 'Fornire formazione e sensibilizzare il personale sui temi ESG.'
  },
  {
    name: 'Climate change',
    objectives: 2,
    targets: 4,
    achieved: 3,
    description: 'Ridurre le emissioni di CO2 e affrontare i cambiamenti climatici.'
  },
];

function PianoSostenibilita() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div id='main' className='page-content'>
      <div className='main-content'>
        <section className="sostenibilita-section">
          <div className="sostenibilita-container">
            <h2 className="sostenibilita-heading">🌿 Piano di Sostenibilità 2021-2024</h2>
            <p className="sostenibilita-text">
              Il <strong>Piano di Sostenibilità</strong> di ENAV rappresenta una roadmap strategica verso uno sviluppo responsabile e sostenibile. 
              Si basa su sei pilastri fondamentali che coprono la governance, l'innovazione, il cambiamento climatico, la cultura aziendale e la comunicazione.
            </p>
            <div className="intro-grid">
              <div className="intro-card">
                <span role="img" aria-label="strategia">📊</span>
                <h4 className='sostenibilita-subheading'>Strategia Integrata</h4>
                <p>La sostenibilità è integrata nel piano industriale.</p>
              </div>
              <div className="intro-card">
                <span role="img" aria-label="integrita">🛡️</span>
                <h4 className='sostenibilita-subheading'>Integrità</h4>
                <p>L'azienda agisce con trasparenza e rispetto per le normative.</p>
              </div>
              <div className="intro-card">
                <span role="img" aria-label="stakeholder">🤝</span>
                <h4 className='sostenibilita-subheading'>Stakeholder</h4>
                <p>ENAV dialoga costantemente con gli stakeholder per migliorare le performance ESG.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Card dei pilastri */}
        <section className="pillars-section">
          <h3 className="sostenibilita-subheading">I Pilastri del Piano di Sostenibilità</h3>
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card" onClick={() => setActiveModal(pillar)}>
                <h4 className='sostenibilita-subsubheading'>{pillar.name}</h4>
                <p>Obiettivi: {pillar.objectives}</p>
                <p>Target: {pillar.targets}</p>
                <p>Raggiunti: {pillar.achieved}/{pillar.targets} ✅</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modale */}
        {activeModal && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveModal(null)}>×</button>
              <h3 className='sostenibilita-subheading'>{activeModal.name}</h3>
              <p>{activeModal.description}</p>
              <ul>
                <li>Qui vanno i dettagli dei target raggiunti presi dall'allegato 4.</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PianoSostenibilita;
