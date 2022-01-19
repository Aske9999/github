import React from 'react';
import logo from '../images/logo1.png'
import './Header.css'

const Header = () => {

  return (
    <div className="bg-cyan-800">
      <div className="container mx-auto py-4 flex justify-center">
        <img className="logo" src={logo} alt="logo"/>
      </div>
    </div>
  );
};

export default Header;