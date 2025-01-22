import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AhorraMas = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ahorra-mas');
  };

  useEffect(() => {
    // Cargar el script de Lottie Player dinámicamente
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-3/4 mx-auto py-12">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-10">
        {/* Texto */}
        <div className="w-full sm:w-1/2 max-w-2xl sm:ml-10 sm:mr-auto mb-6 sm:mb-0">
          <p className="text-xl sm:text-2xl font-semibold text-purple-700 dark:text-purple-600 mb-4 whitespace-nowrap">
            Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-purple-700/75 dark:text-purple-600/75 mb-4  whitespace-nowrap">
            Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-purple-700/50 dark:text-purple-600/50 mb-4  whitespace-nowrap">
            Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-purple-700/25 dark:text-purple-600/25 mb-4  whitespace-nowrap">
            Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
          </p>
        </div>

        {/* Animación Lottie */}
        <div
          className="flex items-center justify-center sm:w-1/4 sm:max-w-lg ml-auto cursor-pointer"
          onClick={handleNavigate}
        >
          {/* Usando lottie-player */}
          <lottie-player
            src="https://lottie.host/b258f142-39a5-494a-82e9-32275619905f/RbtlJUQNHA.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default AhorraMas;
