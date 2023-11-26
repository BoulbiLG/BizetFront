import React, { useState } from 'react';

import './caroussel.css';

const Carrousel = ({ donnees }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

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
                    {donnees.length > 1 ? (
                        <>
                        {currentIndex !== 1 ? (
                            <button onClick={previousVideo} disabled={donnees.length === 1 || currentIndex === 1}>Precedent</button>
                        ) : 
                            <button onClick={previousVideo} style={{visibility: 'hidden'}} disabled={donnees.length === 1 || currentIndex === donnees.length}>Precedent</button>
                        }
                        </>
                    ) : null }
                </div>
                <div className="carteVocaroo">
                    <div className="information">
                        <p>{donnees[currentIndex - 1].titre}</p>
                        <p>{currentIndex} / {donnees.length}</p>
                    </div>
                    <div className="tagsListe">
                        {donnees[currentIndex - 1].tag.map((entre, index) => (
                        <>
                            { entre === 'Mélancolique' ? (<span className="tag melancolique" key={index}>{entre}</span>) : null}
                            { entre === 'Epique' ? (<span className="tag epique" key={index}>{entre}</span>) : null}
                            { entre === 'Glorieux' ? (<span className="tag glorieux" key={index}>{entre}</span>) : null}
                            { entre === 'Nostalgique' ? (<span className="tag nostalgique" key={index}>{entre}</span>) : null}
                            { entre === 'Vif' ? (<span className="tag vif" key={index}>{entre}</span>) : null}
                            { entre === 'Dramatique' ? (<span className="tag dramatique" key={index}>{entre}</span>) : null}
                            { entre === 'Lugubre' ? (<span className="tag lugubre" key={index}>{entre}</span>) : null}
                            { entre === 'Joyeux' ? (<span className="tag joyeux" key={index}>{entre}</span>) : null}
                            { entre === 'Noble' ? (<span className="tag noble" key={index}>{entre}</span>) : null}
                            { entre === 'Doux' ? (<span className="tag doux" key={index}>{entre}</span>) : null}
                            { entre === 'Romantique' ? (<span className="tag romantique" key={index}>{entre}</span>) : null}
                        </>
                        ))}
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
                    {donnees.length > 1 ? (
                        <>
                        {currentIndex !== donnees.length ? (
                            <button onClick={nextVideo} disabled={donnees.length === 1 || currentIndex === donnees.length}>Suivant</button>
                        ) : 
                            <button onClick={nextVideo} style={{visibility: 'hidden'}} disabled={donnees.length === 1 || currentIndex === donnees.length}>Suivant</button>
                        }
                        </>
                    ) : null }
                </div>
            </div>

            <div className="autreConteneur2">
                <div className="carteVocaroo">
                    <div className="information">
                        <p>{donnees[currentIndex - 1].titre}</p>
                        <p>{currentIndex} / {donnees.length}</p>
                    </div>
                    <div className="tagsListe">
                        {donnees[currentIndex - 1].tag.map((entre, index) => (
                        <>
                            { entre === 'Mélancolique' ? (<span className="tag melancolique" key={index}>{entre}</span>) : null}
                            { entre === 'Epique' ? (<span className="tag epique" key={index}>{entre}</span>) : null}
                            { entre === 'Glorieux' ? (<span className="tag glorieux" key={index}>{entre}</span>) : null}
                            { entre === 'Nostalgique' ? (<span className="tag nostalgique" key={index}>{entre}</span>) : null}
                            { entre === 'Vif' ? (<span className="tag vif" key={index}>{entre}</span>) : null}
                            { entre === 'Dramatique' ? (<span className="tag dramatique" key={index}>{entre}</span>) : null}
                            { entre === 'Lugubre' ? (<span className="tag lugubre" key={index}>{entre}</span>) : null}
                            { entre === 'Joyeux' ? (<span className="tag joyeux" key={index}>{entre}</span>) : null}
                            { entre === 'Noble' ? (<span className="tag noble" key={index}>{entre}</span>) : null}
                            { entre === 'Doux' ? (<span className="tag doux" key={index}>{entre}</span>) : null}
                            { entre === 'Romantique' ? (<span className="tag romantique" key={index}>{entre}</span>) : null}
                        </>
                        ))}
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
                <div className='boutonSection'>
                    {donnees.length > 1 ? (
                        <>
                        {currentIndex !== 1 ? (
                            <button onClick={previousVideo} disabled={donnees.length === 1 || currentIndex === 1}>Precedent</button>
                        ) : 
                            <button onClick={previousVideo} style={{visibility: 'hidden'}} disabled={donnees.length === 1 || currentIndex === donnees.length}>Precedent</button>
                        }
                        </>
                    ) : null }
                    {donnees.length > 1 ? (
                        <>
                        {currentIndex !== donnees.length ? (
                            <button onClick={nextVideo} disabled={donnees.length === 1 || currentIndex === donnees.length}>Suivant</button>
                        ) : 
                            <button onClick={nextVideo} style={{visibility: 'hidden'}} disabled={donnees.length === 1 || currentIndex === donnees.length}>Suivant</button>
                        }
                        </>
                    ) : null }
                </div>
            </div>
        </div>
    );
};

export default Carrousel;
