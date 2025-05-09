import React from 'react';
import NavBar from './NavBar';

const Dashboard = () => (
  <>
    <header className="header">
      <h1 className="page-title">Dashboard</h1>
    </header>
    <main className="dashboard">
      <h3>Home</h3>
      <p style={{ fontSize: '24px' }}>Welcome to SafeMet Dashboard</p>
    </main>
    <NavBar active={0} />
  </>
);

export default Dashboard;