import Carousel from './Carousel';
import AdherirComercio from './AdherirComercio';
import RequisitosComercios from './RequisitosComercios';
import IconosPosiblidades from '../Common/IconosPosibilidades';
import PreguntasFrecuentes from '../Common/PreguntasFrecuentes';
import Footer from '../Common/Footer';
import { preguntasComercios } from '../constants/index.js';
import { requisitosComercios } from '../constants/index.js';
import { beneficios } from '../constants/index.js';
import { FaGift, FaHome, FaMoneyBillWave, FaComment } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { AiOutlineShop } from 'react-icons/ai';

const ParaTuComercio = () => {
  const iconosComercios = [
    { icono: <FaHome className="text-cyan-500" />, texto: 'MIRÁ TU RESUMEN DESDE LA COMODIDAD DE TU HOGAR' },
    { icono: <FaGift className="text-purple-400" />, texto: ' SUMA BENEFICIOS' },
    { icono: <FaMoneyBillWave className="text-green-500" />, texto: ' SOLICITÁ PRÉSTAMOS PARA TU COMERCIO' },
    { icono: <GiTeamIdea className="text-red-400" />, texto: 'ÉXITO COMPARTIDO: AUMENTÁ TU REPUTACIÓN' },
    { icono: <FaComment className="text-sky-200" />, texto: 'ATENCIÓN PERSONALIZADA' },
    { icono: <AiOutlineShop className="text-purple-600" />, texto: 'CONOCÉ NUESTROS COMERCIOS ADHERIDOS' },
  ];

  return (
    <div>
      <Carousel />
      <AdherirComercio beneficios={beneficios} />
      <IconosPosiblidades posibilidades={iconosComercios} />
      <RequisitosComercios requisitosComercios={requisitosComercios} />
      <PreguntasFrecuentes preguntas={preguntasComercios} />
      <Footer />
    </div>
  );
};

export default ParaTuComercio;
