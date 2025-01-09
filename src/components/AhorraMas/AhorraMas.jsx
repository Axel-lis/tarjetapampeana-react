import { useState, useEffect, useMemo } from 'react';
import { slidesPromos, slidesPromosMobile } from '../constants/index.js';
import { motion } from 'framer-motion';
import debounce from 'lodash/debounce';
import chicaAhorraMas from '../../assets/personas/chicaPagaMenos.png';
const AhorraMas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //debounce para evitar que checkMobile se ejecute demasiado seguido
    const checkMobile = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 200);
    //ejectuar al montar
    checkMobile();
    window.addEventListener('resize', checkMobile);
    //limpiar el evento cuando el componente desmonte
    return () => {
      removeEventListener('resize', checkMobile);
    };
  }, []);

  const slides = useMemo(() => (isMobile ? slidesPromosMobile : slidesPromos), [isMobile]);

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
      <div className="flex flex-col gap-4">
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
