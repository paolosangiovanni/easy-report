import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './DownloadReport.css';

function DownloadReports() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const openModal = (url) => {
    setPdfUrl(url);
    setModalOpen(true);

    // Lancia confetti
    confetti({
      particleCount: 300,
      spread: 360,
      origin:     {x: Math.random(),
                   y: Math.random() - 0.2
      },
      colors: ['#0c965f', '#f8e473', '#317de0']
    });

    setTimeout(() => {
      confetti({
        particleCount: 300,
        spread: 360,
        origin:     {x: Math.random(),
                     y: Math.random() - 0.2
        },
        colors: ['#d47f11', '#e83434', '#c738b2']
      });
    }, 300);

    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 360,
        origin:{     x: Math.random(),
                     y: Math.random() - 0.2
        },
        colors: ['#4ea7de', '#693a16', '#17bd7b']      
      });
    }, 600);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPdfUrl('');
  };

  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="content-wrapper">
          <h2>📥 Scarica il Report di Sostenibilità</h2>

          <div className="report-cards-container">
            <div className="report-cards-inner">
              <div className="report-card latest-report">
                <div className="badge">⭐ Ultimo Disponibile</div>
                <img src="https://cdn-web.enav.it//content/2024-04/bil_sost_ita_0.jpg" alt="Report 2023" className='img-report-card-2023'/>
                <p>Report di sostenibilità 2023</p>
                <button onClick={() => openModal('https://cdn-web.enav.it//content/2024-05/ENAV_2023_Bilancio%20di%20Sostenibilit%C3%A0_0.pdf')}>
                  Apri nel visualizzatore
                </button>
              </div>

              <div className="report-card">
                <img src="https://cdn-web.enav.it//content/2023-11/EXecutive_Summary.jpg" alt="Report 2022" className='img-report-card-2022'/>
                <p>Report di sostenibilità 2022</p>
                <button onClick={() => openModal('https://cdn-web.enav.it//content/2023-11/ENAV%20EXECUTIVE%20SUMMARY%202022_1.pdf')}>
                  Apri nel visualizzatore
                </button>
              </div>

              <div className="report-card">
                <img src="https://cdn-web.enav.it//content/2022-06/Enav_2021_Bilancio%20di%20Sostenibilita%CC%80%20671x388_0.jpg" alt="Report 2021" className='img-report-card-2021'/>
                <p>Report di sostenibilità 2021</p>
                <button onClick={() => openModal('https://cdn-web.enav.it//content/2022-07/Enav_Sostenibilit%C3%A0_2022_ITA_11072022_pag%20singole_0.pdf')}>
                  Apri nel visualizzatore
                </button>
              </div>
            </div>
          </div>


          {/* Modali con iframe */}
          {modalOpen && (
            <div className="modal-download-overlay" onClick={closeModal}>
              <div className="modal-download-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-download-close" onClick={closeModal}>×</button>
                <iframe
                  src={pdfUrl}
                  title="Visualizzatore PDF"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DownloadReports;
