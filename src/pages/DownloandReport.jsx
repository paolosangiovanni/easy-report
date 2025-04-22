import React from 'react';
import './DownloadReport.css';

function DownloadReports() {
  return (
    <div id="main" className="page-content">
      <div className="main-content">
        <div className="content-wrapper">
          <h2>📥 Scarica il Report di Sostenibilità</h2>
          
          <div className="report-cards">
            <div className="report-card">
              <img src="https://cdn-web.enav.it//content/2024-04/bil_sost_ita_0.jpg?VersionId=f3dff1c9-d173-4ab9-a950-10ff6b69bc6f" alt="Report_2023" className="report-img" />
              <p>Report di sostenibilità 2023</p>
              <a href="https://cdn-web.enav.it//content/2024-05/ENAV_2023_Bilancio%20di%20Sostenibilit%C3%A0_0.pdf?VersionId=586f87f3-fe2c-4881-9867-f2ab90d5846e" download>Download</a>
            </div>
            
            <div className="report-card">
              <img src="https://cdn-web.enav.it//content/2023-11/EXecutive_Summary.jpg?VersionId=446482f8-ae54-4dea-8fab-53e5e09ad96a" alt="Report_2022" className="report-img" />
              <p>Report di sostenibilità 2022</p>
              <a href="https://cdn-web.enav.it//content/2023-11/ENAV%20EXECUTIVE%20SUMMARY%202022_1.pdf?VersionId=d080b4c6-e9b0-4a86-b98d-8d665879d2ad" download>Download</a>
            </div>
            
            <div className="report-card">
              <img src="https://cdn-web.enav.it//content/2022-06/Enav_2021_Bilancio%20di%20Sostenibilita%CC%80%20671x388_0.jpg?VersionId=4adf66c4-60a9-40f1-afe6-bd5113481d69" alt="Report_2021" className="report-img" />
              <p>Report di sostenibilità 2021</p>
              <a href="https://cdn-web.enav.it//content/2022-07/Enav_Sostenibilit%C3%A0_2022_ITA_11072022_pag%20singole_0.pdf?VersionId=7b167310-1b3e-4bb1-86de-6de354c338ce" download>Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadReports;
