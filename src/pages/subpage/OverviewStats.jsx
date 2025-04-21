import React from 'react';
import './OverviewStats.css';

function OverviewStats() {
  const stats = [
    { label: 'Torri di controllo', value: '45', icon: '🏢' },
    { label: 'Centri di Controllo d\'Area', value: '4', icon: '🗺️' },
    { label: 'Sistema radar', value: '45', icon: '📡' },
    { label: 'Voli gestiti annualmente', value: '2.076.456', icon: '✈️' },
    { label: 'Centri di telecomunicazione', value: '137', icon: '📞' },
    { label: 'Picco di voli gestiti in un giorno', value: '7.281', icon: '⏱️' },
    { label: 'Sistemi meteo', value: '55', icon: '🌦️' },
    { label: 'Sistemi di ausilio alla navigazione', value: '194', icon: '🛰️' },
    { label: 'Dipendenti', value: '4.254', icon: '👥' },
    { label: 'Spazio aereo di competenza (km²)', value: '735.500', icon: '🌍' },
    { label: 'Sistemi software di manutenzione', value: '21', icon: '⚙️' },
    { label: 'Installazioni in esercizio operativo ATM', value: '31.181', icon: '🖥️' },
  ];

  return (
    <section className="overview-stats">
           
      <h3 className="overview-heading">L'impegno di ENAV in numeri</h3>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-circle">
              <span>{stat.value}</span>
            </div>
            <p className="stat-label">{stat.label}</p>
            <span className="stat-icon">{stat.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OverviewStats;
