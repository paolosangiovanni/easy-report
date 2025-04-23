import React, { useState } from 'react';
import './pagecontent.css';
import './Investimenti.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Investimenti = () => {
  // Funzione per scrollare in cima
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Dati per il grafico
  const investimentiData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Investimenti in Sostenibilità (€ milioni)',
        data: [76, 88, 94], // Dati degli investimenti
        backgroundColor: '#0c965f',
      },
    ],
  };

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="investimenti-sostenibilita">
          <h2>📈 Gli Investimenti per la Sostenibilità del Gruppo ENAV</h2>

          <div className="description">
            <p>
              Il Gruppo ENAV ha sempre posto un forte impegno nella sostenibilità, investendo in iniziative che puntano a ridurre l'impatto ambientale e a migliorare l'efficienza operativa. L'azienda ha destinato risorse per rendere le sue operazioni sempre più sostenibili, promuovendo l'adozione di tecnologie innovative e soluzioni green 🌱.
            </p>
            <p>
              Tra gli investimenti principali troviamo il potenziamento delle infrastrutture, il miglioramento della gestione del traffico aereo e l'introduzione di nuove tecnologie come l'Advanced Air Mobility (AAM), dove ENAV partecipa attivamente con D-Flight, la sua azienda di punta nel settore della mobilità aerea avanzata.
            </p>
            <p>
              Gli investimenti sono stati destinati anche a migliorare la gestione delle risorse e l'efficienza energetica, con progetti che vanno dal rafforzamento delle infrastrutture tradizionali alla digitalizzazione dei servizi, sempre nell'ottica di ridurre l'impatto ambientale e contribuire agli obiettivi di sostenibilità.
            </p>
          </div>

          <h3>Investimenti annuali in Sostenibilità (€ milioni)</h3>
          <div className="charts-container">
            <div className="chart-card">
              <Bar data={investimentiData} />
            </div>
            
          </div>

          <h3>Le Aree di Investimento</h3>
          <div className="cards-container">
            <div className="card" onClick={() => openModal('infrastructure')}>
              <h3>🔧 Innovazione delle Infrastrutture</h3>
              <p>Investimenti in infrastrutture moderne per migliorare la sicurezza e l'efficienza delle operazioni aeree.</p>
              <button className={`modal-btn ${activeModal === 'infrastructure' ? 'open' : ''}`}>&#43;</button>
            </div>

            <div className="card" onClick={() => openModal('airmobility')}>
              <h3>🚁 Advanced Air Mobility (AAM)</h3>
              <p>ENAV partecipa attivamente allo sviluppo della mobilità aerea avanzata con D-Flight.</p>
              <button className={`modal-btn ${activeModal === 'airmobility' ? 'open' : ''}`}>&#43;</button>
            </div>

            <div className="card" onClick={() => openModal('digital')}>
              <h3>💻 Digitalizzazione e Automazione</h3>
              <p>Investimenti nelle nuove tecnologie per la gestione digitale e automatizzata del traffico aereo.</p>
              <button className={`modal-btn ${activeModal === 'digital' ? 'open' : ''}`}>&#43;</button>
            </div>

            <div className="card" onClick={() => openModal('green')}>
              <h3>🌍 Soluzioni Green</h3>
              <p>Progetti per ridurre l'impatto ambientale con l'uso di energie rinnovabili e soluzioni sostenibili.</p>
              <button className={`modal-btn ${activeModal === 'green' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {/* Modali per ogni card */}
          {activeModal && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>×</button>
                <h3>
                  {activeModal === 'infrastructure' && '🔧 Innovazione delle Infrastrutture'}
                  {activeModal === 'airmobility' && '🚁 Advanced Air Mobility (AAM)'}
                  {activeModal === 'digital' && '💻 Digitalizzazione e Automazione'}
                  {activeModal === 'green' && '🌍 Soluzioni Green'}
                </h3>
                <p>
                  {activeModal === 'infrastructure' && 'ENAV sta investendo nella modernizzazione delle infrastrutture per migliorare la sicurezza e l’efficienza. I principali investimenti riguardano l’innovazione delle infrastrutture di navigazione e il potenziamento delle torri di controllo e radar. Inoltre partecipa a programmi sperimentali per l’implementazione di procedure di volo basate su sistemi di Navigazione Satellitare, programmi che hanno consentito la navigazione Free Route e che – insieme alle nuove tecniche di disegno delle procedure operative(PBN) – stanno già permettendo ad ENAV di dismettere infrastrutture terrestri di navigazione.'}
                  {activeModal === 'airmobility' && 'ENAV partecipa al progetto D-Flight, sviluppando soluzioni per l’Advanced Air Mobility. L’azienda sta creando un’infrastruttura per droni e velivoli a decollo verticale, promuovendo la mobilità aerea sostenibile e innovativa.'}
                  {activeModal === 'digital' && 'Gli investimenti nella digitalizzazione dei servizi mirano a migliorare la gestione automatizzata del traffico aereo e a ridurre l’impatto ambientale attraverso l’uso di tecnologie all’avanguardia come i sistemi di automazione e il controllo remoto.'}
                  {activeModal === 'green' && 'ENAV ha intrapreso numerosi progetti verdi, come l’adozione di energie rinnovabili per alimentare le proprie operazioni e l’ottimizzazione delle infrastrutture per ridurre il consumo energetico.'}
                </p>
              </div>
            </div>
          )}


            <div className="esg-links-wrapper">
              <div className="esg-links-description">
                <p>Esplora gli altri ambiti <strong>ESG</strong> oppure torna alla Home 🏠</p>
              </div>
              <div className="esg-links">
                <Link to="/Social" className="esg-link-btn" onClick={scrollToTop}>👥 Vai alla sezione Sociale</Link>
                <Link to="/Governance" className="esg-link-btn" onClick={scrollToTop}>🏛️ Vai alla sezione Governance</Link>
                <Link to="/" className="esg-link-btn" onClick={scrollToTop}>🏠 Vai alla Home</Link>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Investimenti;
