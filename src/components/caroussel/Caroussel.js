import React, { useState } from 'react';

import './caroussel.css';

const Carrousel = ({ donnees }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Démarre à l'index 1

    const previousVideo = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 1 ? donnees.length : prevIndex - 1
        );
    };

    const nextVideo = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === donnees.length ? 1 : prevIndex + 1
        );
    };

    return (
        <div className="carrouselConteneur">
            <div className="autreConteneur">
                <div>
                    <button onClick={previousVideo} disabled={donnees.length === 1 || currentIndex === 1}>Suivant</button>
                </div>
                <div className="carteVocaroo">
                    <div className="information">
                        <p>{donnees[currentIndex - 1].titre}</p>
                        <p>{currentIndex} / {donnees.length}</p>
                    </div>
                    <iframe
                    width="504"
                    height="283"
                    src={`https://www.youtube.com/embed/${donnees[currentIndex - 1].lien}`}
                    title={`YouTube video player ${currentIndex}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <button onClick={nextVideo} disabled={donnees.length === 1 || currentIndex === donnees.length}><span class="material-symbols-outlined">Precedent</span></button>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;
