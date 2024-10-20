import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import MenteeRegister from './Pages/MenteeRegister.jsx';
import MentorRegister from './Pages/MentorRegister.jsx';
import ScheduleMeeting from './Pages/ScheduleMeetingWithMentor.jsx';
import MentorDashborad from './Pages/MentorDashborad.jsx';
import MenteeDashboard from './Pages/MenteeDashBoard.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
     
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Login' element={<LoginPage />} />
        <Route exact path='/mentor-register' element={<MentorRegister />} />
        <Route exact path='/mentee-register' element={<MenteeRegister />} />
        <Route exact path='/schedule-meeting' element={<ScheduleMeeting />} />
        <Route exact path='/mentor-dashboard' element={<MentorDashborad />} />
        <Route exact path='/mentee-dashboard' element={<MenteeDashboard />} />
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
