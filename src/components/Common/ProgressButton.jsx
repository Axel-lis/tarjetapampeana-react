import { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProgressButton = ({ hasError: externalHasError, disabled: externalDisabled, onClick, ...props }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [internalHasError, setInternalHasError] = useState(false);

  // Combinar errores externos y estados internos para desactivar el botón
  const isDisabled = externalHasError || externalDisabled || isLoading || isCompleted || internalHasError;

  const backgroundColor =
    internalHasError || externalHasError
      ? 'bg-red-500 hover:bg-red-600'
      : isCompleted
      ? 'bg-green-500 hover:bg-green-600'
      : 'bg-blue-500 hover:bg-blue-600';

  useEffect(() => {
    // Si hay errores externos, reiniciar el estado inmediatamente
    if (externalHasError) {
      setIsLoading(false);
      setIsCompleted(false);
      setInternalHasError(true);
      setProgress(0);
    }
  }, [externalHasError]);

  const handleClick = (event) => {
    // Si hay errores o ya está desactivado, no hacer nada
    if (isDisabled) {
      return;
    }

    // Llamar al onClick original si existe
    if (onClick) {
      onClick(event);
    }

    // Iniciar la animación de carga
    setIsLoading(true);
    setProgress(0);
    setIsCompleted(false);
    setInternalHasError(false);
  };

  useEffect(() => {
    let progressInterval;

    if (isLoading && progress < 100) {
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 2;
          if (newProgress >= 100) {
            // Simular error aleatorio (30% chance)
            const shouldError = Math.random() < 0.3;

            if (shouldError) {
              setInternalHasError(true);
              setIsLoading(false);
              setIsCompleted(false);
            } else {
              setIsCompleted(true);
              setIsLoading(false);
            }

            clearInterval(progressInterval);
            return 100;
          }
          return newProgress;
        });
      }, 50);
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [isLoading, progress]);

  return (
    <button
      {...props}
      className={`relative min-w-[200px] h-12 px-6 py-2 rounded-lg font-medium text-white overflow-hidden transition-colors duration-300 ${backgroundColor}`}
      aria-live="polite"
      disabled={isDisabled}
      onClick={handleClick}
    >
      <div
        className={`absolute left-0 top-0 h-full transition-all duration-300 ease-out ${
          internalHasError ? 'bg-red-100/20' : 'bg-white/20'
        }`}
        style={{ width: `${progress}%` }}
      />
      <div className="relative flex items-center justify-center gap-2">
        {internalHasError || externalHasError ? (
          <>
            <FaTimes className="text-white" />
            <span>Error</span>
          </>
        ) : isCompleted ? (
          <>
            <FaCheck className="text-white" />
            <span>¡Enviado!</span>
          </>
        ) : (
          <span>{isLoading ? 'Cargando...' : 'Enviar'}</span>
        )}
      </div>
    </button>
  );
};

ProgressButton.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ProgressButton;
