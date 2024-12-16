import React, { Suspense } from 'react';
import videoSource from '../../assets/images/ahorra.mp4';
import { useNavigate } from 'react-router-dom';
// Cargar VideoComponent de forma lazy
const VideoComponent = React.lazy(() => import('../Common/VideoComponent'));

const AhorraMas = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ahorra-mas');
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-10">
      <div className="w-full sm:w-1/2 max-w-2xl sm:ml-10 sm:mr-auto mb-6 sm:mb-0">
        <p className="text-xl sm:text-2xl font-semibold text-purple-700 dark:text-purple-600 mb-4">
          Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
        </p>
        <p className="text-xl sm:text-2xl font-semibold text-purple-700/75 dark:text-purple-600/75 mb-4">
          Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
        </p>
        <p className="text-xl sm:text-2xl font-semibold text-purple-700/50 dark:text-purple-600/50 mb-4">
          Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
        </p>
        <p className="text-xl sm:text-2xl font-semibold text-purple-700/25 dark:text-purple-600/25 mb-4">
          Con Tarjeta Pampeana, cada día <strong>AHORRA MÁS</strong>
        </p>
      </div>

      <div
        className="flex items-center justify-center sm:w-1/4 sm:max-w-lg ml-auto cursor-pointer"
        onClick={handleNavigate}
      >
        <Suspense fallback={<div className="text-lg">Cargando video...</div>}>
          <VideoComponent src={videoSource} />
        </Suspense>
      </div>
    </div>
  );
};

export default AhorraMas;
