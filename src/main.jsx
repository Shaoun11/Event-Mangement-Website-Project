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
import Testimonial from './Components/Testimonial/Testimonial.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Login from './Components/Authentication/Login.jsx'
import Register from './Components/Authentication/Register.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'


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
    element:<PrivateRoute><Details></Details></PrivateRoute>,
    loader: ()=>fetch('./service.json')
   },
    {
    path:"/about",
    element:<About></About>
   },
    {
    path:"/testimonial",
    element:<PrivateRoute><Testimonial></Testimonial></PrivateRoute>
   },
    {
    path:"/contact",
    element:<PrivateRoute><Contact></Contact></PrivateRoute>
   },
    {
    path:"/login",
    element:<Login></Login>
   },
    {
    path:"/register",
    element:<Register></Register>
   }

  ]}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={createroute}></RouterProvider></AuthProvider>
    
  </React.StrictMode>,
)
