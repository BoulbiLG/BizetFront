import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './loginTerminal.css';

import Input from '../../components/input/Input';
import Bouton from '../../components/bouton/Bouton';
import NavBar from '../../components/navBar/NavBar';

import { useGlobalFenetreAlaUneContext } from '../../variableGlobal/fenetreAlaUne';

const LoginTerminal = () => {


  // ============================= DECLARATION VARIABLE ============================= //


  const { globalFenetreAlaUne, globalFenetreAlaUneSet } = useGlobalFenetreAlaUneContext();
  const navigate = useNavigate();
  const [statusConnexion, statusConnexionSet] = useState('');

  const [emailValue, emailValueSet] = useState('');
  const [passwordValue, passwordValueSet] = useState('');

  const apiUrlLocal = 'https://bizeterieapi-l0al.onrender.com';



  // ============================= REQUETE CONNEXION ============================= //



  const verificationDonnee = async (e) => {
    e.preventDefault();

    if (emailValue === '' || emailValue === null) {
      statusConnexionSet('Tous les champs sont requis');
      if (passwordValue === '' || passwordValue === null) {
        statusConnexionSet('Tous les champs sont requis');
      }
    } else {
      try {
        const response = await axios.post(`${apiUrlLocal}/login`, {email: emailValue, password: passwordValue});
  
        const { user_data } = response.data;
  
        sessionStorage.setItem('username', user_data.username);
        sessionStorage.setItem('email', user_data.email);
        sessionStorage.setItem('auth', 'true');
        globalFenetreAlaUneSet('liste')
  
        navigate('/');
      } catch (error) {
        console.log('Error:', error);
        //setError('Erreur de connexion. Veuillez vérifier vos informations.');
      }
    };
  }

  return (
    <div className='loginTerminalConteneur'>
      <NavBar />
      <div className="loginSection">
        <div className="inputSection">
          <h3>Se connecter</h3>
          <div className="haut">
            <Input className='email' type="text" placeholder={'Entrez votre pseudonyme'} value={emailValue} onChange={(event) => {emailValueSet(event.target.value)}}/>
            <div className="passwordSection">
              <div className='passwordSection'>
                <input className='password' type="password" placeholder='Entrez votre mot de passe ' value={passwordValue} onChange={(event) => {passwordValueSet(event.target.value)}}/>
              </div>
            </div>
            {statusConnexion !== '' ? (
              <p className='erreur'>{statusConnexion}</p>
            ) : null }
          </div>
          <div className="bas">
            <Link className='pasDeCompte' to="/register">Je n'ai pas de compte</Link>
            <Bouton className='connexion' label='Se connecter' onClick={verificationDonnee}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginTerminal