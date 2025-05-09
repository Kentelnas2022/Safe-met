import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ active }) => {
  const navigate = useNavigate();
  const items = [
    { label: 'Home', icon: 'home', path: '/dashboard' },
    { label: 'Call', icon: 'telephone', path: '/emergency' },
    { label: 'Profile', icon: 'profile', path: '/profile' }
  ];

  return (
    <div className="nav-bar">
      {items.map((item, index) => (
        <button
          key={index}
          className="nav-btn"
          style={{ color: index === active ? '#ffdd57' : '#fff' }}
          onClick={() => navigate(item.path)}
        >
          <img src={`/img/${item.icon}.png`} alt={`${item.label} Icon`} />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
