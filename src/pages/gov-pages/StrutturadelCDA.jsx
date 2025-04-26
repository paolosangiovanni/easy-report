import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './StrutturadelCDA.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function StrutturaDelCDA() {

  const scrollToTop = () => window.scrollTo(0, 0);

  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (topic) => {
    setActiveModal(activeModal === topic ? null : topic);
  };

  // Dataset grafici
  const dataIndipendenza = {
    labels: ['Indipendenti (%)', 'Non indipendenti (%)'],
    datasets: [{
      data: [90, 10],
      backgroundColor: ['#26b97e', '#b9d4a3'],
      borderWidth: 1
    }]
  };

  const dataEta = {
    labels: ['Over 50 (%)', '30-50 anni (%)'],
    datasets: [{
      data: [67, 33],
      backgroundColor: ['#23ab28', '#afc7bd','#134c15'],
      borderWidth: 1
    }]
  };

  const dataGenere = {
    labels: ['Uomini (%)', 'Donne (%)'],
    datasets: [{
      data: [56, 44],
      backgroundColor: ['#216dca', '#d948a4'],
      borderWidth: 1
    }]
  };

  const dataTenure = {
    labels: ['< 3 anni', '> 3 anni'],
    datasets: [{
      data: [75, 25],
      backgroundColor: ['#dde250', '#0e622e'],
      borderWidth: 1
    }]
  };

  return (
    <div id='main' className='page-content'>
      <div className='main-content'>
        <div className='cda-content'>
          <h2>🏢 Struttura del Consiglio di Amministrazione</h2>
          <div className='cda-description'>
            <p>Il <strong>Consiglio di Amministrazione di ENAV</strong> rappresenta il principale organo di indirizzo strategico e di controllo della Società. È composto da membri indipendenti e non, in possesso di competenze diversificate in ambiti strategici, finanziari, normativi e di sostenibilità.</p>
            <p>La sua struttura garantisce equilibrio tra <strong>continuità gestionale</strong> e <strong>rinnovamento</strong>, assicurando il rispetto dei migliori standard di governance e una rappresentanza adeguata di genere, età e background professionale.</p>
          </div>

          <h3>📊 Composizione del CDA</h3>
          <div className='cda-graphs'>
            <div className='cda-graph-card'>
              <h4>Indipendenza</h4>
              <Doughnut data={dataIndipendenza} />
            </div>
            <div className='cda-graph-card'>
              <h4>Età dei componenti</h4>
              <Doughnut data={dataEta} />
            </div>
            <div className='cda-graph-card'>
              <h4>Diversità di genere</h4>
              <Doughnut data={dataGenere} />
            </div>
            <div className='cda-graph-card'>
              <h4>Tenure</h4>
              <Doughnut data={dataTenure} />
            </div>
          </div>

          <h3>📝 Nomina e Composizione del Consiglio di Amministrazione</h3>
          <p>La nomina dei membri del CDA segue un processo trasparente e regolato dallo Statuto societario, che prevede la presentazione di liste di candidati da parte degli azionisti. I candidati devono possedere competenze di alto livello e garantire integrità e professionalità. Questo approccio garantisce un adeguato bilanciamento tra <strong>rinnovo</strong> e <strong>continuità</strong> della governance, favorendo la diversità di genere, età ed esperienza.</p>

          <h3>🎯 Ruolo del Consiglio di Amministrazione nella Gestione degli Impatti</h3>
          <p>Il CDA è responsabile della supervisione degli impatti <strong>economici</strong>, <strong>ambientali</strong> e <strong>sociali</strong> della Società. Approvando strategie e piani di sostenibilità, monitora i rischi ESG, assicurando che le attività di ENAV siano allineate con gli standard internazionali. La gestione degli impatti include il monitoraggio dei <strong>rischi climatici</strong> e <strong>sociali</strong>, con report periodici sulle performance.</p>

          <div className='cda-modals'>
            <div className='cda-modal-card' onClick={() => toggleModal('impatti')}>
              <h4>🔍 Monitoraggio degli impatti ESG</h4>
              <button className={`cda-modal-btn ${activeModal === 'impatti' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal && (
            <div className='cda-modal-overlay' onClick={() => setActiveModal(null)}>
              <div className='cda-modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='cda-modal-close' onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'impatti' && (
                  <>
                    <h3>🔍 Monitoraggio degli Impatti ESG</h3>
                    <p>Il Consiglio di Amministrazione adotta <strong>policy ESG</strong> e verifica il raggiungimento degli obiettivi di sostenibilità, intervenendo in caso di scostamenti per correggere la rotta. L'integrazione dei fattori ESG nei processi aziendali è una priorità nella definizione delle strategie.</p>
                  </>
                )}
              </div>
            </div>
          )}

          <h3>📚 Competenze del Consiglio di Amministrazione</h3>
          <p>I membri del CDA di ENAV possiedono competenze eterogenee che spaziano dalla <strong>finanza</strong> alla <strong>sostenibilità</strong>, dal <strong>risk management</strong> alle <strong>relazioni industriali</strong>. Questa diversità consente una visione integrata e completa delle dinamiche aziendali, garantendo decisioni efficaci e consapevoli.</p>

          {/* Sezione link a Struttura del CDA */}
          <div className="next-section">
          <p>Per approfondire il tema di <strong>Etica e Conformità</strong> in ENAV, scopri la sezione dedicata ⚖️.</p>
            <Link to="/Governance/Etica&Conformita" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StrutturaDelCDA;
