import React from 'react';
import './App.css';
import ProfilePage from './Pages/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing.jsx';
import Preperation from './Pages/Preperation.jsx'; 
import CoreSubjects from './Components/CoreSubjects.jsx';
import AptitudeSection from './Components/Aptitudesection.jsx';
import AptiQuiz from './Components/AptiQuiz.jsx';
import DSASection from './Components/DSASection.jsx';
import JobBoard from './Pages/JobBoard.jsx';
import GroupDiscussions from './Pages/GroupDiscussion.jsx';
import WebinarsAndMentorship from './Pages/WebinarsAndMentorship.jsx';
import Layout from './Layout.jsx';
import OopLearningPage from './Components/OopLearningPage.jsx';
import CnLearningPage from './Components/CnLearning.jsx';
import DbmsLearningPage from './Components/DbmsLearning.jsx';
import OsLearningPage from './Components/OsLearning.jsx';
import QuantitativeAptitudePage from './Components/QuantLearning.jsx';
import VerbalAbilityPage from './Components/VerbalAbilityLearning.jsx';
import LogicalReasoningPage from './Components/LogicalReasoningLearning.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='learning-modules' element={<Preperation />} /> {/* keep as is if your component is Preperation */}
          <Route path='coresub' element={<CoreSubjects />} />
          <Route path='aptitude' element={<AptitudeSection />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='quiz/:sectionId' element={<AptiQuiz />} />
          <Route path='dsa' element={<DSASection />} />
          <Route path='job-board' element={<JobBoard />} />
          <Route path='group-discussion' element={<GroupDiscussions />} />
          <Route path='webinar-mentorship' element={<WebinarsAndMentorship />} />
          <Route path='ooplearning' element={<OopLearningPage/>}/>
          <Route path='cnlearning' element={<CnLearningPage/>}/>
          <Route path='oslearning' element={<OsLearningPage/>}/>
          <Route path='dbmslearning' element={<DbmsLearningPage/>}/>

          <Route path='quant' element={<QuantitativeAptitudePage/>}/>
          <Route path='verbal' element={<VerbalAbilityPage/>}/>
          <Route path='logical' element={<LogicalReasoningPage/>}/>
        </Route>
        



      </Routes>
    </Router>
  );
}

export default App;
