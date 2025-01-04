/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './sideBar.css';
import { Link } from 'react-router';
function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
            <li className='nav-item'>
                <Link to='/'className='nav-link' href='/'>
                 <i className='bi bi-house-door'></i>
                 <span>Report Overview</span>
                </Link>
            </li>

            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#enviroment-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i className="bi bi-image-alt bi-menu-button-wide"></i>
                    <span>Enviroment</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    id='enviroment-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'             
                >
                 <li>
                    <Link to='/FEP'>
                        <i className="bi bi-airplane-fill">
                            <span>Flight Efficency Plan</span>
                        </i>
                    </Link>                       
                 </li>
                 
                 <li>
                    <Link to='/CarbonFootprint'>
                        <i className="bi bi-tree-fill">
                            <span>Carbon Footprint</span>
                        </i>
                    </Link> 
                 </li>
                 <li>
                    <Link to='/EnergyConsuption'>
                        <i className="bi bi-lightning-fill">
                            <span>Energy Consumption</span>
                        </i>
                    </Link>
                        
                 </li>                   
                 <li>
                    <Link to='/Investments'>
                        <i className="bi bi-graph-up-arrow">
                            <span>Investments</span>
                        </i>
                    </Link>
                        
                 </li>  
                 <li>
                    <Link to='/Objectives'>
                        <i className="bi bi-bullseye">
                            <span>Objectives</span>
                        </i>
                    </Link>                    
                 </li>    
                </ul>

            </li>

            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#social-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i className="bi bi-people-fill bi-menu-button-wide"></i>
                    <span>Social</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    id='social-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'             
                >
                 <li>
                    <a href='#'>
                        <i className="bi bi-gender-trans">
                            <span>Diversity & Inclusion</span>
                        </i>
                    </a>                       
                 </li>
                 
                 <li>
                    <a href='#'>
                        <i className="bi bi-bandaid-fill">
                            <span>Health & Safety</span>
                        </i>
                    </a> 
                 </li>
                 <li>
                    <a href='#'>
                        <i className="bi bi-person-plus-fill">
                            <span>Employee Wellbeing</span>
                        </i>
                    </a>
                        
                 </li>                   
                 <li>
                    <a href='#'>
                        <i className="bi bi-people-fill">
                            <span>Community Relations</span>
                        </i>
                    </a>
                        
                 </li>  
                 <li>
                    <a href='#'>
                        <i className="bi bi-bullseye">
                            <span>Objectives</span>
                        </i>
                    </a>                    
                 </li>    
                </ul>

            </li>

            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#governance-nav'
                    data-bs-toggle='collapse'
                    href='#' >
                    <i className="bi bi-people-fill bi-menu-button-wide"></i>
                    <span>Governance</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                    id='governance-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'             
                >
                 <li>
                    <a href='#'>
                        <i className="bi bi-buildings-fill">
                            <span>Board Structure</span>
                        </i>
                    </a>                       
                 </li>
                 
                 <li>
                    <a href='#'>
                        <i className="bi bi-feather">
                            <span>Ethics & Compliance</span>
                        </i>
                    </a> 
                 </li>
                 <li>
                    <a href='#'>
                        <i className="bi bi-exclamation-diamond-fill">
                            <span>Risk Management</span>
                        </i>
                    </a>
                        
                 </li>                   
                 <li>
                    <a href='#'>
                        <i className="bi bi-currency-euro">
                            <span>Compensation & Incentives</span>
                        </i>
                    </a>
                        
                 </li>  
                 <li>
                    <a href='#'>
                        <i className="bi bi-transparency">
                            <span>Transparency & Communication</span>
                        </i>
                    </a>                    
                 </li>    
                </ul>

            </li>
        </ul>
    </aside>
  )
}

export default SideBar