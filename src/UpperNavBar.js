import React, { useState } from 'react';

const UpperNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Simple Weather
      </a>
      <ul class="navbar-nav d-none d-md-flex">
        <li class="nav-item">
          <a href="#" class="nav-link">Minutely Forecast</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Hourly Forecast</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">7 Day Forecast</a>
        </li>
      </ul>
    </nav>
  );
}

export default UpperNavBar;
