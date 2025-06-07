import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Link, RouterProvider } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
// import Navbar from '../src/components/Navbar'
import Home from '../src/Pages/Home'
import Product from '../src/Pages/Product'
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'
import ContactInfo from './pages/ContactInfo'
import ContactForm from './pages/ContactForm'
import ContactLayout from './layout/ContactLayout'
import NotFound from './pages/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, {Jobsloader} from './pages/Jobs'
import JobDetails, { Jobdetailsloader } from './pages/JobDetails'
import Error from './pages/Error'
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<ContactLayout/>}>
      <Route index element={<Contact/>}/>
      <Route path='info' element={<ContactInfo/>}/>
      <Route path='form' element={<ContactForm/>}/>
    </Route>
    <Route path='jobs' element={<JobsLayout/>} errorElement={<Error/>}>
      <Route index element={<Jobs/>} loader={Jobsloader}/>
      <Route path=':id' element={<JobDetails/>} loader={Jobdetailsloader}/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
  </Route>))

export default App