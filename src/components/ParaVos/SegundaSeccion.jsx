import ParaVosTarjetas from '../../assets/logos/tarjetas.png';
import { motion } from 'framer-motion';

const SegundaSeccion = () => {
  // Variantes para la lista
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre hijos
      },
    },
  };

  // Variantes para los elementos de la lista
  const itemVariants = {
    hidden: {
      x: -50, // Comienza desplazado hacia la izquierda
      opacity: 0,
    },
    visible: {
      x: 0, // Llega a su posición original
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-16" id="mediosdepago">
        {/* Imagen */}
        <motion.div
          className="flex flex-auto md:flex-1 justify-center"
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        >
          <img
            src={ParaVosTarjetas}
            alt="Para vos"
            className="w-4/5 md:w-3/4  transition-transform transform hover:scale-105"
          />
        </motion.div>

        {/* Contenido */}
        <motion.div
          className="flex flex-col md:flex-1 items-center md:items-start justify-center text-center md:text-left p-3 gap-6"
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }}
        >
          <p className="font-bold text-purple-600 text-2xl md:text-3xl p-6">¿Cómo pago mi tarjeta?</p>
          {/* Lista animada */}
          <motion.ul className="list-disc" variants={listVariants} initial="hidden" animate="visible">
            {[
              'Pagá desde un Cajero Automático',
              'Pagá con Débito Automático',
              'Pagá tu resumen con nuestros Promotores',
              'Pagá tu resumen desde tu Homebanking',
              'Pagá tu resumen con Pampa Pagos',
            ].map((item, index) => (
              <motion.li
                key={index}
                className="text-lg md:text-xl font-semibold py-2 hover:text-purple-600"
                variants={itemVariants}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SegundaSeccion;
