import { useNavigate } from 'react-router-dom';
const DefensaButton = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate('/defensa-consumidor');
  };
  return (
    <div className="flex flex-col items-center justify-between">
      {/* Defensa del Consumidor Section */}
      <section className="w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Defensa del Consumidor</h2>
        <p className="text-gray-600 leading-relaxed">
          Esta es la sección de Defensa del Consumidor. Aquí encontrarás información importante sobre tus derechos como
          consumidor y los procedimientos para realizar reclamos o consultas.
        </p>
        <button
          onClick={handleNavigateToForm}
          aria-label="Navegar a la sección de Defensa del Consumidor"
          className="my-5 bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
          Ir a Defensa del Consumidor
        </button>
      </section>
    </div>
  );
};

export default DefensaButton;
