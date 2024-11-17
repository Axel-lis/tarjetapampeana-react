import { useState } from 'react';
import paquetePampeana from '../assets/banners/carousel1/carousel1.png';
import { motion } from 'framer-motion';
import Skeleton from './Skeleton';
import { useEffect } from 'react';

const PaquetePampeana = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer); //limpia el timer cuando termina
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 }, // Oculto al inicio
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        repeat: Infinity, // Repetir infinitamente
        repeatType: 'loop', // Loop normal
        repeatDelay: 10, // Pausa de 10 segundos entre cada ciclo
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 }, // Desaparecido al inicio
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        repeat: Infinity, // Repetir infinitamente
        repeatType: 'loop', // Loop normal
        repeatDelay: 10, // Pausa de 10 segundos entre cada ciclo
        delay: 0.2, // Retraso inicial para cada ítem
      },
    },
  };

  // Renderiza el Skeleton mientras está cargando
  if (isLoading) {
    return (
      <div className="flex lg:flex-row md:flex-col gap-10 justify-center">
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <motion.div
      className="md:container md:mx-auto my-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 ml-4">
        {/* Columna de la imagen */}
        <motion.div className="flex-1 flex justify-center" variants={containerVariants}>
          <img src={paquetePampeana} alt="Paquete Pampeana" className="max-w-full h-auto" />
        </motion.div>

        {/* Columna de los bulletpoints */}
        <motion.div className="flex-1" variants={containerVariants}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ¡Con tu <span className="text-purple-600">Paquete Pampeana</span> disfrutás de los mejores beneficios al
            mejor precio!
          </h2>
          <motion.ul className="list-disc list-inside space-y-2 text-purple-700" initial="hidden" animate="visible">
            {/* Cada ítem de la lista se anima individualmente */}
            {[
              'Acceso a Préstamos Personales PampaCa$h.',
              'Con tu Paquete Gold tenés bonificado el 100% del costo de tu Renovación Anual.',
              'Tarjeta Pampeana Regional, con importantes descuentos todos los días de la semana.',
              'Tarjeta Pampeana Argencard Gold con aceptación Nacional.',
            ].map((item, index) => (
              <motion.li key={index} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PaquetePampeana;
