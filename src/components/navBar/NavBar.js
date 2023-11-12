import React from 'react';
import './navBar.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBarConteneur'>
      <div className="logoSection">
        <h1>La Bizeterie</h1>
      </div>
      <div className="ongletSection">
        <Link className='onglet login' to="/login">Se connecter</Link>
        <Link className='onglet register' to="/register">S'inscrire</Link>
      </div>
    </div>
  )
}

export default NavBar