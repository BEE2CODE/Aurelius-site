import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Rootpage from './pages/rootpage.jsx'
import About from './pages/about.jsx'
import Shop from './pages/shop.jsx'
import Backtoschool from './pages/backtoschool.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Productdetails from './components/productdetails.jsx'
import App from './App.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)

