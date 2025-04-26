import React from 'react';
import './pagecontent.css';
import './TrasparenzaeComunicazione.css';
import { Link } from 'react-router-dom';

function TrasparenzaeComunicazione() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const reports = [
    { nome: 'Bilancio di Sostenibilità 2023', data: 'Aprile 2024' },
    { nome: 'Relazione Finanziaria Annuale 2023', data: 'Marzo 2024' },
    { nome: 'Dichiarazione Non Finanziaria 2023', data: 'Marzo 2024' },
  ];

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="trasparenza-content">
          <h2>📢 Trasparenza e Comunicazione</h2>

          <div className="trasparenza-description">
            <p>
              Il <strong>Gruppo ENAV</strong> pone la <strong>trasparenza</strong> e la <strong>comunicazione</strong> al centro della propria strategia di governance, garantendo un costante dialogo con gli <strong>stakeholder</strong> e assicurando l'accesso tempestivo a informazioni rilevanti, affidabili e facilmente comprensibili.
            </p>
          </div>

          <h3>📝 Highlights della Comunicazione</h3>
          <div className="trasparenza-highlights">
            <p>
              Nel corso del 2023, ENAV ha intensificato le attività di comunicazione verso gli stakeholder, pubblicando una serie di documenti fondamentali, tra cui il <strong>Bilancio di Sostenibilità</strong>, la <strong>Relazione Finanziaria Annuale</strong> e la <strong>Dichiarazione Non Finanziaria</strong>. 
              Attraverso questi report, l'azienda ha condiviso con investitori, dipendenti e comunità i principali risultati raggiunti, le performance ESG e le strategie future.
            </p>
            <p>
              Inoltre, sono stati organizzati <strong>incontri periodici</strong> con gli stakeholder per discutere di temi chiave quali l'impatto ambientale, le politiche sociali e le pratiche di governance, favorendo un confronto aperto e costruttivo.
            </p>
          </div>

          <h3>📚 Report Pubblicati</h3>
          <table className="trasparenza-table">
            <thead>
              <tr>
                <th>Titolo Report</th>
                <th>Data Pubblicazione</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.nome}</td>
                  <td>{report.data}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>🤝 Eventi e Incontri con Stakeholder</h3>
          <div className="trasparenza-events">
            <div className="event-card">
              <h4>Investor Day 2023</h4>
              <p>Un evento dedicato agli investitori per illustrare le performance finanziarie e le strategie ESG del Gruppo ENAV.</p>
            </div>
            <div className="event-card">
              <h4>Workshop sulla Sostenibilità</h4>
              <p>Un incontro rivolto ai dipendenti e stakeholder per discutere delle iniziative ESG e del piano di sostenibilità 2024-2026.</p>
            </div>
          </div>

          <h3>📊 Indicatori Chiave</h3>
          <div className="trasparenza-indicators">
            <div className="indicator-card">
              <h4>Numero di Report Pubblicati</h4>
              <p><strong>3</strong> report principali pubblicati nel 2023.</p>
            </div>
            <div className="indicator-card">
              <h4>Feedback Stakeholder Gestiti</h4>
              <p>Gestito il <strong>95%</strong> dei feedback ricevuti dagli stakeholder.</p>
            </div>
          </div>

          <div className="trasp-links-wrapper">
              <div className="trasp-links-description">
                <p>Esplora gli altri ambiti <strong>ESG</strong>🌿👥, <strong>Scarica il report 📥</strong> oppure torna alla <strong>Home</strong> 🏠</p>
              </div>
              <div className="trasp-links">
                <Link to="/Enviroment" className="trasp-link-btn" onClick={scrollToTop}>🌿 Vai alla sezione Enviroment</Link>
                <Link to="/Social" className="trasp-link-btn" onClick={scrollToTop}>👥 Vai alla sezione Sociale</Link>
                <Link to="/DownloadReport" className="trasp-link-btn" onClick={scrollToTop}>📥 Vai alla sezione Scarica il report</Link>
                <Link to="/" className="trasp-link-btn" onClick={scrollToTop}>🏠 Vai alla Home</Link>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default TrasparenzaeComunicazione;
