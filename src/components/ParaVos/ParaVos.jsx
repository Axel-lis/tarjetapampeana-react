import PrimeraSeccion from './PrimeraSeccion';
import IconosPosiblidades from '../Common/IconosPosibilidades';
import SegundaSeccion from './SegundaSeccion';
import TerceraSeccion from './TerceraSeccion';
import Costos from './Costos';
import PreguntasFrecuentes from '../Common/PreguntasFrecuentes';
import { preguntasParaVos } from '../constants/index.js';
import { FaCreditCard, FaHandHoldingUsd, FaMailBulk, FaGift, FaChartLine, FaComment } from 'react-icons/fa';
export const ParaVos = () => {
  const iconosParaVos = [
    { icono: <FaHandHoldingUsd className="text-green-500" />, texto: 'SOLICITÁ TU PRÉSTAMO' },
    { icono: <FaCreditCard className="text-purple-400" />, texto: 'ADHERITE AL DÉBITO' },
    { icono: <FaMailBulk className="text-sky-500" />, texto: 'RECIBÍ TU RESUMEN' },
    { icono: <FaGift className="text-orange-400" />, texto: 'CANJEÁ TUS PUNTOS' },
    { icono: <FaChartLine className="text-sky-500" />, texto: 'AUMENTÁ TU LÍMITE' },
    { icono: <FaComment className="text-sky-500" />, texto: 'CONTACTANOS' },
  ];

  return (
    <div>
      <PrimeraSeccion tiempoCarga={500} />
      <IconosPosiblidades posibilidades={iconosParaVos} />
      <SegundaSeccion />
      <TerceraSeccion />
      <Costos />
      <PreguntasFrecuentes preguntas={preguntasParaVos} />
    </div>
  );
};
export default ParaVos;
