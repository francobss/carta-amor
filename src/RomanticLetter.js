import React, { useState } from 'react';
import './RomanticLetter.css';

const RomanticLetter = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Texto editable - puedes cambiarlo aquí
    const letterContent = {
        greeting: "Querida Xime",
        paragraphs: [
        "Hoy quiero recordarte algo que quizás a veces olvidas: eres increíblemente hermosa, tanto por fuera como por dentro.",
        "No creo nunca tener las palabras correctas, menos para describir a alguien grandiosa, hermosa y brillante como vos, pero aveces debemos tomarnos atrevimientos muy grandes y jugarnosla.",
        "Como siempre te digo, por mas que el cielo este lleno de estrellas, no hay estrella mas grande y hermosa como la luna, tan unica y brillante.",
        "Y ojala nunca olvides ese brillo y belleza tan caracteristica y unica que tenes, y no tan solo hablo de lo que los ojos ven, sino de lo que demostras con tus acciones.",
        "Mujeres lindas abundan en el planeta, no lo crees? pero mujeres hermosas y con un hermoso corazon, son de otro planeta, entendes tu diferencia ante el resto de las demas? no tan solo sos hermosa, tambien tenes un hermoso corazon.",
        "Con todo cariño,",
        "Yo ✨"
        ]
    };

    const toggleEnvelope = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="letter-container">
        <h1>Una carta especial para ti ❤️</h1>
        
        <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`} onClick={toggleEnvelope}>
            <div className="envelope">
            <div className="letter">
                <div className="content">
                <strong>{letterContent.greeting}</strong>
                {letterContent.paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}
                
                {/* Flor animada en el centro - Versión corregida */}
                <div className="flower-container">
                    <div className="flower">
                    {[...Array(8)].map((_, i) => (
                        <div 
                        key={i}
                        className="petal"
                        style={{
                            transform: `rotate(${i * 45}deg)`,
                            animationDelay: `${i * 0.1}s`
                        }}
                        />
                    ))}
                    <div className="flower-center"></div>
                    </div>
                    <div className="stem"></div>
                </div>
                </div>
            </div>
            </div>
            {/* Corazón que desaparece al abrir */}
            {!isOpen && <div className="heart"></div>}
            <div className="flap"></div>
        </div>
        </div>
    );
};

export default RomanticLetter;