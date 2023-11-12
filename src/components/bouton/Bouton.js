import React from 'react';
import './bouton.css';

const Bouton = ({ label, onClick, disabled, backgroundColor, color }) => {

    return (
        <div className="">
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
        </div>
    );
};

export default Bouton;