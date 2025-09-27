import React from 'react'
import './App.css'
<<<<<<< HEAD
import ProfilePage from './Pages/ProfilePage'
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.jsx'
import Preperation from './Pages/Preperation.jsx'
import CoreSubjects from './Components/CoreSubjects.jsx'
import AptitudeSection from './Components/Aptitudesection.jsx'

>>>>>>> 8a95cc289e3a82c0df66b258324fb526055e38a4
function App() {
 

  return (
    <>
<<<<<<< HEAD
      <h1>SmartPrep</h1>
      <ProfilePage/>
      
      
=======
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/preperation' element={<Preperation/>}/>
        <Route path='/coresub' element={<CoreSubjects/>}/>
        <Route path='/aptitude' element={<AptitudeSection/>}/>
      </Routes>
    </Router>
>>>>>>> 8a95cc289e3a82c0df66b258324fb526055e38a4
    </>
  )
}

export default App
