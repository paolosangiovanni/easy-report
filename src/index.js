//Import react Dom e React
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';

//import icone lib remix e bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Layout from './components/Layout';

//import ReactRouter
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';

//Import Costanti Homepage
import Overview from './pages/Overview';
import ErrorPage from './pages/ErrorPage';

//Import Costanti per Piano Sostenibilità 21-24

import PianoSostenibilita from './pages/PianoSostenibilita';

//Import Costanti per Piano Sostenibilità 21-24

import PanoramicaESG from './pages/PanoramicaESG';

//Import Costanti per Download Report

import DownloadReport from './pages/DownloandReport';

//Import Costanti per Intro
import EnviromentIntro from './pages/env-pages/EnvironmentIntro.jsx';
import SocialIntro from './pages/soc-pages/SocialIntro.jsx';
import GovernanceIntro from './pages/gov-pages/GovernanceIntro.jsx';

//import Costanti per Enviroment
import './data/route_costants.js';
import FlightEfficencyplan from './pages/env-pages/FlightEfficencyPlan.jsx';
import CarbonFootprint from './pages/env-pages/CarbonFootprint.jsx';
import InnovazioneTecnologica from './pages/env-pages/InnovazioneTecnologica.jsx';
import Investimenti from './pages/env-pages/Investimenti.jsx';
import Obiettivi from './pages/env-pages/Obiettivi.jsx';





const router = createBrowserRouter([

  //Home / Panoramica ENAV
  {
    path:'/',
    element: <><Layout/><Overview/></>,
    errorElement: <ErrorPage/>
  },

  // Piano Sostenibilità 21-24
  {
    path:'/PianoSostenibilita',
    element: <><Layout/><PianoSostenibilita/></>,
  },
  // Panoramica ESG
  {
    path:'/PanoramicaESG',
    element: <><Layout/><PanoramicaESG/></>,
  },

  //Download Report

  {
    path:'/DownloadReport',
    element: <><Layout/><DownloadReport/></>,
  },

  //Intro page
  {
    path: '/Enviroment',
    element: <><Layout /><EnviromentIntro/></>,
  },
  {
    path: '/Social',
    element: <><Layout /><SocialIntro /></>,
  },
  {
    path: '/Governance',
    element: <><Layout /><GovernanceIntro /></>,
  },


  //Sottopagine Enviromennt

  {
    path:'/Enviroment/FEP&FRA',
    element: <><Layout/> <FlightEfficencyplan/></>,
  },
  {
    path:'/Enviroment/CarbonFootprint',
    element: <><Layout/> <CarbonFootprint/></>,
  },
  {
    path:'/Enviroment/InnovazioneTecnologica',
    element: <><Layout/> <InnovazioneTecnologica/></>,
  },
  {
    path:'/Enviroment/Investimenti',
    element: <><Layout/> <Investimenti/></>,
  },
  {
    path:'/Enviroment/Obiettivi',
    element: <><Layout/> <Obiettivi/></>,
  }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
