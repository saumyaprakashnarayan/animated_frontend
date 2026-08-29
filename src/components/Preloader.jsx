import React from 'react';
import './Preloader.css';
import { Cpu } from 'lucide-react';

const Preloader = ({ loading }) => {
  return (
    <div className={`preloader ${loading ? 'visible' : 'hidden'}`}>
      <div className="preloader-content">
        <div className="logo-container">
          <Cpu size={48} className="logo-icon" />
          <h1 className="logo-text">TRAYAKSH.AI</h1>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
        <div className="status-text">INITIALIZING COMPUTE NODES...</div>
      </div>
    </div>
  );
};

export default Preloader;
