import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

//import icone lib remix e bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import dei componenti e delle pagine
import Layout from './components/Layout.jsx';
import Overview from './pages/Overview.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PianoSostenibilita from './pages/PianoSostenibilita.jsx';
import PanoramicaESG from './pages/PanoramicaESG.jsx';
import DownloadReport from './pages/DownloandReport.jsx';
import EnviromentIntro from './pages/env-pages/EnvironmentIntro.jsx';
import SocialIntro from './pages/soc-pages/SocialIntro.jsx';
import GovernanceIntro from './pages/gov-pages/GovernanceIntro.jsx';

import FlightEfficencyplan from './pages/env-pages/FlightEfficencyPlan.jsx';
import CarbonFootprint from './pages/env-pages/CarbonFootprint.jsx';
import InnovazioneTecnologica from './pages/env-pages/InnovazioneTecnologica.jsx';
import Investimenti from './pages/env-pages/Investimenti.jsx';

import DiversitaEInclusione from './pages/soc-pages/DiversitaeInclusione.jsx';
import SviluppodeiDipendenti from './pages/soc-pages/SviluppodeiDipendenti.jsx';
import SaluteESicurezza from './pages/soc-pages/SaluteeSicurezza.jsx';
import BenessereDeiDipendenti from './pages/soc-pages/BenesseredeiDipendenti.jsx';
import RelazioniComunitarie from './pages/soc-pages/RelazioniComunitarie.jsx';

import StrutturadelCDA from './pages/gov-pages/StrutturadelCDA.jsx';
import EticaeConformità from './pages/gov-pages/EticaeConformità.jsx';
import GestioneDelRischio from './pages/gov-pages/GestionedelRischio.jsx';
import CompensieIncentivi from './pages/gov-pages/CompensieIncentivi.jsx';
import TrasparenzaeComunicazione from './pages/gov-pages/TrasparenzaeComunicazione.jsx';

// Definizione delle rotte
const router = createHashRouter([
  { path: '/', element: <Layout><Overview /></Layout>, errorElement: <ErrorPage /> },
  { path: '/PianoSostenibilita', element: <Layout><PianoSostenibilita /></Layout> },
  { path: '/PanoramicaESG', element: <Layout><PanoramicaESG /></Layout> },
  { path: '/DownloadReport', element: <Layout><DownloadReport /></Layout> },
  { path: '/Enviroment', element: <Layout><EnviromentIntro /></Layout> },
  { path: '/Social', element: <Layout><SocialIntro /></Layout> },
  { path: '/Governance', element: <Layout><GovernanceIntro /></Layout> },

  // Sottopagine Environment
  { path: '/Enviroment/FEP&FRA', element: <Layout><FlightEfficencyplan /></Layout> },
  { path: '/Enviroment/CarbonFootprint', element: <Layout><CarbonFootprint /></Layout> },
  { path: '/Enviroment/InnovazioneTecnologica', element: <Layout><InnovazioneTecnologica /></Layout> },
  { path: '/Enviroment/Investimenti', element: <Layout><Investimenti /></Layout> },

  // Sottopagine Social
  { path: '/Social/Diversita&Inclusione', element: <Layout><DiversitaEInclusione /></Layout> },
  { path: '/Social/SviluppoDeiDipendenti', element: <Layout><SviluppodeiDipendenti /></Layout> },
  { path: '/Social/Salute&Sicurezza', element: <Layout><SaluteESicurezza /></Layout> },
  { path: '/Social/BenessereDeiDipendenti', element: <Layout><BenessereDeiDipendenti /></Layout> },
  { path: '/Social/RelazioniComunitarie', element: <Layout><RelazioniComunitarie /></Layout> },

  // Sottopagine Governance
  { path: '/Governance/StrutturaDelCDA', element: <Layout><StrutturadelCDA /></Layout> },
  { path: '/Governance/Etica&Conformita', element: <Layout><EticaeConformità /></Layout> },
  { path: '/Governance/GestioneDelRischio', element: <Layout><GestioneDelRischio /></Layout> },
  { path: '/Governance/Compensi&Incentivi', element: <Layout><CompensieIncentivi /></Layout> },
  { path: '/Governance/Trasparenza&Comunicazione', element: <Layout><TrasparenzaeComunicazione /></Layout> },
]);

// Componente principale dell'applicazione
function App() {
  return <RouterProvider router={router} />;
}

export default App;
