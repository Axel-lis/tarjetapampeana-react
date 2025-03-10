import { paraVosPromos } from '../constants/index.js';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const TerceraSeccion = () => {
  const navigate = useNavigate();
  const handleNavigateToForm = () => {
    navigate('/form-solicitud-credito');
  };
  return (
    <div className="container max-w-full">
      <div className="max-w-7xl mx-auto px-1 py-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Columna de Promociones */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15, loop: true }}
        >
          {paraVosPromos.map((promo, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Imagen */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-green-400 to-green-500 flex items-center justify-center">
                <img src={promo.image} alt={`${promo.dia} imagen`} className="w-20 h-20 rounded-full" />
              </div>

              {/* Texto */}
              <h3 className="mt-2 text-sm font-bold uppercase">{promo.dia}</h3>
              <p className="text-xs text-gray-500">Reintegro</p>
              <strong className="text-lg text-pink-400">{promo.reintegro}</strong>
            </div>
          ))}
        </motion.div>

        {/* Columna de Texto */}
        <motion.div
          className="w-full "
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15, loop: true }}
        >
          <h5 className="text-2xl text-purple-600 font-bold mb-4">CON PAMPEANA A TODOS LADOS</h5>
          <p className="text-base mb-4">
            Accedé a un sinfín de posibilidades para que puedas consumir y realizar tus operaciones sin moverte de tu
            casa. Tenés préstamos{' '}
            <strong className="text-purple-600">
              PampaCa
              <span className="font-bold text-green-400">$</span>h
            </strong>
            , reintegros en productos seleccionados <strong>todos los días de la semana</strong>, bonificaciones y
            atención personalizada.
          </p>
          <br />
          <p className="text-base">
            Solicitá tu préstamo de dinero 100% online, seguro, desde donde estés. Podés calcular la cuota, elegir cómo
            recibir el dinero y cómo abonar las cuotas. Pedilo dónde y cuándo quieras. Con la confianza y el respaldo de
            Tarjeta Pampeana.
          </p>
          <div className="px-14 mx-16">
            <button
              onClick={handleNavigateToForm}
              className="my-5 bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              Solicitar préstamo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TerceraSeccion;
