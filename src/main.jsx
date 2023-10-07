import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout.jsx'
import Error404 from './Error404.jsx'
import Home from './Components/Home/Home.jsx'
import Details from './Components/DetailCard/Details.jsx'
import About from './Components/About/About.jsx'


const createroute=createBrowserRouter([
  {
   path:"/",
   element:<MainLayout></MainLayout>,
   errorElement:<Error404></Error404>,
   children:[
    {
    path:"/",
    element:<Home></Home>,
    loader: ()=>fetch('./service.json')
   },
    {
    path:"/details/:id",
    element:<Details></Details>,
    loader: ()=>fetch('./service.json')
   },
    {
    path:"/about",
    element:<About></About>
   }

  ]}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createroute}></RouterProvider>
  </React.StrictMode>,
)
