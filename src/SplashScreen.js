import React from 'react';
import './css/SplashScreen.css';
import Logo from './img/CirupieD.png';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={Logo} alt="" width="300" height="120" className="d-inline-block align-text-center"/>
      
    </div>
  );
};

export default SplashScreen;

