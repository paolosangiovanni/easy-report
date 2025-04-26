import React, { useState } from 'react';
import './pagecontent.css';
import './EnviromentIntro.css';
import { Link } from 'react-router-dom';  

function EnviromentIntro() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (phase) => {
    setActiveModal(phase);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

    // Funzione per scrollare in cima
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="intro-content">
          <h2>🌿 Impegno Ambientale di ENAV</h2>
          <div className="intro-description">
            <p>
              Il Gruppo ENAV, è da tempo impegnato nella riduzione dell’impatto ambientale delle sue attività e considera la tutela del pianeta un obiettivo imprescindibile.
            </p>
            <p>
              La sua strategia si basa su tre pilastri fondamentali che riflettono l'approccio sistemico ed integrato che guida tutte le sue azioni.
            </p>
            <ul>
              <li><strong>Innovazione tecnologica e sostenibilità ambientale 🌱</strong></li>
              <li><strong>Riduzione dell’impatto ambientale 🌍</strong></li>
              <li><strong>Airspace user più efficienti e sostenibili ✈️</strong></li>
            </ul>
            <p>
              I progetti strategici come il <strong>Flight Efficiency Plan (FEP)</strong> e il <strong>Free Route Airspace Italy (FRAIT)</strong> sono essenziali per il raggiungimento degli obiettivi ambientali.
            </p>
          </div>

          {/* Impegno Climatico */}
          <h3>L'impegno Climatico 🌍</h3>
          <div className="climate-commitment">
            <p>
              ENAV si impegna a ridurre il proprio impatto climatico attraverso l’adozione di politiche e tecnologie che ottimizzano l’efficienza operativa. L'azienda ha sviluppato una serie di iniziative incentrate sul miglioramento delle performance ambientali, che includono l'adozione di tecnologie verdi, l'ottimizzazione delle rotte di volo e l'introduzione di pratiche di lavoro più ecologiche. 
            </p>
            <p>
              Il Gruppo ENAV è in prima linea nella lotta contro i cambiamenti climatici, mirando ad un continuo abbattimento delle emissioni di gas serra, a partire dal traffico aereo e dalle infrastrutture operative.
            </p>
          </div>

          {/* Impegno per la Decarbonizzazione */}
          <h3>L'impegno per la Decarbonizzazione 🌱</h3>
          <div className="decarbonization-commitment">
            <p>
              ENAV ha lanciato numerosi progetti per contribuire alla decarbonizzazione del settore aeronautico. Questi includono l'adozione di tecnologie avanzate per la gestione del traffico aereo, l'implementazione di profili di volo a basso impatto ambientale e la promozione dell'uso di carburanti sostenibili. L’obiettivo è ridurre le emissioni di CO2 derivanti dalle operazioni aeree e contribuire alla transizione verso un’industria dell’aviazione più sostenibile.
            </p>
            <p>
              Grazie a iniziative come il <strong>Free Route Airspace Italy</strong> (FRA-IT), che permette rotte dirette e più efficienti, ENAV è riuscita a ridurre considerevolmente il consumo di carburante e le emissioni inquinanti. L’adozione di queste soluzioni contribuisce a ridurre le emissioni di CO2 e a migliorare l’efficienza energetica complessiva delle operazioni.
            </p>
          </div>

          {/* Canva delle 3 strategie */}
          <h3>Le Strategie Chiave di ENAV</h3>
          <div className="commitment-canva">
            <div className="canva-container">
              <div className="canva-inner">
                <div className="circle circle1">
                  <span>Innovazione tecnologica e sostenibilità ambientale 🌱</span>
                </div>
                <div className="circle circle2">
                  <span>Riduzione dell’impatto ambientale 🌍</span>
                </div>
                <div className="circle circle3">
                  <span>Airspace user più efficienti e sostenibili ✈️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fasi di volo con modali */}
          <h3>Fasi di Volo 🚀</h3>
          <div className="fase-volo-canva">
            <div className="fase-volo-container">
              <div className="fase-volo-inner">
              <div className="fase-volo-cloud fase-volo-cloud-4" onClick={() => openModal('ground')}>
                  <span className="flight-icon">🏗️</span>
                  <p>Operazioni al Suolo</p>
                  <button className={`modal-btn ${activeModal === 'ground' ? 'open' : ''}`}>&#43;</button>
                </div>
                <div className="fase-volo-cloud fase-volo-cloud-1" onClick={() => openModal('ascent')}>
                  <span className="flight-icon">🛫</span>
                  <p>Fase di Involo</p>
                  <button className={`modal-btn ${activeModal === 'ascent' ? 'open' : ''}`}>&#43;</button>
                </div>

                <div className="fase-volo-cloud fase-volo-cloud-2" onClick={() => openModal('cruise')}>
                  <span className="flight-icon">✈️</span>
                  <p>Fase di Crociera</p>
                  <button className={`modal-btn ${activeModal === 'cruise' ? 'open' : ''}`}>&#43;</button>
                </div>

                <div className="fase-volo-cloud fase-volo-cloud-3" onClick={() => openModal('terminal')}>
                  <span className="flight-icon">🛬</span>
                  <p>Fase Terminale</p>
                  <button className={`modal-btn ${activeModal === 'terminal' ? 'open' : ''}`}>&#43;</button>
                </div>
              </div>
            </div>
          </div>

          {/* Modali per le fasi di volo */}
          {activeModal && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>×</button>
                <h3>{activeModal === 'ascent' ? 'Fase di Involo' : activeModal === 'cruise' ? 'Fase di Crociera' : activeModal === 'terminal' ? 'Fase Terminale' : 'Operazioni al Suolo'}</h3>
                <p>{activeModal === 'ascent' && 'Relativa alle operazioni di decollo e alle traettorie per la salita iniziale.'}
                  {activeModal === 'cruise' && 'Relativa alle operazioni di sorvolo ad alte quote.'}
                  {activeModal === 'terminal' && 'Relativa all’ottimizzazione dei profili di volo dei segmenti di avvicinamento per l’atterraggio'}
                  {activeModal === 'ground' && 'Relativo agli interventi che portano alla riduzione dei tempi e all’ottimizzazione della movimentazione degli aeromobili in aeroporto (start-up e taxi in/out phases).'}</p>
              </div>
            </div>
          )}
          {/* Sezione con il link alla sezione FEP e FRA */}
          <div className="next-section">
            <p>Per approfondire i progetti di ENAV verso gli impegni ambientali, vedi la sezione successiva relativa al <strong>Flight Efficiency Plan</strong> e al <strong>Free Route Airspace.</strong></p>
            <Link to="/Enviroment/FEP&FRA" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnviromentIntro;
