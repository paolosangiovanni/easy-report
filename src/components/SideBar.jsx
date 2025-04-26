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

            {/* Environment Section with Intro Page */}
            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#enviroment-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i>🌿</i> {/* Icona Unicode per l'ambiente */}
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
                        <i>📜</i> {/* Icona di introduzione */}
                        <span>Introduzione</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Enviroment/FEP&FRA' onClick={scrollToTop}>
                        <i>✈️</i> {/* Icona per il piano di efficienza */}
                        <span>Flight Efficiency Plan & FRA</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Enviroment/CarbonFootprint' onClick={scrollToTop}>
                        <i>🌳</i> {/* Icona per l'impronta di carbonio */}
                        <span>Carbon Footprint</span>
                    </Link> 
                 </li>
                 <li>
                    <Link to='/Enviroment/InnovazioneTecnologica' onClick={scrollToTop}>
                        <i>🌐</i> {/* Icona per il consumo di energia */}
                        <span>Innovazione Tecnologica</span>
                    </Link>
                 </li>                   
                 <li>
                    <Link to='/Enviroment/Investimenti' onClick={scrollToTop}>
                        <i>📈</i> {/* Icona per gli investimenti */}
                        <span>Investimenti</span>
                    </Link>
                 </li>    
                </ul>
            </li>

            {/* Social Section with Intro Page */}
            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#social-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i>👥</i> {/* Icona per la sezione Social */}
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
                        <i>📜</i> {/* Icona di introduzione per Social */}
                        <span>Introduzione</span>
                    </Link>                       
                 </li>
                 <li>
                    <Link to='/Social/Diversita&Inclusione' onClick={scrollToTop}>
                        <i>🌈</i> {/* Icona per la diversità e l'inclusione */}
                        <span>Diversità & Inclusione</span>
                    </Link>                 
                 </li>
                 <li>
                    <Link to='/Social/SviluppoDeiDipendenti' onClick={scrollToTop}>
                        <i>👨‍💼👩‍💼</i> {/* Icona per la diversità e l'inclusione */}
                        <span>Sviluppo dei Dipendenti</span>
                    </Link>                 
                 </li>
                 <li>
                    <Link to='/Social/Salute&Sicurezza' onClick={scrollToTop}>
                        <i>🩹</i> {/* Icona per la salute e la sicurezza */}
                        <span>Salute & Sicurezza</span>
                    </Link> 
                 </li>
                 <li>
                    <Link to='/Social/BenessereDeiDipendenti' onClick={scrollToTop}>
                        <i>👨‍👩‍👧‍👦</i> {/* Icona per il benessere dei dipendenti */}
                        <span>Benessere dei dipendenti</span>
                    </Link>
                 </li>                   
                 <li>
                    <Link to='/Social/RelazioniComunitarie' onClick={scrollToTop}>
                        <i>🏘️</i> {/* Icona per le relazioni comunitarie */}
                        <span>Relazioni Comunitarie</span>
                    </Link>
                 </li>     
                </ul>
            </li>

            {/* Governance Section with Intro Page */}
            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#governance-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i>🏛️</i> {/* Icona per la sezione Governance */}
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
                        <i>📜</i> {/* Icona di introduzione per Governance */}
                        <span>Introduzione</span>
                    </Link>                       
                 </li>
                 <li>
                    <a href='#'>
                        <i>🏢</i> {/* Icona per la struttura del consiglio */}
                        <span>Struttura del CDA</span>
                    </a>                       
                 </li>
                 <li>
                    <a href='#'>
                        <i>⚖️</i> {/* Icona per etica e conformità */}
                        <span>Etica e Conformità</span>
                    </a> 
                 </li>
                 <li>
                    <a href='#'>
                        <i>🔒</i> {/* Icona per la gestione del rischio */}
                        <span>Gestione del Rischio</span>
                    </a>
                 </li>                   
                 <li>
                    <a href='#'>
                        <i>💶</i> {/* Icona per compensi e incentivi */}
                        <span>Compensi e Incentivi</span>
                    </a>
                 </li>  
                 <li>
                    <a href='#'>
                        <i>📢</i> {/* Icona per trasparenza e comunicazione */}
                        <span>Trasparenza e Comunicazione</span>
                    </a>                    
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
