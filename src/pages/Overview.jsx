import React from 'react'
import './pagecontent.css'
import './Overview.css'
import EsgOverviewSection from './subpage/EsgOverviewSection';
import EsgChartsSection from './subpage/EsgChartsSection';


function Overview() {
  return (
    <div id='main' className='page-content'>
      
      <div className='main-content'>
      <div className='content-wrapper'>
      <EsgOverviewSection />
      <EsgChartsSection />      
      
      <section className="card-download-report-overview">
      
      <img src="https://cdn-web.enav.it//content/2024-04/bil_sost_ita_0.jpg?VersionId=f3dff1c9-d173-4ab9-a950-10ff6b69bc6f" alt="Report_2023" className="img-report-23" />
      <div className="card-body">
        <p>Bilancio di sostenibilità 2023</p>
        <a href="https://cdn-web.enav.it//content/2024-05/ENAV_2023_Bilancio%20di%20Sostenibilit%C3%A0_0.pdf?VersionId=586f87f3-fe2c-4881-9867-f2ab90d5846e" download className="download-link">Download</a>
      </div>
        </section>
              </div>  
          </div>
    </div>
  )
}

export default Overview