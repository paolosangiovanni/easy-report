import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './CompensieIncentivi.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function CompensieIncentivi() {

    const [activeModal, setActiveModal] = useState(null);
    const toggleModal = (topic) => setActiveModal(activeModal === topic ? null : topic);
    const scrollToTop = () => window.scrollTo(0, 0);
  
    // Dataset dei sei grafici
    const commonColors = ['#003f87', '#00bcd4', '#7fb800'];  // Compenso fisso, STI, LTI
  
    const dataSet = {
      adMin: { labels: ['Compenso fisso', 'STI', 'LTI'], datasets: [{ data: [61, 15, 24], backgroundColor: commonColors }] },
      adTarget: { labels: ['Compenso fisso', 'STI', 'LTI'], datasets: [{ data: [38, 24, 38], backgroundColor: commonColors }] },
      adMax: { labels: ['Compenso fisso', 'STI', 'LTI'], datasets: [{ data: [33, 27, 40], backgroundColor: commonColors }] },
      dirMin: { labels: ['Compenso fisso', 'STI', 'LTI'], datasets: [{ data: [74, 11, 15], backgroundColor: commonColors }] },
      dirTarget: { labels: ['Compenso fisso', 'STI', 'LTI'], datasets: [{ data: [53, 21, 26], backgroundColor: commonColors }] },
      dirMax: { labels: ['Compenso fisso', 'STI', 'LTI'], datasets: [{ data: [49, 22, 29], backgroundColor: commonColors }] }
    };

  return (
    <div id='main' className='page-content'>
      <div className='main-content'>
        <div className='compensi-content'>
          <h2>💶 Compensi e Incentivi</h2>
          <div className='compensi-description'>
            <p>Il <strong>Gruppo ENAV</strong> adotta una <strong>politica di remunerazione</strong> equa, trasparente e allineata alle migliori pratiche internazionali, con l'obiettivo di attrarre, motivare e trattenere risorse chiave. La struttura dei compensi è pensata per garantire <strong>meritocrazia</strong>, <strong>sostenibilità</strong> e <strong>allineamento</strong> agli interessi degli stakeholder.</p>
            <p>La <strong>remunerazione complessiva</strong> si compone di una parte <strong>fissa</strong> e una <strong>variabile</strong>, legata a obiettivi di breve e lungo termine, sia finanziari che ESG (ambientali, sociali e di governance). Il sistema di incentivi premia i risultati raggiunti in coerenza con la strategia aziendale e con i valori di ENAV.</p>
          </div>

          <h3>📊 Struttura della Remunerazione</h3>
          <div className='compensi-graph-grid'>
            <div className='compensi-graph-card'>
              <h4>Amministratore Delegato - Min</h4>
              <Doughnut data={dataSet.adMin} />
            </div>
            <div className='compensi-graph-card'>
              <h4>Amministratore Delegato - Target</h4>
              <Doughnut data={dataSet.adTarget} />
            </div>
            <div className='compensi-graph-card'>
              <h4>Amministratore Delegato - Max</h4>
              <Doughnut data={dataSet.adMax} />
            </div>
            <div className='compensi-graph-card'>
              <h4>Dirigenti con Responsabilità Strategiche - Min</h4>
              <Doughnut data={dataSet.dirMin} />
            </div>
            <div className='compensi-graph-card'>
              <h4>Dirigenti con Responsabilità Strategiche - Target</h4>
              <Doughnut data={dataSet.dirTarget} />
            </div>
            <div className='compensi-graph-card'>
              <h4>Dirigenti con Responsabilità Strategiche - Max</h4>
              <Doughnut data={dataSet.dirMax} />
            </div>
          </div>

          <h3>📝 Elementi della Politica Retributiva</h3>
          <div className='compensi-cards'>
            <div className='compensi-card' onClick={() => toggleModal('fisso')}>
              <h4>💼 Remunerazione Fissa</h4>
              <button className={`compensi-modal-btn ${activeModal === 'fisso' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className='compensi-card' onClick={() => toggleModal('breve')}>
              <h4>📈 Incentivi a Breve Termine</h4>
              <button className={`compensi-modal-btn ${activeModal === 'breve' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className='compensi-card' onClick={() => toggleModal('lungo')}>
              <h4>⏳ Incentivi a Lungo Termine</h4>
              <button className={`compensi-modal-btn ${activeModal === 'lungo' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className='compensi-card' onClick={() => toggleModal('esg')}>
              <h4>🌱 Obiettivi ESG</h4>
              <button className={`compensi-modal-btn ${activeModal === 'esg' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal && (
            <div className='compensi-modal-overlay' onClick={() => setActiveModal(null)}>
              <div className='compensi-modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='compensi-modal-close' onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'fisso' && (
                  <>
                    <h3>💼 Remunerazione Fissa</h3>
                    <p>La componente fissa della remunerazione è definita in base al ruolo, alle competenze e al mercato di riferimento, assicurando competitività e coerenza interna. Rappresenta una quota significativa della retribuzione complessiva per garantire stabilità e prevedibilità.</p>
                  </>
                )}
                {activeModal === 'breve' && (
                  <>
                    <h3>📈 Incentivi a Breve Termine</h3>
                    <p>Gli incentivi a breve termine (MBO - Management By Objectives) sono legati al raggiungimento di <strong>obiettivi annuali</strong> di performance aziendale e individuale. I parametri includono risultati economici, operativi e progetti strategici.</p>
                  </>
                )}
                {activeModal === 'lungo' && (
                  <>
                    <h3>⏳ Incentivi a Lungo Termine</h3>
                    <p>Gli incentivi a lungo termine sono finalizzati a fidelizzare il management e allineare gli interessi con quelli degli stakeholder. Il piano si basa su obiettivi triennali e prevede l’assegnazione di premi legati al raggiungimento di risultati sostenibili nel tempo.</p>
                  </>
                )}
                {activeModal === 'esg' && (
                  <>
                    <h3>🌱 Obiettivi ESG</h3>
                    <p>Il sistema retributivo di ENAV integra obiettivi ESG tra i parametri di valutazione dei premi variabili. Questi includono <strong>riduzione delle emissioni</strong>, <strong>parità di genere</strong> e <strong>salute e sicurezza</strong>, rafforzando l'impegno verso la sostenibilità.</p>
                  </>
                )}
              </div>
            </div>
          )}

          <h3>🔍 Supervisione e Monitoraggio</h3>
          <p>La <strong>Commissione Remunerazione</strong> di ENAV supervisiona l’applicazione della politica retributiva, garantendo l’adeguatezza rispetto agli obiettivi aziendali e agli standard di governance. La commissione verifica l’allineamento con le best practice e propone eventuali aggiornamenti, assicurando trasparenza nei processi decisionali.</p>

          <div className="next-section">
            <p>Per approfondire il tema della <strong>Trasparenza e Comunicazione</strong> in ENAV, visita la sezione dedicata 📢.</p>
            <Link to="/Governance/Trasparenza&Comunicazione" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompensieIncentivi;
