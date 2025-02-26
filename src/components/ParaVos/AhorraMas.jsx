import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AhorraMas = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ahorra-mas');
  };

  useEffect(() => {
    // Verificar si el script ya está presente
    if (!document.querySelector('script[src="https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-1">
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
          className="flex items-center justify-center sm:w-2/4 sm:max-w-lg ml-auto cursor-pointer"
          onClick={handleNavigate}
        >
          {/* Usando lottie-player */}
          <DotLottieReact
            src="https://lottie.host/b473a622-702a-43bf-ac64-4cf6fb02acfd/KuNdZj8M1y.lottie"
            background="transparent"
            speed="1"
            style={{ width: '400px', height: '400px' }}
            loop
            autoplay
          ></DotLottieReact>
        </div>
      </div>
    </div>
  );
};

export default AhorraMas;