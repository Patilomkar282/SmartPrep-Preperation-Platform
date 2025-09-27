import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import JobBoard from './Pages/JobBoard.jsx'
import GroupDiscussions from './Pages/GroupDiscussion.jsx'

function App() {
  return (
    <Router>
      <Routes>
    
         <Route path="/gd" element={<GroupDiscussions />} />
        <Route path="/jobs" element={<JobBoard />} />
      </Routes>
    </Router>
  )
}

export default App
