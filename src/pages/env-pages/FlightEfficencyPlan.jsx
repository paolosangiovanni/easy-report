import React from 'react';
import './pagecontent.css';
import './FlightEfficencyPlan.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Link } from 'react-router-dom';  

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FlightEfficiencyPlan = () => {
  const flightData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Riduzione delle tratte FEP (Km)',
        data: [12710000, 21750500, 21274500], // Dati per le tratte
        backgroundColor: '#0c965f',
      },
    ],
  };

  const fuelData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Riduzione carburante FEP (Kg)',
        data: [52789000, 79500000, 80739000], // Dati per il carburante
        backgroundColor: '#a6d96a',
      },
    ],
  };

  const co2Data = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Riduzione emissioni CO2 FEP (Kg)',
        data: [166285350, 250425000, 255135240], // Dati per CO2
        backgroundColor: '#f8e473',
      },
    ],
  };

  const fraFlightData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Riduzione delle tratte FRA (Km)',
        data: [48232000, 151930800, 205780050], // Dati per le tratte
        backgroundColor: '#0c965f',
      },
    ],
  };

  const fraFuelData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Riduzione carburante FRA (Kg)',
        data: [10829000, 16735000, 18352000], // Dati per il carburante
        backgroundColor: '#a6d96a',
      },
    ],
  };

  const fraCo2Data = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Riduzione emissioni CO2 FRA (Kg)',
        data: [205780050, 75000000, 229100000], // Dati per CO2
        backgroundColor: '#f8e473',
      },
    ],
  };

      // Funzione per scrollare in cima
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div id="main" className="page-content">
      <div className='main-content'>
        <div className="flight-efficiency-plan">
          <h2>✈️ Flight Efficiency Plan (FEP)</h2>
          <div className="description">
            <p>
              Il <strong>Flight Efficiency Plan </strong> è un progetto strategico che si inserisce nel programma europeo <strong>Single European Sky</strong>. Il piano mira a ottimizzare l'uso dello spazio aereo, migliorando l'efficienza energetica dei voli e riducendo l'impatto ambientale delle operazioni. Il FEP è uno degli strumenti principali di ENAV per rispondere alle sfide del traffico aereo in continua crescita, puntando a un futuro più sostenibile per l'aviazione civile.
            </p>
            <p>
              Nel <strong>FEP</strong>, ENAV si concentra su diversi obiettivi strategici, tra cui la riduzione delle distanze di volo, l'ottimizzazione dei profili di volo e la riduzione del consumo di carburante e delle emissioni di CO2. Grazie a iniziative come il progetto <strong>Free Route Airspace (FRA-IT)</strong>, il piano mira a ridurre l'effetto serra dell'industria aerea senza compromettere la sicurezza.
            </p>
            <p>
              Uno degli aspetti più innovativi del <strong>FEP</strong> è la collaborazione internazionale attraverso il programma <strong>Single European Sky (SES)</strong>, che prevede una gestione coordinata dello spazio aereo a livello europeo per migliorare l'efficienza delle rotte, ridurre il consumo di carburante e abbattere le emissioni in modo sistematico.
            </p>
          </div>

          <div className="charts-container">
            <div className="chart-card">
              <h3>✈️ Riduzione delle tratte (Km)</h3>
              <p className="chart-description">
                Il <strong>Flight Efficiency Plan</strong> ha portato ad una continua ottimizzazione delle rotte, con un notevole abbattimento delle distanze percorse dai voli. Nel grafico sottostante si può osservare come la riduzione delle tratte sia progressiva dal 2021 al 2023, con un miglioramento continuo dell'efficienza operativa grazie a tecnologie avanzate e nuove rotte dirette.
              </p>
              <Bar data={flightData} />
            </div>

            <div className="chart-card">
              <h3>🔥 Riduzione carburante (Kg)</h3>
              <p className="chart-description">
                La riduzione del consumo di carburante è uno degli obiettivi principali del <strong>Flight Efficiency Plan</strong>, per migliorare l'efficienza energetica e ridurre l'impatto ambientale. Il grafico mostra il risparmio in carburante dal 2021 al 2023, un chiaro segno di come l'adozione di profili di volo più efficienti e l'uso di tecnologie avanzate abbiano ridotto notevolmente l'uso del carburante.
              </p>
              <Bar data={fuelData} />
            </div>

            <div className="chart-card">
              <h3>🌍 Riduzione emissioni CO2 (Kg)</h3>
              <p className="chart-description">
                La riduzione delle emissioni di CO2 è fondamentale per il raggiungimento degli obiettivi di sostenibilità di ENAV. Nel grafico sottostante sono riportati i dati relativi alle emissioni di CO2 per gli anni 2021, 2022 e 2023, con una continua diminuzione grazie alla maggiore efficienza dei voli e alla riduzione della distanza percorsa.
              </p>
              <Bar data={co2Data} />
            </div>
          </div>

          {/*Sezione Free Route Airspace Italy (FRA) */}
          <h2>🌍 Free Route Airspace Italy (FRA)</h2>
          <div className="description">
            <p>
              Il <strong>Free Route Airspace Italy (FRA-IT)</strong> è un progetto rivoluzionario implementato da ENAV nel 2016, come primo ANSP in Europa, che consente agli aeromobili in sorvolo, ad una quota di 9.000 metri, di attraversare i cieli italiani seguendo un percorso diretto e svincolato dal network di rotte convenzionali.
            </p>
            <p>
              Questo progetto consente di ridurre il consumo di carburante e migliorare il profilo energetico del volo, mantenendo intatti i livelli di safety.
            </p>
          </div>

          <div className="charts-container">
            <div className="chart-card">
              <h3>✈️ Riduzione delle tratte (Km)</h3>
              <p className="chart-description">
                Il progetto FRA ha portato a una continua ottimizzazione delle tratte, con un notevole abbattimento delle distanze percorse dai voli. Dal 2021 al 2023, la riduzione delle tratte è stata costante, con un miglioramento dell'efficienza operativa grazie all'uso di nuove rotte dirette.
              </p>
              <Bar data={fraFlightData} />
            </div>

            <div className="chart-card">
              <h3>🔥 Riduzione carburante (Kg)</h3>
              <p className="chart-description">
                Il progetto FRA ha permesso una significativa riduzione del consumo di carburante. L'adozione di rotte dirette e profili di volo ottimizzati ha ridotto notevolmente l'uso del carburante dal 2021 al 2023.
              </p>
              <Bar data={fraFuelData} />
            </div>

            <div className="chart-card">
              <h3>🏭 Riduzione emissioni CO2 (Kg)</h3>
              <p className="chart-description">
                La riduzione delle emissioni di CO2 è un obiettivo fondamentale del progetto FRA. Nel grafico sottostante si evidenzia la continua diminuzione delle emissioni grazie all'adozione delle rotte dirette e alla maggiore efficienza operativa.
              </p>
              <Bar data={fraCo2Data} />
            </div>
          </div>
          {/* Sezione con il link alla sezione FEP e FRA */}
          <div className="next-section">
            <p>Per approfondire L’impegno per la <strong>decarbonizzazione delle attività del Gruppo ENAV</strong>, vedi la sezione successiva.</p>
            <Link to="/Enviroment/CarbonFootprint" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlightEfficiencyPlan;
