import React, { useState } from 'react';
import halfmoon from 'halfmoon/js/halfmoon';

const UpperNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="btn btn-action" type="button" onClick={halfmoon.toggleSidebar()}>
          <i className="fa fa-bars" aria-hidden="true"></i>
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </div>

      <a href="/" className="navbar-brand">
        Simple Weather
      </a>
      <ul className="navbar-nav d-none d-md-flex">
        <li className="nav-item">
          <a href="#current" className="nav-link">Current Forecast</a>
        </li>
        <li className="nav-item">
          <a href="#hourly" className="nav-link">Hourly Forecast</a>
        </li>
        <li className="nav-item">
          <a href="#daily" className="nav-link">7 Day Forecast</a>
        </li>
      </ul>
    </nav>
  );
}

export default UpperNavBar;
