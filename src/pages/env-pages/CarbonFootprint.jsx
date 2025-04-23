import React, { useState } from 'react';
import './pagecontent.css';
import './CarbonFootprint.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement);

const CarbonFootprint = () => {

  // Funzione per scrollare in cima
  const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
  const emissionsScope1 = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Emissioni Scope 1 - Dirette (CO2e)',
        data: [4781.31, 4300.28, 3782.62],
        backgroundColor: '#e84e4e',
      },
    ],
  };

  const emissionsScope1and2 = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Market Based 1 e 2 (CO2e)',
        data: [28672.57, 7304.92, 5155.30], 
        backgroundColor: '#037803',
      },
      {
        label: 'Location Based 1 e 2 (CO2e)',
        data: [22353.05, 21683.67, 20565.75], 
        backgroundColor: '#7eeb7e',
      },      
    ],
  };

  const emissionsScope2MarketBased = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Emissioni Scope 2 - Market Based (CO2e)',
        data: [23891.23, 3004.64, 1372.68],
        backgroundColor: '#caca25',
      },
    ],
  };

  const emissionsScope3 = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Emissioni Scope 3 (CO2e)',
        data: [53996.17, 54368.00, 56537.47],
        backgroundColor: '#6699ff',
      },
    ],
  };

  // Grafico a torta per Carbon Footprint
  const pieChartData = {
    labels: ['Scope 1 (%)', 'Scope 2 (%)', 'Scope 3 (%)'],
    datasets: [
      {
        data: [92, 6, 2], // Esempio di distribuzione delle emissioni tra Scope 1, 2, 3
        backgroundColor: ['#659965b0', '#4db14dd2', '#279275'],
        hoverOffset: 4,

        
      },
    ],
  };



  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="carbon-footprint">
          <h2>🌳 Carbon Footprint del Gruppo ENAV</h2>
          <div className="description">
            <p>
              Il Gruppo ENAV ha fatto progressi significativi nella lotta contro i cambiamenti climatici, impegnandosi per la
               <strong> carbon neutrality</strong> attraverso riduzioni strategiche delle proprie emissioni di gas serra, con un focus
              particolare sulle emissioni dirette (Scope 1) e indirette (Scope 2). Parallelamente, l'azienda si impegna a ridurre
              anche le emissioni indirette di Scope 3, spesso più difficili da monitorare, ma essenziali per il raggiungimento degli
              obiettivi di sostenibilità a lungo termine.
            </p>
            <p>
              ENAV ha adottato una serie di misure per ridurre il proprio impatto ambientale, comprese le soluzioni per l'efficienza
              energetica, la transizione verso veicoli elettrici 🚗 e l'adozione di carburanti sostenibili 🌱. Gli obiettivi a lungo termine
              includono riduzioni significative delle emissioni di Scope 1 e 2 e azioni mirate per abbattere le emissioni di Scope 3.
            </p>

            {/* Inserisci il grafico a torta per la Carbon Footprint */}
            <div className="chart-doughnut-card">
              <h3>Distribuzione delle Emissioni di Carbon Footprint</h3>
              <Doughnut data={pieChartData}/>
            </div>
          </div>

          {/* Carbon Neutrality Section */}
          <h3>Carbon Neutrality di ENAV</h3>
          <div className="description">
            <p>
              ENAV ha raggiunto la <strong>carbon neutrality</strong> per le sue operazioni, riducendo le emissioni di Scope 1 e 2 attraverso
              progetti specifici come la transizione a veicoli elettrici ⚡ e l'ottimizzazione dei consumi energetici. Le emissioni
              residue sono state compensate tramite l'acquisto di crediti di carbonio certificati.
            </p>
            <p>
              Le emissioni di <strong>Scope 3</strong>, che rappresentano le emissioni indirette provenienti da fornitori e altre attività
              esterne, sono sotto attenta osservazione. ENAV sta collaborando con i propri partner per ridurre queste emissioni, migliorando
              la sostenibilità della propria supply chain 🌍.
            </p>
          </div>

          {/* Emissioni Scope 1, 2 e 3 */}
          <h3>Emissioni di Scope 1, 2 e 3</h3>
          <div className="description">
            <p>
              Le emissioni di <strong>Scope 1</strong> sono quelle dirette, provenienti dalle attività operative di ENAV, come il consumo di
              carburante per il trasporto e il riscaldamento degli edifici 🏢. Queste emissioni sono state ridotte notevolmente nel
              corso degli ultimi anni, grazie all'introduzione di veicoli elettrici e all'adozione di soluzioni più efficienti.
            </p>
            <p>
              Le emissioni di <strong>Scope 2</strong> derivano dal consumo di energia elettrica e rappresentano una parte significativa delle
              emissioni indirette. ENAV ha investito in energia rinnovabile 🌞 per ridurre l'impronta di carbonio legata alla sua attività.
            </p>
            <p>
            ENAV, come previsto dal <strong>Sustainability Reporting Standard</strong>, ha provveduto al calcolo delle emissioni di tipo Scope 2 
            in base alle due seguenti metodologie:
            </p>
            <ul>
              <li>
              <strong>📍 Location-based method</strong>, basato sui fattori di emissione medi relativi alla generazione di energia su base regionale, subregionale o nazionale
              </li>
              <li>
              <strong>📈 Market-based method</strong>, basato sulle emissioni di CO2 generate dai fornitori di energia elettrica da cui 
              l’organizzazione si approvvigiona o sui fattori relativi al mercato di riferimento.
              </li>
            </ul>
            <p>
              Infine, le emissioni di <strong>Scope 3</strong> sono quelle provenienti dalle attività di terze parti, come il trasporto dei
              dipendenti, la produzione dei beni e servizi acquistati, i viaggi aziendali, e altro. Questo ambito è il più difficile da monitorare,
              ma ENAV sta lavorando per ridurre l'impronta di carbonio di queste attività attraverso collaborazioni e incentivi.
            </p>
          </div>

          {/* 4 Grafici separati per Scope 1, Scope 1 & 2, Scope 2 (Market-Based) e Scope 3 */}
          <div className="charts-container">
            <div className="chart-card">
              <h3>Emissioni Scope 1 (Dirette)</h3>
              <Bar data={emissionsScope1} />
            </div>

            <div className="chart-card">
              <h3>Emissioni Scope 1 e 2</h3>
              <Bar data={emissionsScope1and2} />
            </div>

            <div className="chart-card">
              <h3>Emissioni Scope 2 (Market Based)</h3>
              <Bar data={emissionsScope2MarketBased} />
            </div>

            <div className="chart-card">
              <h3>Emissioni Scope 3</h3>
              <Bar data={emissionsScope3} />
            </div>
          </div>

          {/* Iniziative di Decarbonizzazione */}
          <h3>Iniziative di Decarbonizzazione</h3>
          <div className="description">
            <p>ENAV ha intrapreso diverse iniziative di decarbonizzazione, tra cui:</p>
            <ul>
              <li>🔋 <strong>Acquisto di energia elettrica tramite Garanzia di Origine (GO)</strong>, che oggi copre il 95% del fabbisogno elettrico di Gruppo.</li>
              <li>⚡ <strong>Interventi finalizzati all’efficientamento energetico degli asset del Gruppo ENAV.</strong></li>
              <li>🌞 <strong>Progressivo aumento della quota di energia autoprodotta da fonti rinnovabili.</strong></li>
              <li>🚗 <strong>Sostituzione del parco auto aziendale con veicoli elettrici / ibridi / plug-in.</strong></li>
              <li>💡 <strong>Sviluppo di progetti di ricerca e innovazione in ambito energetico.</strong></li>
            </ul>
          </div>

          {/* Canva Interattivo per le Strategie di Decarbonizzazione */}
          <div className="commitment-canva">
            <div className="canva-container">
              <div className="canva-inner">
                <div className="circle1">
                  <span>Mobilità Sostenibile</span>
                </div>
                <div className="circle2">
                  <span>Carburanti Sostenibili</span>
                </div>
                <div className="circle3">
                  <span>Ottimizzazione Rotte</span>
                </div>
              </div>
            </div>
          </div>

        {/* Sezione: Emissioni Elettromagnetiche di ENAV */}
        <h3>Emissioni Elettromagnetiche di ENAV</h3>
        <div className="description">
          <p>
            ENAV gestisce sistemi radar e di comunicazione che generano <strong>campi elettromagnetici non ionizzanti</strong> ⚡, utilizzati in tutta Italia per garantire la sicurezza del traffico aereo. Queste emissioni sono necessarie per il corretto funzionamento dei servizi, ma è fondamentale monitorarle per minimizzare il loro impatto sull’ambiente 🌍.
          </p>
          <p>
            I radar e le stazioni di comunicazione, pur non essendo dannosi per la salute umana, generano onde elettromagnetiche che si diffondono nell'ambiente. ENAV ha l'obiettivo di gestirle responsabilmente, assicurando che siano sempre sotto i limiti di legge per salvaguardare la salute e l'ambiente.
          </p>
        </div>

        {/* Sezione: Impegno di ENAV per ridurre le emissioni elettromagnetiche */}
        <h3>Impegno di ENAV per ridurre le Emissioni Elettromagnetiche</h3>
        <div className="description">
          <p>
            ENAV sta attivamente riducendo le emissioni elettromagnetiche attraverso:
          </p>
          <ul>
            <li>📡 <strong>Dismissione delle stazioni NDB</strong>: riduzione delle emissioni obsolete tramite l'adozione di sistemi più efficienti.</li>
            <li>🔋 <strong>Razionalizzazione dei sistemi radar</strong>: ottimizzazione delle tecnologie per ridurre l’impatto elettromagnetico.</li>
            <li>🌞 <strong>Transizione a nuove tecnologie di navigazione</strong>: con il piano PBN, che riduce l'impronta ambientale.</li>
            <li>🌍 <strong>Valutazione dell'impatto ambientale</strong>: monitoraggio continuo degli impianti radar presso aeroporti chiave come Milano e Brindisi.</li>
          </ul>
          <p>
            Questi interventi sono parte di un impegno continuo per migliorare la sostenibilità operativa e ridurre l'impronta ecologica di ENAV.
          </p>
        </div>


          {/* Link alla sezione successiva */}
          <div className="next-section">
            <p>Per scoprire di più su come ENAV è impegnata nell'<strong>Innovazione Tecnologica</strong> e nella <strong>Digitalizzazione</strong>, vedi la sezione successiva.</p>
            <Link to="/Enviroment/InnovazioneTecnologica" className="arrow-link" >
              <button className="down-arrow-btn" onClick={scrollToTop}>↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprint;
