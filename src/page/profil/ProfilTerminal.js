import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Bouton from '../../components/bouton/Bouton';

import './profil.css';

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
      <div className="contenu">
        <div className="pseudo">
          <h5>Votre pseudonyme</h5>
          <p>{username}</p>
        </div>
        <div className="email">
          <h5>Votre adresse Email</h5>
          <p>{email}</p>
        </div>
        <Bouton className='deconnexion' label='Se deconnecter' onClick={deconnexion} />
      </div>
    </div>
  )
}

export default ProfilTerminal