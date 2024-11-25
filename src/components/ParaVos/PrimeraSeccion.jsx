import chicaNuevaPampeana from '../../assets/personas/chicaNuevaPampeana.png';

const PrimeraSeccion = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 pt-16">
        {/* Bloque de texto */}
        <div className="flex flex-auto md:flex-1 ">
          <blockquote className="text-xl md:text-2xl py-10 mx-10 font-semibold italic text-center text-slate-900">
            ¡Sacá tu
            <span className="relative mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple-600 inline-block">
              <span className="relative text-white">Tarjeta Pampeana</span>
            </span>
            y empezá a disfrutar!
          </blockquote>
        </div>
        {/* Imagen */}
        <div className="flex flex-auto md:flex-1 md:max-w-full">
          <img src={chicaNuevaPampeana} alt="Pampeana" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default PrimeraSeccion;
