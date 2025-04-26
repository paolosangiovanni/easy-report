import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pagecontent.css';
import './BenesseredeiDipendenti.css';

function BenessereDeiDipendenti() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (topic) => {
    setActiveModal(activeModal === topic ? null : topic);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="benessere-content">
          <h2>👨‍👩‍👧‍👦 Benessere dei Dipendenti</h2>
          <div className="benessere-description">
  
  <p>
    Il <strong>Gruppo ENAV</strong> riconosce che il <strong>benessere delle persone</strong> rappresenta un pilastro fondamentale per garantire la <strong>soddisfazione</strong> dei dipendenti, il <strong>successo aziendale</strong> e la costruzione di un <strong>ambiente di lavoro sereno</strong> e produttivo. La salute fisica e mentale, la sicurezza economica e la conciliazione tra vita professionale e privata sono considerati elementi imprescindibili nella strategia di sostenibilità dell’azienda.
  </p>
  <p>
    Attraverso l’adozione di <strong>politiche di welfare innovative</strong> e inclusive, ENAV mette a disposizione dei propri dipendenti un ampio ventaglio di <strong>benefit</strong> e <strong>servizi</strong> che spaziano dalla previdenza integrativa alla copertura sanitaria, passando per il supporto alla genitorialità e programmi di <strong>work-life balance</strong>. Tali iniziative, integrate in un sistema strutturato e coerente, hanno l'obiettivo di rispondere in maniera puntuale alle <strong>esigenze personali e familiari</strong> dei collaboratori, favorendo un clima aziendale positivo e una maggiore motivazione.
  </p>
  <p>
    Con il progetto <strong>Yes We Care</strong> e altre iniziative dedicate al <strong>benessere psicofisico</strong>, ENAV si impegna a promuovere una <strong>cultura della prevenzione</strong> e del <strong>benessere diffuso</strong>, garantendo ai propri dipendenti non solo strumenti di tutela, ma anche opportunità di crescita personale e professionale.
  </p>
</div>

          <h3>Welfare Aziendale 💚</h3>
          <div className="benessere-canva">
            <div className="benessere-item" onClick={() => toggleModal('politicheSociali')}>
              <h4>🏦 Politiche Sociali</h4>
              <button className={`benessere-modal-btn ${activeModal === 'politicheSociali' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="benessere-item" onClick={() => toggleModal('politicheAssicurative')}>
              <h4>🛡️ Politiche Assicurative</h4>
              <button className={`benessere-modal-btn ${activeModal === 'politicheAssicurative' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="benessere-item" onClick={() => toggleModal('salute')}>
              <h4>💙 Salute</h4>
              <button className={`benessere-modal-btn ${activeModal === 'salute' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="benessere-item" onClick={() => toggleModal('famiglia')}>
              <h4>👨‍👩‍👧‍👦 Famiglia</h4>
              <button className={`benessere-modal-btn ${activeModal === 'famiglia' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="benessere-item" onClick={() => toggleModal('workLife')}>
              <h4>⚖️ Work-Life Balance</h4>
              <button className={`benessere-modal-btn ${activeModal === 'workLife' ? 'open' : ''}`}>&#43;</button>
            </div>
            <div className="benessere-item" onClick={() => toggleModal('moneySaving')}>
              <h4>💰 Money Saving</h4>
              <button className={`benessere-modal-btn ${activeModal === 'moneySaving' ? 'open' : ''}`}>&#43;</button>
            </div>
          </div>

          {activeModal && (
            <div className="benessere-modal-overlay" onClick={() => setActiveModal(null)}>
              <div className="benessere-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="benessere-modal-close" onClick={() => setActiveModal(null)}>×</button>
                {activeModal === 'politicheSociali' && (
                  <>
                    <h3>🏦 Politiche Sociali</h3>
                    <p>Il Gruppo ENAV, attraverso le sue <strong>politiche sociali</strong>, contribuisce attivamente al fondo pensionistico integrativo versando un contributo pari al 3% della retribuzione mensile del dipendente che aderisce volontariamente al piano. Questo beneficio si aggiunge al 2% versato dal dipendente stesso, con l'obiettivo di costruire un futuro previdenziale più solido. Tale misura testimonia l'attenzione di ENAV per il benessere a lungo termine delle proprie persone, garantendo sicurezza economica anche dopo la fine dell'attività lavorativa.</p>
                  </>
                )}
                {activeModal === 'politicheAssicurative' && (
                  <>
                    <h3>🛡️ Politiche Assicurative</h3>
                    <p>Le <strong>politiche assicurative</strong> di ENAV offrono una copertura completa per il dipendente e la sua famiglia. La <strong>Polizza Sanitaria Integrativa</strong> include rimborsi per visite specialistiche, esami diagnostici, ricoveri ospedalieri e cure odontoiatriche. La <strong>Polizza Infortuni</strong>, invece, tutela il lavoratore contro eventi accidentali sia durante l'attività lavorativa che al di fuori di essa, garantendo un supporto economico in caso di eventi imprevisti che possano compromettere il benessere personale e familiare.</p>
                  </>
                )}
                {activeModal === 'salute' && (
                  <>
                    <h3>💙 Salute</h3>
                    <p>Il progetto <strong>Yes We Care</strong> è un'iniziativa di ampio respiro che promuove la salute fisica e mentale dei dipendenti di ENAV. Attraverso la collaborazione con enti specializzati, vengono organizzati webinar informativi, distribuiti decaloghi per la prevenzione di patologie comuni e promosse campagne di sensibilizzazione su tematiche legate al benessere psicofisico. Tra le attività proposte vi sono sessioni di mindfulness, consulenze psicologiche e programmi di promozione di stili di vita salutari, con l'obiettivo di creare una cultura aziendale attenta al benessere integrale della persona.</p>
                  </>
                )}
                {activeModal === 'famiglia' && (
                  <>
                    <h3>👨‍👩‍👧‍👦 Famiglia</h3>
                    <p>ENAV sostiene la famiglia con <strong>politiche di congedo parentale</strong> tra le più avanzate del settore. Oltre a quanto previsto dalla normativa nazionale, l'azienda riconosce una retribuzione fino all'80% per un mese di congedo parentale da fruire entro i primi sei anni di vita del bambino, offrendo inoltre soluzioni flessibili che si adattano alle diverse esigenze familiari. Sono previsti anche supporti specifici per le famiglie adottive, a conferma dell'impegno di ENAV nel favorire la genitorialità e l'equilibrio tra vita privata e professionale.</p>
                  </>
                )}
                {activeModal === 'workLife' && (
                  <>
                    <h3>⚖️ Work-Life Balance</h3>
                    <p>Le politiche di <strong>Work-Life Balance</strong> di ENAV sono pensate per sostenere i dipendenti nella gestione armoniosa tra lavoro e vita privata. Tra le iniziative principali vi sono le <strong>ferie solidali</strong>, che consentono ai lavoratori di donare giorni di ferie a colleghi che si trovano in situazioni di particolare necessità. Queste misure si integrano con altri strumenti di flessibilità oraria e di conciliazione, volti a promuovere un ambiente di lavoro inclusivo e rispettoso delle esigenze personali.</p>
                  </>
                )}
                {activeModal === 'moneySaving' && (
                  <>
                    <h3>💰 Money Saving</h3>
                    <p>Attraverso la sezione <strong>Money Saving</strong>, ENAV mette a disposizione dei dipendenti diverse soluzioni per ottimizzare le risorse economiche. Tra queste, la possibilità di convertire il <strong>Premio di Risultato</strong> in servizi di welfare aziendale, l'accesso a portali di scontistica per acquisti in convenzione e la distribuzione di buoni pasto digitali. Tali strumenti mirano a migliorare il potere d'acquisto e il benessere finanziario dei dipendenti, contribuendo al miglioramento della qualità della vita sia in ambito lavorativo che privato.</p>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="benessere-next-section">
            <p>Per scoprire le <strong>Relazioni Comunitarie</strong> di ENAV, visita la sezione dedicata 🏘️.</p>
            <Link to="/Social/RelazioniComunitarie" className="arrow-link" onClick={scrollToTop}>
              <button className="down-arrow-btn">↓</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenessereDeiDipendenti;
