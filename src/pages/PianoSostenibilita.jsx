import React, { useState } from 'react';
import './pagecontent.css';
import './PianoSostenibilita.css';

const pillars = [
  {
    name: 'Strategie e Governance',
    objectives: 4,
    targets: 9,
    achieved: 9,
    checkmark:'✅',
    description: 'Rafforzare la governance aziendale e integrare le tematiche ESG nella gestione strategica.',
    details: [
      '🎯 Completata la valutazione ESG dei fornitori core (3/3 Target raggiunti ✅)',
      '🎯 Implementato il modello di misurazione degli ESG (2/2 Target raggiunti ✅)',
      '🎯 Incremento della formazione erogata su temi che contemplano aspetti connessi al D.Lgs. 231/01 e Codice Etico, Anti-Bribery and Anti-Corruption, Fraud e Whistleblowing (3/3 Target raggiunti ✅)',
      '🎯 Implementato il modello di misurazione degli ESG (2/2 Target raggiunti ✅)'
    ]
  },
  {
    name: 'Politiche aziendali',
    objectives: 6,
    targets: 7,
    achieved: 7,
    checkmark:'✅',
    description: 'Sviluppare politiche interne coerenti con gli obiettivi di sostenibilità e responsabilità.',
    details: [
      '🎯 Monitoraggio degli standard in materia di salute e sicurezza sul lavoro anche attraverso il mantenimento della certificazione ISO 45001:2018 (1/1 Target raggiunto ✅)',
      '🎯 Sistemi di gestione per la prevenzione della corruzione (2/2 Target raggiunti ✅)',
      '🎯 Ottenimento della certificazione EASI (Ecosistema Aziendale di Sostenibilità Integrato) (1/1 Target raggiunto ✅)',
      '🎯 Valutazione di fattibilità per l’adozione dello standard ISO 56002 per la gestione dei processi di innovazione in azienda (1/1 Target raggiunto ✅)',
      '🎯 Valutazione di fattibilità per la certificazione secondo la Prassi di riferimento UNI/PdR 125:2022 (Politiche di parità di genere) (1/1 Target raggiunto ✅)',
      '🎯 Valutazione di fattibilità per la certificazione ISO 30415:2021 (Diversity & Inclusion) (1/1 Target raggiunto ✅)',
    ]
  },
  {
    name: 'Innovazione tecnologica',
    objectives: 6,
    targets: 14,
    achieved: 10,
    checkmark:'',
    description: 'Promuovere soluzioni tecnologiche innovative per supportare la sostenibilità.',
    details: [
      '🎯 Automazione avanzata delle maggiori torri di controllo attraverso una nuova piattaforma ATM di aeroporto (Electronic Strip / Radar presentation) (4/5 Target raggiunti ⚠️)',
      '🎯 Sistema di ottimizzazione delle sequenze di avvicinamento (Arrival Manager – AMAN) (2/2 Target raggiunti ✅)',
      '🎯 OTOC-HAL (Progetto di remotizzazione della diagnostica sugli apparati dei siti remoti che consente la centralizzazione del controllo e l’ottimizzazione dell’intervento dei manutentori) (1/1 Target raggiunto ✅)',
      '🎯 Integrazione avvicinamenti (Trasferimento degli avvicinamenti radar da alcuni aeroporti ai rispettivi centri di controllo di riferimento) (3/4 Target raggiunti ⚠️)',
      '🎯 Sviluppo di attività di ricerca e innovazione correlate agli SDGs (Politiche di parità di genere) (0/1 Target raggiunto ⚠️)',
      '🎯 Ricerca e sviluppo di algoritmi di intelligenza artificiale e machine learning da eseguire in ambienti cloud di High Performance Computing, funzionali alle attività core e no-core del Gruppo ENAV e ai temi di sostenibilità (0/1 Target raggiunto ⚠️)',
    ]
  },
  {
    name: 'Reporting e comunicazione',
    objectives: 5,
    targets: 5,
    achieved: 0,
    checkmark:'',
    description: 'Garantire trasparenza nella comunicazione dei risultati ESG.',
    details: [
      '🎯 Ulteriore impulso alla comunicazione esterna sui temi di sostenibilità (0/1 Target raggiunto ⚠️)',
      '🎯 Sviluppo dell’analisi di materialità secondo il concetto di «double materiality» (0/1 Target raggiunto ⚠️)',
      '🎯 Elaborazione GHG Report (0/1 Target raggiunto ⚠️)',
      '🎯 Divulgazione dei temi di sostenibilità alle nuove generazioni attraverso un «Report Generazionale» (0/1 Target raggiunto ⚠️)',
      '🎯 Rendicontazione integrata delle performance aziendali (Politiche di parità di genere) (0/1 Target raggiunto ⚠️)'
    ]
  },
  {
    name: 'Cultura aziendale',
    objectives: 1,
    targets: 1,
    achieved: 1,
    description: 'Fornire formazione e sensibilizzare il personale sui temi ESG.',
    checkmark:'✅',
    details: [
      '🎯 Acquisizione di nuovi talenti con sensibilità sulle tematiche ESG (1/1 Target raggiunto ✅)'
    ]
  },
  {
    name: 'Climate change',
    objectives: 9,
    targets: 16,
    achieved: 13,
    checkmark:'',
    description: 'Ridurre le emissioni di CO2, Elettromagnetiche e affrontare i cambiamenti climatici.',
    details: [
      '🎯 Raggiungimento della Carbon Neutrality del Gruppo ENAV (Scope 1 e Scope 2) attraverso la riduzione delle emissioni e l’acquisto di carbon credits per la parte non riducibile (2/2 Target raggiunti ✅)',
      '🎯 Abbattimento dell’energia elettromagnetica trasmessa attraverso una ottimizzazione degli strumenti di navigazione (1/2 Target raggiunti ⚠️)',
      '🎯 Ulteriore sviluppo del progetto di sostituzione della flotta auto aziendale con macchine elettriche / ibride / plug-in (3/4 Target raggiunti ⚠️)',
      '🎯 Realizzazione di progetti finalizzati all’efficienza energetica (2/3 Target raggiunti ⚠️)',
      '🎯 Miglioramento del processo di reporting delle emissioni di Scope 3 – Capital Goods (1/1 Target raggiunto ✅)',
      '🎯 Definizione di un nuovo approccio alla Circular Economy (1/1 Target raggiunto ✅)',
      '🎯 Definizione degli impatti del climate change sul business di ENAV (1/1 Target raggiunto ✅)',
      '🎯 Raggiungimento degli obiettivi SBTi Scope 1 e Scope 2 al 2030 (1/1 Target raggiunto ✅)',
      '🎯 Abbattimento delle emissioni di Scope 3 del 13,5% al 2030 (1/1 Target raggiunto ✅)'
    ]
  },
];

