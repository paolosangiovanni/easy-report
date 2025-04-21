import React from 'react';
import './EsgChartsSection.css';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const EsgChartsSection = () => {
    const environmentData = {
      labels: ['2021', '2022', '2023'],
      datasets: [
        {
          label: 'Totale Energia Consumata (GJ)',
          data: [302867.4, 298319.75, 277461.06], // Totale energia consumata per ciascun anno
          backgroundColor: ['#f8e473', '#a6d96a', '#0c965f'], // Colori per le barre
        },
      ],
    };
      
    const socialData = {
      labels: ['2021', '2022', '2023'],
      datasets: [
        {
          label: 'Ore di Formazione Operativa Interna',
          data: [93312, 94429, 148773],  // Dati estratti dal grafico
          backgroundColor: ['#f8e473', '#a6d96a', '#0c965f'], // Colori per le barre
        },
      ],
    };
      
    const governanceData = {
      labels: ['Indipendenti', 'Non Indipendenti'],
      datasets: [
        {
          data: [90, 10], // Percentuali degli indipendenti e non indipendenti
          backgroundColor: ['#0c965f', '#f8e473'], // Colori per le sezioni della torta
        },
      ],
    };
    
    const governanceOptions = {
      plugins: {
        legend: {
          position: 'top', // Posizione della legenda
        },
        tooltip: {
          enabled: true, // Abilita il tooltip
        },
        datalabels: {
          display: true, // Mostra i dati (percentuali)
          formatter: (value) => `${value}%`, // Formato per mostrare la percentuale
          color: '#fff', // Colore del testo delle etichette
          font: {
            weight: 'bold',
            size: 14, // Dimensione del testo
          },
        },
      },
    };

  return (
    <section className="esg-charts-section">
      <h2 className="esg-charts-heading">Performance ESG 2023</h2>
      
      <p className="esg-description">
        I grafici seguenti mostrano i principali impegni di ENAV nei tre pilastri della sostenibilità: <strong>Ambiente</strong>, <strong>Sociale</strong> e <strong>Governance</strong>. Questi dati sono rappresentativi degli sforzi messi in atto da ENAV per ridurre l'impatto ambientale, favorire il benessere dei propri dipendenti e garantire un alto livello di trasparenza e indipendenza nella governance aziendale.
      </p>
      
      <div className="esg-charts-container">
        <div className="chart-card">
          <h3>🌿 Ambiente</h3>
          <p className="chart-description">
            ENAV si impegna a ridurre l'impatto ambientale delle proprie operazioni. Questo grafico mostra il consumo energetico totale in GJ dal 2021 al 2023, evidenziando l'andamento della <strong>efficienza energetica</strong> e il miglioramento continuo attraverso investimenti mirati in tecnologie sostenibili. La riduzione nel 2023 rispetto al 2021 sottolinea l'impegno verso una gestione sempre più green.
          </p>
          <Bar data={environmentData} />
        </div>
        
        <div className="chart-card">
          <h3>👥 Sociale</h3>
          <p className="chart-description">
            Il benessere dei dipendenti è al centro della strategia di ENAV. Il grafico mostra il numero di ore di formazione operativa interna erogate nei tre anni. In particolare, nel 2023, ENAV ha investito notevolmente nell'<strong>aggiornamento delle competenze</strong>, con un focus sulle soft skills e la sostenibilità, preparandosi a rispondere alle sfide future.
          </p>
          <Bar data={socialData} />
        </div>
        
        <div className="chart-card">
          <h3>🏛️ Governance</h3>
          <p className="chart-description">
            La governance di ENAV si fonda su principi di trasparenza e indipendenza. Il grafico a torta mostra la percentuale di membri indipendenti nel consiglio di amministrazione (CDA), una dimostrazione dell'impegno verso una leadership <strong>autonoma e conforme</strong> ai principi di etica e anticorruzione. Con un alto tasso di indipendenza, ENAV garantisce una gestione imparziale e focalizzata sugli interessi di tutti gli stakeholder.
          </p>
          <Pie data={governanceData} options={governanceOptions} />
        </div>
      </div>

      <p className="esg-note">
        Per maggiori dettagli sugli impegni di <strong>ENAV</strong> in ambito ESG, esplora le altre pagine del report o scarica il documento completo cliccando sul tasto <strong>Download</strong>.
      </p>
    </section>
  );
};

export default EsgChartsSection;
