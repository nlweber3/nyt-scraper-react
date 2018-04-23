import React from 'react';
import './header.css';
import logo from '../New_York_Times_logo_variation.jpg'

const Header = props => (
    <div className="navbar navbar-default">
    <header className="App-header">
      <img className="logo" src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">NYT SCRAPER</h1>
    </header>
  </div>
);

export default Header;