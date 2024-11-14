import chicaPampeana from '../assets/personas/chicaPampeana.png';
import qrIMG from '../assets/logos/qr.png';

const PaginaPrincipal = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white py-12 px-4 relative">
      <div className="flex flex-col py-12 items-center md:w-1/2">
        <img src={qrIMG} alt="Código QR" className="w-2/4 mt-4 mb-4" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
        <h2 className="text-2xl font-bold">Adquirí Pampeana y disfrutá de promociones increíbles.</h2>
        <p className="mt-2 text-gray-700">Pagá menos, ahorrá más.</p>
        <p className="mt-2 text-purple-500">¡Escaneá el QR para obtener tu tarjeta!</p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
        <img src={chicaPampeana} alt="Persona mostrando tarjeta" className="lg:size-1/2	 md:w-64" />
      </div>
    </div>
  );
};

export default PaginaPrincipal;
