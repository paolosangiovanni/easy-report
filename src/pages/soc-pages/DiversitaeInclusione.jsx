import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './DiversitaeInclusione.css';

function DiversitaeInclusione() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (topic) => {
    setActiveModal(activeModal === topic ? null : topic);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="diversity-content">
          <h2>🌈 Diversità e Inclusione in ENAV</h2>
          <div className="diversity-description">
            <p>
              Il <strong>Gruppo ENAV</strong> promuove la <strong>diversità</strong> e l’<strong>inclusione</strong> come valori imprescindibili per costruire un ambiente di lavoro <strong>equo</strong>, <strong>collaborativo</strong> e <strong>rispettoso</strong> delle differenze individuali. 
              Questo approccio mira a valorizzare le competenze di ognuno, garantendo pari opportunità e favorendo l'innovazione.
            </p>
            <p>
              ENAV si è dotata di una <strong>Policy sulla diversità e l’inclusione</strong>, allineata ai principali standard internazionali come la <em>Carta per le pari opportunità</em> e le linee guida ONU. La policy è supportata da un <strong>Comitato Pari Opportunità</strong>, da un team HR dedicato e da iniziative di formazione per i manager e il personale, volte a sensibilizzare sul valore della diversità.
            </p>
            <p>
              Tra le principali attività figurano la <strong>raccolta di dati aziendali</strong> per monitorare l’efficacia delle politiche inclusive, l’<strong>analisi dei feedback</strong> dei dipendenti attraverso survey dedicate, e la partecipazione a programmi come il <strong>Progetto STEM</strong> per avvicinare le giovani generazioni (in particolare le ragazze) alle carriere scientifiche.
            </p>
          </div>

          <h3>Progetti e Iniziative Principali 🚀</h3>
          <div className="diversity-initiatives-grid">
            <div className="diversity-initiative-card" onClick={() => toggleModal('women')}>
              <span role="img" aria-label="STEM">👩‍💻</span>
              <h4>Progetto Women in STEM</h4>
              <button className={`diversity-modal-btn ${activeModal === 'women' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="diversity-initiative-card" onClick={() => toggleModal('catalogo')}>
              <span role="img" aria-label="Catalogo">📚</span>
              <h4>Catalogo Diversity Management</h4>
              <button className={`diversity-modal-btn ${activeModal === 'catalogo' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="diversity-initiative-card" onClick={() => toggleModal('survey')}>
              <span role="img" aria-label="Survey">📊</span>
              <h4>Survey Diversity e Inclusione</h4>
              <button className={`diversity-modal-btn ${activeModal === 'survey' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="diversity-initiative-card" onClick={() => toggleModal('enavScuole')}>
              <span role="img" aria-label="Scuole">🏫</span>
              <h4>ENAV incontra le scuole</h4>
              <button className={`diversity-modal-btn ${activeModal === 'enavScuole' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal && (
            <div className="diversity-modal-overlay" onClick={() => setActiveModal(null)}>
              <div className="diversity-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="diversity-modal-close" onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'women' && (
                  <>
                    <h3>👩‍💻 Progetto Women in STEM</h3>
                    <p>ENAV promuove la partecipazione femminile nelle carriere <strong>STEM</strong>, sensibilizzando le giovani studentesse attraverso eventi come "My Future" e programmi dedicati. L'obiettivo è ispirare le nuove generazioni e abbattere i pregiudizi di genere nel mondo scientifico e tecnologico.</p>
                  </>
                )}
                {activeModal === 'catalogo' && (
                  <>
                    <h3>📚 Catalogo Diversity Management</h3>
                    <p>Un percorso formativo rivolto al <strong>middle management</strong> per promuovere pratiche di gestione inclusiva e una cultura aziendale consapevole. Include workshop come "4 Weeks Inclusion" e strumenti per sviluppare team diversificati e coesi.</p>
                  </>
                )}
                {activeModal === 'survey' && (
                  <>
                    <h3>📊 Survey Diversity e Inclusione</h3>
                    <p>La survey annuale coinvolge tutte le <strong>strutture organizzative</strong> di ENAV per raccogliere feedback sull’esperienza di inclusione e parità in azienda, individuando aree di miglioramento per azioni mirate.</p>
                  </>
                )}
                {activeModal === 'enavScuole' && (
                  <>
                    <h3>🏫 ENAV incontra le scuole</h3>
                    <p>Progetto volto a favorire l'incontro tra ENAV e le <strong>scuole secondarie</strong> italiane per promuovere il mondo aeronautico e le carriere STEM. Nel 2023 sono state coinvolte <strong>40 scuole</strong> con oltre <strong>2000 studenti</strong> in visite e orientamenti.</p>
                  </>
                )}
              </div>
            </div>
          )}

            <div className="diversity-next-section">
            <p>Per approfondire il tema dello <strong>Sviluppo dei Dipendenti</strong> e scoprire le iniziative di formazione e crescita professionale, visita la sezione dedicata 👨‍💼👩‍💼.</p>
            <Link to="/Social/SviluppoDeiDipendenti" className="arrow-link" onClick={scrollToTop}>
                <button className="down-arrow-btn">↓</button>
            </Link>
            </div>

        </div>
      </div>
    </div>
  );
}

export default DiversitaeInclusione;