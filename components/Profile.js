import React from 'react';
import NavBar from './NavBar';

const Profile = () => (
  <>
    <header className="header">
      <h1 className="page-title">Profile</h1>
    </header>
    <main className="center">
      <div className="status-box">
        <h3>User Profile</h3>
        <p>Here is your profile information...</p>
      </div>
    </main>
    <NavBar active={2} />
  </>
);

export default Profile;