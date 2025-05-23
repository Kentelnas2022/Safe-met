import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import NavBar from './NavBar';

// Supabase config
const supabaseUrl = 'https://saigagigwcenxuwsqoir.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaWdhZ2lnd2Nlbnh1d3Nxb2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MTUzNDMsImV4cCI6MjA2MzM5MTM0M30.tSycjBx7fJKFd4boZRKghKr2LU-ToWa5Z_4IUa2VHJY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user's full_name on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session) {
        navigate('/');
        return;
      }

      const { user } = session;

      const { data, error } = await supabase
        .from('users')
        .select('full_name')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error.message);
      } else {
        setFullName(data.full_name);
      }

      setLoading(false);
    };

    fetchUserProfile();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <>
      <header className="header">
        <h1 className="page-title">Profile</h1>
      </header>

      <main className="center">
        <div className="status-box">
          <h3>User Profile</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p>Welcome, <strong>{fullName}</strong>!</p>
          )}
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </main>

      <NavBar active={2} />
    </>
  );
};

export default Profile;
