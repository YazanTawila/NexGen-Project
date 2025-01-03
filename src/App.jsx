
// import React from 'react'
import './App.css'


import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogsOpenPage from './pages/BlogsOpenPage'
import BlogsPage from './pages/BlogsPage'
import CareersPage from './pages/CareersPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'



function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/AboutPage' element={<AboutPage/>} />
        <Route path='/BlogsOpenPagePage' element={<BlogsOpenPage/>} />
        <Route path='/BlogsPage' element={<BlogsPage/>} />
        <Route path='/CareersPage' element={<CareersPage/>} />
        <Route path='/ProjectsPage' element={<ProjectsPage/>} />
        <Route path='/ServicesPage' element={<ServicesPage/>} />
        <Route path='/ContactPage' element={<ContactPage/>} />
       
      </Routes>
      
    </>

  )
}

export default App
