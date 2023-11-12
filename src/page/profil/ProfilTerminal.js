import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Bouton from '../../components/bouton/Bouton';

const ProfilTerminal = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const usernameFromSession = sessionStorage.getItem('username');
    const emailFromSession = sessionStorage.getItem('email');

    if (usernameFromSession && emailFromSession) {
      setUsername(usernameFromSession);
      setEmail(emailFromSession);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const deconnexion = () => {
    sessionStorage.setItem('auth', 'false');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <div className='profilTerminalConteneur'>
      <div className="deconnexionDiv">
        <p>{username}</p>
        <p>{email}</p>
        <Bouton  className='deconnexion' label='Logout' onClick={deconnexion} />
      </div>
    </div>
  )
}

export default ProfilTerminal