function PianoSostenibilita() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div id='main' className='page-content'>
      <div className='main-content'>
        <section className="sostenibilita-section">
          <div className="sostenibilita-container">
            <h2 className="sostenibilita-heading">♻️ Piano di Sostenibilità 2021-2024</h2>
            <p className="sostenibilita-text">
              Il <strong>Piano di Sostenibilità</strong> di ENAV rappresenta una roadmap strategica per uno sviluppo responsabile. Si fonda su sei pilastri fondamentali che abbracciano<strong> Strategie e Governance</strong>, <strong>Politiche aziendali</strong>, <strong>Innovazione tecnologica</strong>, <strong>Reporting e comunicazione</strong>, <strong>Cultura aziendale</strong> e <strong>Climate change</strong>.
            </p>

            <div className="intro-grid">
              <div className="intro-card">
                <h4 className='sostenibilita-subheading'>📊 Strategia Integrata</h4>
                <p>
                  La <strong>strategia di sostenibilità</strong> di ENAV è saldamente intrecciata con il 
                  <strong> Piano Industriale</strong> e con gli obiettivi dell'<strong>Agenda 2030 delle Nazioni Unite</strong>. 
                  Questo approccio integrato consente di mettere la <strong>sostenibilità al centro delle decisioni aziendali</strong>, 
                  creando sinergie tra governance, operazioni e impatti <strong>ESG</strong> 🌍.
                </p>
                <p>
                  ENAV ha strutturato un percorso evolutivo a partire dal <strong>Piano di Sostenibilità 2018-2020</strong>, culminando 
                  nell’attuale <strong>Piano di Sostenibilità 2021-2024</strong>, con obiettivi ambiziosi come la 
                  <strong> Carbon Neutrality</strong>, l’adozione di <strong>KPI ESG</strong> nei sistemi di incentivazione del top management 
                  e la continua <strong>valutazione degli impatti ESG</strong> nei processi aziendali 📊.
                </p>
              </div>
              <div className="intro-card">
                <h4 className='sostenibilita-subheading'>🛡️ Integrità</h4>
                <p>
                  L’<strong>integrità aziendale</strong> è uno dei capisaldi della governance di ENAV, garantita attraverso:
                </p>
                <ul>
                  <li>L’adozione di <strong>codici etici</strong> e di <strong>politiche anticorruzione</strong> rigorose ✅.</li>
                  <li>Il mantenimento di <strong>certificazioni internazionali</strong> come la <strong>ISO 37001</strong> per la prevenzione della corruzione e la <strong>ISO 45001</strong> per la sicurezza sul lavoro.</li>
                  <li>Il continuo aggiornamento delle policy di <strong>Diversity & Inclusion</strong>, che promuovono la parità di genere e il rispetto dei <strong>diritti umani</strong>. Queste pratiche consolidano la <strong>fiducia degli stakeholder</strong> e assicurano la <strong>conformità normativa</strong> a livello globale 🌐.</li>
                </ul>
              </div>
              <div className="intro-card">
                <h4 className='sostenibilita-subheading'>🤝 Stakeholder</h4>
                <p>
                  Il dialogo con gli <strong>stakeholder</strong> è un pilastro della strategia ENAV 💬. Attraverso:
                </p>
                <ul>
                  <li><strong>Workshop multi-stakeholder</strong>.</li>
                  <li>La partecipazione a reti globali come il <strong>Global Compact delle Nazioni Unite</strong> 🌐.</li>
                  <li><strong>Sustainability Day</strong> e attività di <strong>Engagement continuo</strong>. ENAV favorisce una comunicazione <strong>trasparente</strong> e <strong>inclusiva</strong>, rafforzando le <strong>relazioni con clienti, istituzioni, investitori</strong> e associazioni di settore 📊.</li>
                </ul>
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
                <p><strong>🎯 Obiettivi:</strong> {pillar.objectives}</p>
                <p><strong>📋 Target:</strong> {pillar.targets}</p>
                <p><strong>📌 Target Raggiunti:</strong> {pillar.achieved}/{pillar.targets} {pillar.checkmark}</p>
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
                {activeModal.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PianoSostenibilita;
