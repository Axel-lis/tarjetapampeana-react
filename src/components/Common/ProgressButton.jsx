import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';

const ProgressButton = () => {
  const [buttonState, setButtonState] = useState('idle');

  const handleClick = () => {
    if (buttonState !== 'idle') return;

    setButtonState('loading');
    setTimeout(() => {
      setButtonState('completed');
      setTimeout(() => {
        setButtonState('idle');
      }, 2000);
    }, 3000);
  };

  const getButtonStyles = () => {
    const baseStyles =
      'flex items-center justify-center gap-2 px-6 py-2.5 rounded-md font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    switch (buttonState) {
      case 'loading':
        return `${baseStyles} bg-gray-400 cursor-not-allowed`;
      case 'completed':
        return `${baseStyles} bg-green-500 hover:bg-green-600 focus:ring-green-300`;
      default:
        return `${baseStyles} bg-blue-500 hover:bg-blue-600 focus:ring-blue-300`;
    }
  };

  const getButtonContent = () => {
    switch (buttonState) {
      case 'loading':
        return (
          <>
            <AiOutlineLoading3Quarters className="animate-spin" />
            Cargando...
          </>
        );
      case 'completed':
        return (
          <>
            <FiCheck className="text-lg" />
            Enviado!
          </>
        );
      default:
        return 'Enviar';
    }
  };

  return (
    <button onClick={handleClick} disabled={buttonState === 'loading'} className={getButtonStyles()}>
      {getButtonContent()}
    </button>
  );
};

export default ProgressButton;
