import Carousel from './Carousel';
import AdherirComercio from './AdherirComercio';
import IconosPosiblidades from '../Common/IconosPosibilidades';
import { preguntasComercios } from '../constants/index.js';
import PreguntasFrecuentes from '../Common/PreguntasFrecuentes';
import { FaCreditCard, FaHandHoldingUsd, FaMailBulk, FaGift, FaChartLine, FaComment } from 'react-icons/fa';
const ParaTuComercio = () => {
  const iconosComercios = [
    { icono: <FaHandHoldingUsd className="text-green-500" />, texto: 'SOLICITÁ TU PRÉSTAMO' },
    { icono: <FaCreditCard className="text-purple-400" />, texto: 'ADHERITE AL DÉBITO' },
    { icono: <FaMailBulk className="text-sky-500" />, texto: 'RECIBÍ TU RESUMEN' },
    { icono: <FaGift className="text-orange-400" />, texto: 'CANJEÁ TUS PUNTOS' },
    { icono: <FaChartLine className="text-sky-500" />, texto: 'AUMENTÁ TU LÍMITE' },
    { icono: <FaComment className="text-sky-500" />, texto: 'CONTACTANOS' },
  ];

  return (
    <div>
      <Carousel />
      <AdherirComercio />
      <IconosPosiblidades posibilidades={iconosComercios} />
      <PreguntasFrecuentes preguntas={preguntasComercios} />
    </div>
  );
};

export default ParaTuComercio;
