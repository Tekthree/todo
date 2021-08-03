import React from 'react'
import './header.scss';
import Login from '../login/Login.js';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="link" to="/">Home</Link>
      <Login></Login>
    </div>
  )
}

export default Header
