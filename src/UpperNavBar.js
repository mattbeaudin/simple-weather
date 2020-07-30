import React from 'react';

const UpperNavBar = (props) => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <i className="fa fa-bolt" aria-hidden="true"></i>
        Simple Weather
      </a>
      <ul className="navbar-nav">
        <li className="nav-item dropdown with-arrow">
          <a className="nav-link" data-toggle="dropdown" id="nav-link-dropdown-toggle">
            Forecasts 
            <i className="fa fa-angle-down ml-5" aria-hidden="true"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="nav-link-dropdown-toggle">
            <a href="#current" className="dropdown-item">Current</a>
            <a href="#hourly" className="dropdown-item">Hourly</a>
            <a href="#daily" className="dropdown-item">7 Day</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default UpperNavBar;
