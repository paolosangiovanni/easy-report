import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './SviluppoDeiDipendenti.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function SviluppoDeiDipendenti() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (topic) => {
    setActiveModal(activeModal === topic ? null : topic);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  const formazioneOreData = {
    labels: ['Dirigenti', 'Quadri', 'Impiegati', 'Operai'],
    datasets: [
      {
        label: 'Ore medie di formazione 2023',
        data: [16, 15, 61, 32],
        backgroundColor: '#0c965f',
      },
    ],
  };

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="sviluppo-content">
          <h2>👨‍💼👩‍💼 Sviluppo dei Dipendenti</h2>

          <div className="sviluppo-description">
            <p>
              ENAV considera il <strong>valore delle persone</strong> al centro della propria strategia di sostenibilità. L'azienda investe costantemente nella <strong>crescita professionale</strong> dei propri dipendenti, attraverso iniziative di formazione, valutazione delle performance e sviluppo delle competenze.
            </p>
            <p>
              Il modello di <strong>Gestione delle Performance</strong> è strutturato in un ciclo continuo di definizione obiettivi, monitoraggio, valutazione e feedback, coinvolgendo il 100% del personale.
            </p>
            <p>
              Particolare attenzione è rivolta al <strong>potenziamento delle competenze digitali</strong>, grazie a corsi specifici per affrontare la trasformazione tecnologica e migliorare l'operatività.
            </p>
          </div>

          <h3>Ore Medie di Formazione per Categoria</h3>
<p className="sviluppo-chart-description">Questo grafico mostra la distribuzione media delle ore di formazione per ciascuna categoria professionale nel 2023, evidenziando il forte investimento sulla formazione operativa.</p>
          <div className="sviluppo-chart-container">
            <Bar data={formazioneOreData} options={{ responsive: true }} />
          </div>

<h3>Ore di Formazione Totali nel Triennio</h3>
<p className="sviluppo-chart-description">Il totale delle ore di formazione erogate nel triennio mostra una costante attenzione al mantenimento delle competenze, nonostante le variazioni di contesto economico e organizzativo.</p>
<div className="sviluppo-chart-container">
  <Bar data={{
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Ore di formazione (aula/e-learning)',
        data: [34518, 29213, 29327],
        backgroundColor: '#78b010'
      }
    ]
  }} options={{ responsive: true }} />
</div>

          <h3>Employee Attraction 🎯</h3>
<div className="employee-attraction-canva">
  <div className="employee-attraction-item">
    <h4>🎓 Partnership Accademiche</h4>
    <p>Collaborazioni con Master, Business School e Università per orientare studenti e giovani professionisti nel mondo del lavoro.</p>
  </div>
  <div className="employee-attraction-item">
    <h4>🔗 Rapporti con Centri per l’Impiego</h4>
    <p>Attivazione di partnership strategiche per favorire l'inserimento lavorativo.</p>
  </div>
  <div className="employee-attraction-item">
    <h4>📋 Tirocini Extracurriculari</h4>
    <p>Progetti di tirocinio per profili neolaureati al fine di facilitare l’ingresso nel mondo del lavoro.</p>
  </div>
  <div className="employee-attraction-item">
    <h4>📚 Tirocini Curriculari</h4>
    <p>Stage destinati a studenti universitari per l’integrazione tra studio e lavoro.</p>
  </div>
  <div className="employee-attraction-item">
    <h4>🤝 Inclusione Disabilità</h4>
    <p>Collaborazione con sportelli per il collocamento mirato di persone con disabilità, promuovendo pari opportunità.</p>
  </div>
</div>

<h3>Piano della Formazione 🧩</h3>
<div className="piano-formazione-canva">
  <div className="piano-formazione-item">
    <h4>🔄 Trasformazioni Organizzative</h4>
    <p>Gestione del change management per rispondere alle evoluzioni del contesto lavorativo.</p>
  </div>
  <div className="piano-formazione-item">
    <h4>📑 Policy Aziendali</h4>
    <p>Definizione di linee guida e procedure interne per uniformare i percorsi di formazione.</p>
  </div>
  <div className="piano-formazione-item">
    <h4>📊 Performance Management</h4>
    <p>Valutazione dei bisogni formativi emersi durante il ciclo di gestione delle performance.</p>
  </div>
  <div className="piano-formazione-item">
    <h4>🔍 Recruiting e Assessment</h4>
    <p>Esigenze derivanti dai processi di selezione e onboarding del personale.</p>
  </div>
  <div className="piano-formazione-item">
    <h4>🏢 Fabbisogni delle Strutture</h4>
    <p>Identificazione dei bisogni specialistici delle singole strutture aziendali per sviluppare competenze mirate.</p>
  </div>
</div>

<h3>Iniziative di Sviluppo 📚</h3>
          <div className="sviluppo-initiatives-grid">
            <div className="sviluppo-initiative-card" onClick={() => toggleModal('formazione')}>
              <span role="img" aria-label="formazione">🎓</span>
              <h4>Formazione Continua</h4>
              <button className={`sviluppo-modal-btn ${activeModal === 'formazione' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="sviluppo-initiative-card" onClick={() => toggleModal('performance')}>
              <span role="img" aria-label="performance">📊</span>
              <h4>Valutazione Performance</h4>
              <button className={`sviluppo-modal-btn ${activeModal === 'performance' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="sviluppo-initiative-card" onClick={() => toggleModal('digital')}>
              <span role="img" aria-label="digital">💻</span>
              <h4>Competenze Digitali</h4>
              <button className={`sviluppo-modal-btn ${activeModal === 'digital' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="sviluppo-initiative-card" onClick={() => toggleModal('partnership')}>
              <span role="img" aria-label="partnership">🤝</span>
              <h4>Partnership Accademiche</h4>
              <button className={`sviluppo-modal-btn ${activeModal === 'partnership' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal && (
            <div className="sviluppo-modal-overlay" onClick={() => setActiveModal(null)}>
              <div className="sviluppo-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="sviluppo-modal-close" onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'formazione' && (
                  <>
                    <h3>🎓 Formazione Continua</h3>
                    <p>ENAV ha erogato oltre <strong>45.000 ore</strong> di formazione nel 2023, attraverso corsi tecnici, gestionali e normativi, sia in presenza che su piattaforme digitali.</p>
                  </>
                )}
                {activeModal === 'performance' && (
                  <>
                    <h3>📊 Valutazione delle Performance</h3>
                    <p>Ogni anno viene attivato un ciclo di <strong>valutazione</strong> che coinvolge il 100% del personale, con colloqui di feedback e definizione di obiettivi personalizzati.</p>
                  </>
                )}
                {activeModal === 'digital' && (
                  <>
                    <h3>💻 Competenze Digitali</h3>
                    <p>Sviluppo di <strong>competenze digitali avanzate</strong> per affrontare le sfide della trasformazione tecnologica, con corsi di cybersecurity, data analysis e strumenti digitali per il lavoro quotidiano.</p>
                  </>
                )}
                {activeModal === 'partnership' && (
                  <>
                    <h3>🤝 Partnership Accademiche</h3>
                    <p>Collaborazioni con università e centri di ricerca per programmi di formazione avanzata e progetti di innovazione applicata.</p>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="sviluppo-next-section">
            <p>Per approfondire il tema della <strong>Salute e Sicurezza</strong> sul lavoro, visita la sezione dedicata 🩹.</p>
            <Link to="/Social/Salute&Sicurezza" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SviluppoDeiDipendenti;
