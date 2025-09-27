import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.jsx'
import Preperation from './Pages/Preperation.jsx'
import CoreSubjects from './Components/CoreSubjects.jsx'
import AptitudeSection from './Components/Aptitudesection.jsx'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/preperation' element={<Preperation/>}/>
        <Route path='/coresub' element={<CoreSubjects/>}/>
        <Route path='/aptitude' element={<AptitudeSection/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
