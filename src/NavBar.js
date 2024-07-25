// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/add" style={linkStyle}>Add Question</Link></li>
        <li style={liStyle}><Link to="/manage" style={linkStyle}>Manage Questions</Link></li>
      </ul>
    </nav>
  );
};

const navStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: '0 10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default NavBar;
