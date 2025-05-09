import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import InputField from './InputField';
import Button from './Button';

const Signup = () => (
  <div className="container center">
    <Logo title="SafeMet" />
    <InputField type="text" placeholder="Full Name" />
    <InputField type="email" placeholder="Email" />
    <InputField type="password" placeholder="Password" />
    <Button>Signup</Button>
    <div className="link">
      Already have an account? <Link to="/">Login</Link>
    </div>
  </div>
);

export default Signup;