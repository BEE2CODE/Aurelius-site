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



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Rootpage/>,
//     children:[
//       {
//         path: "/shop",
//         element:<Shop/>,
//         children:[
//           {
//             path: ":id",
//             element:<div>ftrrttrrgttrt5rhrtthhrrrthrhr</div>,
          
//           }
//         ]
//       },
//       {
//         path: "/backtoschool",
//         element:<Backtoschool/>,
//       },
//       {
//         path: "/about",
//         element:<About/>,
//       },
//     ]
//   },  {
//   path: '/about2',
//   element: <div>jjjjj</div>
//     }
  
 
// ]);

// const router = createBrowserRouter([
// createRoutesFromElements(
//   <>
//   <Route>
//     {/* <Route path="/" element={< />} /> */}
//     <Route path="/" index element={<Rootpage>
//       <Shop /></Rootpage>} />
//     <Route path="/shop/:id" element={<Productdetails />} />
//     <Route path="/backtoschool" element={<Backtoschool />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/about2" element={<div>jjjjj</div>} />

//     <Route path="*" element={<div> 404 home</div>}></Route>
//   </Route>
//   </>
// )
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)

