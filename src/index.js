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
import Overview from './pages/Overview';
import ErrorPage from './pages/ErrorPage';

//import Costants for Enviroment / social / Governance
 import './data/route_costants.js';
import FlightEfficencyplan from './pages/FlightEfficencyPlan.jsx';
import CarbonFootprint from './pages/CarbonFootprint.jsx';
import EnergyConsuption from './pages/EnergyConsuption.jsx';
import Investments from './pages/Investments.jsx';
import Objectives from './pages/Objectives.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <><Layout/><Overview/></>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/FEP',
    element: <><Layout/> <FlightEfficencyplan/></>,
  },
  {
    path:'/CarbonFootprint',
    element: <><Layout/> <CarbonFootprint/></>,
  },
  {
    path:'/EnergyConsuption',
    element: <><Layout/> <EnergyConsuption/></>,
  },
  {
    path:'/Investments',
    element: <><Layout/> <Investments/></>,
  },
  {
    path:'/Objectives',
    element: <><Layout/> <Objectives/></>,
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
