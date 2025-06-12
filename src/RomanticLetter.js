import React, { useState } from 'react';
import './RomanticLetter.css';

const RomanticLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Texto editable - puedes cambiarlo aquí
  const letterContent = {
    greeting: "Querida Estrella",
    paragraphs: [
      "Hoy es un día especial, y quería dedicarte estas palabras aunque no sea San Valentín. Desde que te conocí, mi mundo se llenó de colores que ni siquiera sabía que existían.",
      "Eres como esa flor que ves en el centro de esta carta: bella, única y capaz de iluminar cualquier lugar con tu presencia. Si el tiempo fuera código, cada línea estaría dedicada a hacerte sonreír.",
      "No necesito una fecha en el calendario para decirte lo importante que eres para mí. Eres mi bug favorito, el que nunca quiero corregir porque hace perfecto mi programa.",
      "Con todo mi cariño,",
      "Tu admirador secreto ❤️"
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