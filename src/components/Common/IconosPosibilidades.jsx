import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SkeletonIconos = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
      <div className="h-4 bg-gray-300 rounded-full w-3/4 mb-2"></div>
    </div>
  );
};

const IconosPosibilidades = ({ tiempoCarga = 1000, posibilidades = [] }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), tiempoCarga);
    return () => clearTimeout(timer);
  }, [tiempoCarga]);

  return (
    <div className="bg-purple-50 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-4">
        {loading
          ? Array(posibilidades.length || 6)
              .fill(null)
              .map((_, index) => <SkeletonIconos key={index} />)
          : posibilidades.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icono}</div>
                <p className="text-center font-semibold">{item.texto}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

IconosPosibilidades.propTypes = {
  tiempoCarga: PropTypes.number, // Tiempo en milisegundos para el cargando
  posibilidades: PropTypes.arrayOf(
    PropTypes.shape({
      icono: PropTypes.element.isRequired, // Icono JSX
      texto: PropTypes.string.isRequired, // Texto asociado al icono
    }),
  ), // Lista de posibilidades
};

export default IconosPosibilidades;
