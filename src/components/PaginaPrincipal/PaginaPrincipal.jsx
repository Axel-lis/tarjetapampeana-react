import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import PaquetePampeana from './PaquetePampeana';
import PaquetesAcordion from './PaquetesAcordion';
import IconosPosiblidades from '../Common/IconosPosibilidades';
import PreguntasFrecuentes from '../Common/PreguntasFrecuentes';
import Footer from '../Common/Footer';
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
    { icono: <FaCreditCard className="text-orange-500" />, texto: 'Pedí tu Tarjeta Pampeana' },
    { icono: <FaHandHoldingUsd className="text-purple-500" />, texto: 'Pedí un préstamo' },
    { icono: <FaFileInvoice className="text-purple-500" />, texto: 'Pagar mi resumen' },
    { icono: <FaPiggyBank className="text-purple-500" />, texto: 'Abrir una cuenta gratis' },
    { icono: <FaMapMarkerAlt className="text-purple-500" />, texto: 'Conocé nuestros comercios adheridos' },
    { icono: <FaMobileAlt className="text-purple-500" />, texto: 'Conocé nuestra app' },
  ];

  return (
    <div>
      <Carousel tiempoCarga={1100} />
      <IconosPosiblidades tiempoCarga={1000} posibilidades={iconosPrincipal} />
      <Carousel2 tiempoCarga={1500} />
      <PaquetePampeana />
      <PaquetesAcordion />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;
