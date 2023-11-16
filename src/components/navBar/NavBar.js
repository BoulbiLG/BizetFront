import React from 'react';
import './navBar.css';

import { Link } from 'react-router-dom';

const NavBar = () => {

  const auth = sessionStorage.getItem('auth');

  return (
    <div className='navBarConteneur'>
      <div className="logoSection">
        <h1><Link to="/">La Bizeterie</Link></h1>
      </div>
      <div className="ongletSection">
        {auth !== 'true' ? (
          <>
            <Link className='onglet login' to="/login">Se connecter</Link>
            <Link className='onglet register' to="/register">S'inscrire</Link>
          </>
        ) : null }
      </div>
    </div>
  )
}

export default NavBar