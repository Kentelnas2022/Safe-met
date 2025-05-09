import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';
import Profile from './components/Profile';
import Emergency from './components/Emergency';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;