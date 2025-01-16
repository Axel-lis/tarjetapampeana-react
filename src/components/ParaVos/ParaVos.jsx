import PrimeraSeccion from './PrimeraSeccion';
import IconosPosiblidades from '../Common/IconosPosibilidades';
import SegundaSeccion from './SegundaSeccion';
import TerceraSeccion from './TerceraSeccion';
import Costos from './Costos';
import PreguntasFrecuentes from '../Common/PreguntasFrecuentes';
import { preguntasParaVos } from '../constants/index.js';
import { FaCreditCard, FaHandHoldingUsd, FaMailBulk, FaGift, FaChartLine, FaComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AhorraMas from './AhorraMas.jsx';
import DefensaButton from './DefensaButton.jsx';
export const ParaVos = () => {
  const navigate = useNavigate();
  const iconosParaVos = [
    {
      icono: <FaHandHoldingUsd className="text-green-500" />,
      texto: 'SOLICITÁ TU PRÉSTAMO',
      action: () => navigate('/form-solicitud-credito'),
    },
    {
      icono: <FaCreditCard className="text-purple-400" />,
      texto: 'ADHERITE AL DÉBITO',
      action: () => window.open('https://solicitatutarjeta.pampeana.com.ar/', '_blank'),
    },
    {
      icono: <FaMailBulk className="text-sky-500" />,
      texto: 'RECIBÍ TU RESUMEN',
      action: () => window.open('https://online.pampeana.com.ar/', '_blank'),
    },
    {
      icono: <FaGift className="text-orange-400" />,
      texto: 'CANJEÁ TUS PUNTOS',
      action: () => window.open('https://online.pampeana.com.ar/', '_blank'),
    },
    {
      icono: <FaChartLine className="text-yellow-500" />,
      texto: 'AUMENTÁ TU LÍMITE',
      action: () => window.open('https://online.pampeana.com.ar/', '_blank'),
    },
    {
      icono: <FaComment className="text-sky-500" />,
      texto: 'CONTACTANOS',
      action: () => window.open('https://api.whatsapp.com/send?phone=5492954233330&amp;lang=es', '_blank'),
    },
  ];

  return (
    <div>
      <PrimeraSeccion tiempoCarga={500} />
      <IconosPosiblidades posibilidades={iconosParaVos} />
      <SegundaSeccion />
      <AhorraMas />
      <TerceraSeccion />
      <Costos />
      <DefensaButton />
      <PreguntasFrecuentes preguntas={preguntasParaVos} />
    </div>
  );
};
export default ParaVos;
