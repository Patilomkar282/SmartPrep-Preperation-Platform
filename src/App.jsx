import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import JobBoard from './Pages/JobBoard.jsx';
import GroupDiscussions from './Pages/GroupDiscussion.jsx';
import HomePage from './Pages/HomePage.jsx';
import Layout from './Layout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/gd" element={<GroupDiscussions />} />
          <Route path="/jobs" element={<JobBoard />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
