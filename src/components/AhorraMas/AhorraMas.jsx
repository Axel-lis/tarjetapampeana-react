import {  useMemo } from 'react';
import { slidesPromosMobile } from '../constants/index.js';
import { motion } from 'framer-motion';
import chicaAhorraMas from '../../assets/personas/chicaPagaMenos.png';

const AhorraMas = () => {
  const slides = useMemo(() => slidesPromosMobile, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 10,
        },
      },
    }),
    [],
  );

  return (
    <div className="py-20">
      <img src={chicaAhorraMas} alt="Ahorrá Más" className="w-full h-auto mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-auto bg-gray-200 rounded-lg"
            loading="lazy"
          >
            <img src={slide} alt="Ahorrá Más" className="w-full h-full object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AhorraMas;
