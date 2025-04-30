/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './sideBar.css';
import { Link } from 'react-router-dom'; // Usa Link di react-router-dom per la navigazione

    // Funzione per scrollare in cima
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
            <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={scrollToTop}>
                 <i>🏠</i>
                 <span>Panoramica ENAV</span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/PianoSostenibilita' className='nav-link' onClick={scrollToTop}>
                 <i>♻️</i>
                 <span>Piano Sostenibilità 2021/2024</span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/PanoramicaESG' className='nav-link' onClick={scrollToTop}>
                 <i>☀️</i>
                 <span>Panoramica ESG</span>
                </Link>
            </li>

            {/* Sezione Environment */}
            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#enviroment-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i>🌿</i> 
                    <span>Environment</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    id='enviroment-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'             
                >
                 <li>
                    <Link to='/Enviroment' onClick={scrollToTop}>
                        <i>📜</i> 
                        <span>Introduzione</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Enviroment/FEP&FRA' onClick={scrollToTop}>
                        <i>✈️</i> 
                        <span>Flight Efficiency Plan & FRA</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Enviroment/CarbonFootprint' onClick={scrollToTop}>
                        <i>🌳</i>
                        <span>Carbon Footprint</span>
                    </Link> 
                 </li>
                 <li>
                    <Link to='/Enviroment/InnovazioneTecnologica' onClick={scrollToTop}>
                        <i>🌐</i> 
                        <span>Innovazione Tecnologica</span>
                    </Link>
                 </li>                   
                 <li>
                    <Link to='/Enviroment/Investimenti' onClick={scrollToTop}>
                        <i>📈</i> 
                        <span>Investimenti</span>
                    </Link>
                 </li>    
                </ul>
            </li>

            {/* Sezione Social  */}
            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#social-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i>👥</i> 
                    <span>Social</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    id='social-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'             
                >
                 <li>
                    <Link to='/Social' onClick={scrollToTop}>
                        <i>📜</i> 
                        <span>Introduzione</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Social/Diversita&Inclusione' onClick={scrollToTop}>
                        <i>🌈</i> 
                        <span>Diversità & Inclusione</span>
                    </Link>                 
                 </li>
                 <li>
                    <Link to='/Social/SviluppoDeiDipendenti' onClick={scrollToTop}>
                        <i>👨‍💼👩‍💼</i> 
                        <span>Sviluppo dei Dipendenti</span>
                    </Link>                 
                 </li>
                 <li>
                    <Link to='/Social/Salute&Sicurezza' onClick={scrollToTop}>
                        <i>🩹</i> 
                        <span>Salute & Sicurezza</span>
                    </Link> 
                 </li>
                 <li>
                    <Link to='/Social/BenessereDeiDipendenti' onClick={scrollToTop}>
                        <i>👨‍👩‍👧‍👦</i> 
                        <span>Benessere dei dipendenti</span>
                    </Link>
                 </li>                   
                 <li>
                    <Link to='/Social/RelazioniComunitarie' onClick={scrollToTop}>
                        <i>🏘️</i> 
                        <span>Relazioni Comunitarie</span>
                    </Link>
                 </li>     
                </ul>
            </li>

            {/* Sezione Governance  */}
            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#governance-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i>🏛️</i> 
                    <span>Governance</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    id='governance-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'             
                >
                 <li>
                    <Link to='/Governance' onClick={scrollToTop}>
                        <i>📜</i> 
                        <span>Introduzione</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Governance/StrutturaDelCDA' onClick={scrollToTop}>
                        <i>🏢</i>
                        <span>Struttura del CDA</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Governance/Etica&Conformita' onClick={scrollToTop}>
                        <i>⚖️</i>
                        <span>Etica & Conformità</span>
                    </Link> 
                 </li>
                 <li>
                 <Link to='/Governance/GestioneDelRischio' onClick={scrollToTop}>
                        <i>🔒</i> 
                        <span>Gestione del Rischio</span>
                    </Link>
                 </li>                   
                 <li>
                 <Link to='/Governance/Compensi&Incentivi' onClick={scrollToTop}>
                        <i>💶</i> 
                        <span>Compensi & Incentivi</span>
                    </Link>
                 </li>  
                 <li>
                 <Link to='/Governance/Trasparenza&Comunicazione' onClick={scrollToTop}>
                        <i>📢</i> 
                        <span>Trasparenza e Comunicazione</span>
                    </Link>                    
                 </li>    
                </ul>
            </li>
            {/* Sezione Dowload report */}
            <li className='nav-item'>
                <Link to='/DownloadReport' className='nav-link' onClick={scrollToTop}>
                 <i>📥</i>
                 <span>Scarica Report Sostenibilità</span>
                </Link>
            </li>

        </ul>
    </aside>
  )
}

export default SideBar
