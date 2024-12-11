import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import PaquetePampeana from './PaquetePampeana';
import PaquetesAcordion from './PaquetesAcordion';
import IconosPosibilidades from '../Common/IconosPosibilidades';
import PreguntasFrecuentes from '../Common/PreguntasFrecuentes';
import AdherirComercio from './AdherirComercio';
import { preguntas } from '../constants/index.js';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {
  FaCreditCard,
  FaHandHoldingUsd,
  FaFileInvoice,
  FaPiggyBank,
  FaMobileAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const PaginaPrincipal = () => {
  const iconosPrincipal = [
    {
      icono: <FaCreditCard className="text-orange-500" />,
      texto: 'Pedí tu Tarjeta Pampeana',
      action: () => window.open('https://solicitatutarjeta.pampeana.com.ar/', '_blank'),
    },
    {
      icono: <FaHandHoldingUsd className="text-purple-500" />,
      texto: 'Pedí un préstamo',
      action: () => navigate('/form-solicitud-credito'),
    },
    {
      icono: <FaFileInvoice className="text-purple-500" />,
      texto: 'Pagar mi resumen',
      action: () => navigate('/para-vos'),
    },
    {
      icono: <FaPiggyBank className="text-purple-500" />,
      texto: 'Abrir una cuenta gratis',
      action: () => window.open('https://online.pampeana.com.ar/login.php', '_blank'),
    },
    {
      icono: <FaMapMarkerAlt className="text-purple-500" />,
      texto: 'Conocé nuestros comercios adheridos',
      action: () => navigate('/centros-atencion'),
    },
    {
      icono: <FaMobileAlt className="text-purple-500" />,
      texto: 'Conocé nuestra app',
      action: () => console.log('Conocé nuestra app'),
    },
  ];

  const navigate = useNavigate();
  const messagesEnd = useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonClick = (buttonText) => {
    switch (buttonText) {
      case 'Pedir tarjeta':
        console.log('Pedir tarjeta Pampeana');
        window.open('https://solicitatutarjeta.pampeana.com.ar/', '_blank');
        break;
      case 'Solicitá tu préstamo':
        navigate('/form-solicitud-credito');
        break;
      case 'Ver Paquetes':
        scrollToBottom();
        break;
      default:
        console.log(`Botón ${buttonText} presionado`);
    }
  };

  return (
    <div>
      <Carousel tiempoCarga={500} onButtonClick={handleButtonClick} />
      <IconosPosibilidades tiempoCarga={1000} posibilidades={iconosPrincipal} />
      <AdherirComercio />
      <Carousel2 tiempoCarga={500} />
      <PaquetePampeana />
      <div ref={messagesEnd} />
      <PaquetesAcordion />
      <PreguntasFrecuentes preguntas={preguntas} />
    </div>
  );
};

export default PaginaPrincipal;
