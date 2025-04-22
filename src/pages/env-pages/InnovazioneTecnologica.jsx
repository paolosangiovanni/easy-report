import React, { useState } from 'react';
import './pagecontent.css';
import './InnovazioneTecnologica.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const InnovazioneTecnologica = () => {

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

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="innovazione-tecnologica">
          <h2>🌐 Innovazione Tecnologica e Digitalizzazione del Gruppo ENAV</h2>
          <div className="description">
            <p>
              ENAV è impegnata nell'adozione di tecnologie avanzate per migliorare l'efficienza operativa e la sicurezza del traffico aereo. La digitalizzazione dei processi, l'innovazione delle infrastrutture e l'implementazione di nuove piattaforme rappresentano i principali driver per raggiungere gli obiettivi di sostenibilità e sicurezza.
            </p>
            <br />
            <p>L’evoluzione del modello operativo, la digitalizzazione dell’azienda, lo sviluppo di nuove capacità e nuove linee di business, come i droni e nuovi servizi verso il mercato estero stanno creando le condizioni per un rilancio del Gruppo verso risultati ancora più ambiziosi di quelli finora raggiunti.</p>
          </div>

          {/* Card interattive per le varie innovazioni */}
          <div className="cards-container">


            <div className="card" onClick={() => openModal('platforms')}>
              <h3>📶 Interoperabilità delle Piattaforme</h3>
              <p>Esplora come la collaborazione tra piattaforme migliora la gestione del traffico aereo.</p>
              <button className={`modal-btn ${activeModal === 'platforms' ? 'open' : ''}`}>&#43;</button>
            </div>

            <div className="card" onClick={() => openModal('remote')}>
              <h3>📡 Remote Tower</h3>
              <p>Innovazione nel controllo remoto degli aeroporti per una gestione più flessibile e sicura.</p>
              <button className={`modal-btn ${activeModal === 'remote' ? 'open' : ''}`}>&#43;</button>
            </div>

            <div className="card" onClick={() => openModal('satellite')}>
              <h3>🌍 Digitalizzazione delle comunicazioni</h3>
              <p>Scopri come la digitalizzazione sta migliorando l’efficienza delle comunciazioni.</p>
              <button className={`modal-btn ${activeModal === 'satellite' ? 'open' : ''}`}>&#43;</button>
            </div>

            <div className="card" onClick={() => openModal('AMAN')}>
              <h3>🛬 Sistema di Arrival Management</h3>
              <p>Scopri il sistema di Arrival Management (AMAN)</p>
              <button className={`modal-btn ${activeModal === 'satellite' ? 'open' : ''}`}>&#43;</button>
            </div>

            <div className="card" onClick={() => openModal('AIREON')}>
              <h3>🛰️ Sorveglianza satellitare - AIREON</h3>
              <p>Scopri il sistema satellitare AIREON</p>
              <button className={`modal-btn ${activeModal === 'satellite' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>


          {/* Modali per ogni card */}
          {activeModal && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>×</button>
                <h3>
                  {activeModal === 'platforms' && '📶 Interoperabilità delle Piattaforme'}
                  {activeModal === 'remote' && '📡 Remote Tower'}
                  {activeModal === 'satellite' && '🌍 Digitalizzazione delle comunicazioni'}
                  {activeModal === 'AMAN' && '🛬 Sistema di Arrival Management'}
                  {activeModal === 'AIREON' && '🛰️ Sorveglianza satellitare - AIREON'}
                </h3>
                <p>
                  {activeModal === 'platforms' && 'La gestione del traffico aereo necessita di essere fluida ed efficiente anche a livello sovranazionale. Per questa ragione diversi soggetti (service provider, compagnie aeree, società di gestione aeroportuale, enti militari) devono poter condividere i propri dati in tempo reale al fine di cooperare agevolmente nella gestione dei voli. COFLIGHT: sistema sviluppato con la francese DSNA, permetterà di migliorare ulteriormente il sistema di automazione delle operazioni. Grazie all’innovazione e alla costante professionalizzazione delle risorse, il Gruppo ENAV, primo tra i Service Provider europei, ha rivoluzionato la modalità di attraversamento dello spazio aereo del nostro Paese. Oltre le attività già descritte (in particolare il suddetto Free Route), il Gruppo ENAV sta lavorando ad altri progetti innovativi che rivoluzioneranno il settore, quali ad esempio il concetto di Virtual Centre per la delega dei servizi ATS tra centri ATC e per la gestione delle situazioni di contingency, il tool di Conflict Detection & Resolution innovativi basati sull’utilizzo dei dati di bordo e logiche basate sull’intelligenza artificiale, sistemi per la configurazione dinamica dello spazio aereo in accordo alla domanda di traffico. Ciascuna di queste soluzioni è caratterizzata da un importante impatto sulle performance ATM in chiave green.'}
                  {activeModal === 'remote' && 'Il traffico aereo degli aeroporti a minore densità verrà gestito da torri di controllo remote che saranno concentrate in due centri di controllo a livello nazionale. In questo modo gli scali potranno operare 24 ore al giorno con minore impegno delle risorse e dell’energia, aprendosi alle esigenze di flessibilità delle compagnie aeree e rendendo così più attrattivo il sistema Paese. In tal senso, già nel corso del 2022, è stata messa in operazione la prima Remote Tower in Italia presso l’aeroporto di Brindisi. Inoltre, nell’ambito del programma SESAR, sono state condotte delle attività di ricerca sul Remote Tower centre e Multiple Remote Tower Operations.'}
                  {activeModal === 'satellite' && 'Sostituzione delle comunicazioni cartacee nelle torri con informazioni visualizzate in tempo reale nello schermo radar della propria postazione (EFS – Electronic Flight Strips). Inoltre, con il nuovo sistema Datalink, la comunicazione digitale e quella tradizionale – radio terra / bordo / terra – si integrano e ciò consente di ridurre il rischio di incomprensione nelle comunicazioni radio tra controllori e piloti. ENAV collabora anche all’evoluzione del datalink attraverso le attività di sviluppo della costellazione satellitare del sistema IRIS che trasmetterà i messaggi datalink via satellite.'}
                  {activeModal === 'AMAN' && 'Questo sistema indicherà al controllore la sequenza calcolata ottimale per separare gli aeromobili in arrivo su aeroporti congestionati consentendo recupero dei consumi e riduzione dei ritardi. La prima implementazione operativa sul territorio italiano è avvenuta nel 2022 presso Roma ACC per la gestione dei voli in arrivo a Roma Fiumicino e, nel mese di dicembre 2023, è stato implementato il sistema AMAN presso Milano ACC per l’ottimizzazione delle sequenze di avvicinamento agli aeroporti di Milano Malpensa, Milano Linate e Bergamo Orio al Serio.'}
                  {activeModal === 'AIREON' && 'AIREON, di cui ENAV è shareholder, fornisce servizi di sorveglianza satellitare, permettendo alle compagnie aeree di ottimizzare il proprio profilo di volo in aree non coperte dalla sorveglianza tradizionale, abilitando una ottimizzazione dei consumi.'}

                </p>
              </div>
            </div>
          )}

          {/* Link alla sezione successiva */}
          <div className="next-section">
            <p>Per scoprire di più sugli <strong>Investimenti</strong> del Gruppo <strong>ENAV</strong>, vedi la sezione successiva.</p>
            <Link to="/Enviroment/Investimenti" className="arrow-link" >
              <button className="down-arrow-btn" onClick={scrollToTop}>↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovazioneTecnologica;
