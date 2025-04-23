import React from 'react'
import './pagecontent.css'
import './Overview.css'

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

function Overview() {
  return (
    <div id='main' className='page-content'>
      <div className='main-content'>
        <section className="enav-section">
          <div className="enav-container">
            <h2 className="enav-heading">Chi è ENAV <img src="https://companieslogo.com/img/orig/ENAV.MI-2a8230ae.png?t=1720244491" alt="ENAV" className="group-logo" /> ?</h2>
            <p className="enav-text">
              <strong>ENAV S.p.A.</strong>  è la società italiana responsabile della gestione e del controllo del traffico aereo civile, operante su tutto il territorio nazionale. Gestisce oltre <strong>2 milioni di voli all’anno</strong> e garantisce la sicurezza, efficienza e regolarità della navigazione aerea nello spazio aereo italiano.
            </p>
            <p className="enav-text">
              ENAV è quotata alla Borsa di Milano (Euronext Milan) ed è tra le poche società di Air Navigation Service Provider (ANSP) al mondo ad avere un modello <strong>completamente liberalizzato</strong>, operando secondo logiche industriali e concorrenziali.
            </p>
            <p className="enav-text">
              Il Gruppo ENAV è presente anche a livello internazionale attraverso <strong>partecipazioni strategiche</strong> in società che operano nella consulenza, sviluppo di tecnologie ATM (Air Traffic Management), e nella gestione di servizi in paesi come <strong>Emirati Arabi Uniti, Malesia, Brasile</strong> e <strong>Colombia</strong>.
            </p>
            <p className="enav-text">
              La sua visione strategica è guidata dai principi ESG e si sviluppa attraverso investimenti in <strong>sostenibilità ambientale</strong>, <strong>innovazione tecnologica</strong> e <strong>valorizzazione del capitale umano</strong>.
            </p>
            <section className="overview-stats">
              <h3 className="overview-heading">L'impegno di ENAV in numeri</h3>
              <p className="enav-text">Questi numeri rappresentano l’ampiezza e la complessità delle attività di <strong>ENAV</strong>, che quotidianamente gestisce il traffico aereo civile in Italia e all’estero. Dalle torri di controllo ai sistemi radar, passando per le infrastrutture tecnologiche e il capitale umano, ogni dato racconta l’impegno costante nel garantire la sicurezza, l'efficienza e l’innovazione nella gestione dello spazio aereo.
              </p>
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
              <section className="group-structure">
                <h3 className="overview-heading">La struttura del Gruppo ENAV</h3>
                <p className="enav-text"> Il <strong>Gruppo ENAV</strong> è composto da una serie di società controllate e partecipate che operano in ambiti strategici per garantire la gestione sicura ed efficiente del traffico aereo, sia a livello nazionale che internazionale. Questa struttura consente al Gruppo di fornire servizi altamente specializzati, dalla manutenzione tecnologica alla gestione dei droni, fino al monitoraggio globale dei voli. Ogni società contribuisce con le proprie competenze a sostenere la missione di ENAV nel garantire un sistema di navigazione aerea innovativo e sostenibile.
</p>
                <div className="subsidiary-grid">

                  <div className="subsidiary-card">
                    <img src="https://cdn-web.enav.it//content/2021-04/Group-6.svg" alt="ENAV Asia Pacific" className="subsidiary-logo" />
                    <h4 className="subsidiary-title">100% - ENAV Asia Pacific</h4>
                    <p>Sede in Malesia per consulenza e servizi ATM nei paesi asiatici.</p>
                  </div>

                  <div className="subsidiary-card">
                    <img src="https://cdn-web.enav.it//content/2021-04/Group_0.svg" alt="Techno Sky" className="subsidiary-logo" />
                    <h4 className="subsidiary-title">100% - Techno Sky</h4>
                    <p>Gestione hardware/software e assistenza tecnica per infrastrutture e impianti su tutto il territorio nazionale.</p>
                  </div>

                  <div className="subsidiary-card">
                    <img src="https://www.idsairnav.com/wp-content/themes/wp-bootstrap-starter-child/assets/images/logo_IDS.png" alt="IDS AirNav" className="subsidiary-logo" />
                    <h4 className="subsidiary-title">100% - IDS AirNav</h4>
                    <p>Sistemi per l’informazione aeronautica e soluzioni software per il traffico aereo.</p>
                  </div>

                  <div className="subsidiary-card">
                    <img src="https://www.d-flight.it/web-app/assets/images/Logo.png" alt="d-flight" className="subsidiary-logo" />
                    <h4 className="subsidiary-title">60% - d-flight</h4>
                    <p>D-flight gestisce i servizi per i droni (UAV), promuovendo una piattaforma per l’uso sicuro dei velivoli a pilotaggio remoto.</p>
                  </div>

                  <div className="subsidiary-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoR0tFOsVQWH8IR_3TF3Iq4HbA6FKQwpd3g&s" alt="ESSP" className="subsidiary-logo" />
                    <h4 className="subsidiary-title">16,7% - ESSP</h4>
                    <p>Fornisce il servizio europeo EGNOS per la navigazione satellitare.</p>
                  </div>

                  <div className="subsidiary-card">
                    <img src="https://searidgetech.com/wp-content/uploads/2022/02/Aireon_logo.png" alt="Aireon" className="subsidiary-logo" />
                    <h4 className="subsidiary-title">8,6% - Aireon</h4>
                    <p>Realizza un sistema globale per la sorveglianza del traffico aereo via satellite.</p>
                  </div>

                </div>
              </section>
        
          </div>
        </section>
      </div>
    </div>
  );
}

export default Overview;
