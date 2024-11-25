import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import chicaNuevaPampeana from '../../assets/personas/chicaNuevaPampeana.png';
import Skeleton from '../Common/Skeleton'; // Importa el Skeleton Loader

const PrimeraSeccion = ({ tiempoCarga = 1100 }) => {
  const [loading, setLoading] = useState(true); // Estado para controlar la visualización del loader

  // Simula el tiempo de carga de la imagen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), tiempoCarga);
    return () => clearTimeout(timer);
  }, [tiempoCarga]);

  return (
    <div className="container">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 pt-16">
        {/* Bloque de texto */}
        <div className="flex flex-auto md:flex-1">
          <blockquote className="text-xl md:text-2xl py-10 mx-10 font-semibold italic text-center text-slate-900">
            ¡Sacá tu
            <span className="relative mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple-600 inline-block">
              <span className="relative text-white">Tarjeta Pampeana</span>
            </span>
            y empezá a disfrutar!
          </blockquote>
        </div>
        {/* Contenedor de imagen con Skeleton Loader */}
        <div className="flex flex-auto md:flex-1 md:max-w-full relative">
          {/* Mostrar Skeleton Loader mientras la imagen no se ha cargado */}
          {loading ? (
            <Skeleton />
          ) : (
            <img
              src={chicaNuevaPampeana}
              alt="Pampeana"
              className="w-full h-auto transition-opacity duration-500 opacity-100"
              onLoad={() => setLoading(false)} // Cuando la imagen se carga, actualiza el estado
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Validación de 'tiempoCarga' como número
PrimeraSeccion.propTypes = {
  tiempoCarga: PropTypes.number, // tiempoCarga debe ser un número
};

export default PrimeraSeccion;
