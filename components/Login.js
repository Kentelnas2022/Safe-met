import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';
import InputField from './InputField';
import Button from './Button';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/loading');
  };

  return (
    <div className="center">
      <div className="container">
        <Logo title="SafeMet" />
        <form onSubmit={handleSubmit}>
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <Button>Login</Button>
        </form>
        <div className="link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;