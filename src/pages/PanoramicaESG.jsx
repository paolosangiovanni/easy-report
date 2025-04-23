import React, { useState } from 'react';
import './PanoramicaESG.css';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const PanoramicaESG = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (pillar) => setActiveModal(pillar);
  const closeModal = () => setActiveModal(null);

  // Funzione per scrollare in cima
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // Dati per i grafici
  const environmentData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Totale Energia Consumata (GJ)',
        data: [302867.4, 298319.75, 277461.06],
        backgroundColor: ['#f8e473', '#a6d96a', '#0c965f'],
      },
    ],
  };

  const socialData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Ore di Formazione Operativa Interna',
        data: [93312, 94429, 148773],
        backgroundColor: ['#f8e473', '#a6d96a', '#0c965f'],
      },
    ],
  };

  const governanceData = {
    labels: ['Indipendenti', 'Non Indipendenti'],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ['#0c965f', '#f8e473'],
      },
    ],
  };

  const governanceOptions = {
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
      datalabels: {
        display: true,
        formatter: (value) => `${value}%`,
        color: '#fff',
        font: { weight: 'bold', size: 14 },
      },
    },
  };

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="content-wrapper">
          <h2 className="esg-heading">☀️ Panoramica degli Impegni ESG di ENAV</h2>

          <section className="esg-section">
            <div className="esg-container">
              <h3 className="esg-subheading">Impegni ESG</h3>
              <p className="esg-text">
                <strong>ENAV</strong> ha strutturato il proprio <strong>Piano di Sostenibilità 2021-2024</strong> attorno a sei pilastri fondamentali:
              </p>
              <ul>
                <li><strong>Strategie e Governance</strong></li>
                <li><strong>Politiche aziendali</strong></li>
                <li><strong>Innovazione tecnologica</strong></li>
                <li><strong>Reporting e comunicazione</strong></li>
                <li><strong>Cultura aziendale</strong></li>
                <li><strong>Climate change</strong></li>
              </ul>
              <p>
                Per l'analisi e la rendicontazione nel <strong>Bilancio di Sostenibilità 2023</strong>, questi sei pilastri sono stati raggruppati secondo i tre ambiti principali della strategia <strong>ESG</strong>:
              </p>


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

          {/* Performance ESG */}
          <section className="esg-charts-section">
            <h3 className="esg-heading">Performance ESG 2023</h3>
            
            <p className="esg-description">
        I grafici seguenti mostrano i principali impegni di ENAV nei tre ambiti della sostenibilità: <strong>Ambiente</strong>, <strong>Sociale</strong> e <strong>Governance</strong>. Questi dati sono rappresentativi degli sforzi messi in atto da ENAV per ridurre l'impatto ambientale, favorire il benessere dei propri dipendenti e garantire un alto livello di trasparenza e indipendenza nella governance aziendale.
      </p>
            <div className="esg-charts-container">
              <div className="chart-card">
                <h3>🌿 Ambiente</h3>
                <p className="chart-description">
                  ENAV si impegna a ridurre l'impatto ambientale delle proprie operazioni. Questo grafico mostra il consumo energetico totale in GJ dal 2021 al 2023.
                </p>
                <Bar data={environmentData} />
              </div>

              <div className="chart-card">
                <h3>👥 Sociale</h3>
                <p className="chart-description">
                  Il benessere dei dipendenti è al centro della strategia di ENAV. Il grafico mostra il numero di ore di formazione operativa interna erogate nei tre anni.
                </p>
                <Bar data={socialData} />
              </div>

              <div className="chart-card">
                <h3>🏛️ Governance</h3>
                <p className="chart-description">
                  La governance di ENAV si fonda su principi di trasparenza e indipendenza. Il grafico a torta mostra la percentuale di membri indipendenti nel consiglio di amministrazione.
                </p>
                <Pie data={governanceData} />
              </div>
            </div>
            <div className="esg-links">
                <Link to="/Enviroment" className="esg-link-btn" onClick={scrollToTop}>🌿 Vai alla sezione Ambiente</Link>
                <Link to="/Social" className="esg-link-btn" onClick={scrollToTop}>👥 Vai alla sezione Sociale</Link>
                <Link to="/Governance" className="esg-link-btn" onClick={scrollToTop}>🏛️ Vai alla sezione Governance</Link>
                </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PanoramicaESG;
