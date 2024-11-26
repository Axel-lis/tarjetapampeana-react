import PropTypes from 'prop-types';
import { useState } from 'react';

const PreguntasFrecuentes = ({ preguntas }) => {
  console.log(preguntas);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const closeAllFaqs = () => setOpenFaq(null);

  const faqStyle = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '630px',
      left: '0',
      padding: '20px',
    },
    question: {
      backgroundColor: '#f0f0f0',
      marginBottom: '10px',
      padding: '15px 20px',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    answer: {
      margin: '10px 0',
    },
    icon: {
      transition: 'transform 0.3s ease',
    },
    rotate: {
      transform: 'rotate(90deg)',
    },
  };

  return (
    <article style={{ padding: '60px 20px' }} onClick={closeAllFaqs}>
      <h1 style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '30px', marginLeft: '20px' }}>
        Preguntas Frecuentes
      </h1>
      <div style={faqStyle.container} onClick={(e) => e.stopPropagation()}>
        {preguntas.map((pregunta, index) => (
          <div className="items-start" style={faqStyle.question} key={index} onClick={() => toggleFaq(index)}>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              {pregunta.titulo}
              <div
                style={{
                  ...faqStyle.icon,
                  ...(openFaq === index ? faqStyle.rotate : {}),
                }}
              />
            </h3>
            {openFaq === index && (
              <div style={faqStyle.answer}>
                <p>{pregunta.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

PreguntasFrecuentes.propTypes = {
  preguntas: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      respuesta: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PreguntasFrecuentes;
