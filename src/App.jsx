import React from 'react';
import './App.css';
import ProfilePage from './Pages/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Preperation from './Pages/Preperation.jsx'; 
import CoreSubjects from './Components/CoreSubjects.jsx';
import AptitudeSection from './Components/Aptitudesection.jsx';
import AptiQuiz from './Components/AptiQuiz.jsx';
import DSASection from './Components/DSASection.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/preperation' element={<Preperation />} /> {/* keep as is if your component is Preperation */}
        <Route path='/coresub' element={<CoreSubjects />} />
        <Route path='/aptitude' element={<AptitudeSection />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/quiz/:sectionId' element={<AptiQuiz />} />
        <Route path='/dsa' element={<DSASection />} />

      </Routes>
    </Router>
  );
}

export default App;
