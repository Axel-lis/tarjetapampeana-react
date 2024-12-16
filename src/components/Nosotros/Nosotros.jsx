const Nosotros = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5 ">
        <div className="text pt-5 my-14">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">¿Quienes somos?</span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            Sobre <span className="text-indigo-600">Pampeana</span>
          </h2>
          <p className="text-gray-700">
            <strong className="text-indigo-600">Tarjeta Pampeana</strong>® es es una empresa de renombre regional con su
            Casa Central en Macachín, en la provincia de La Pampa. Desde nuestros inicios, nos enorgullecemos de servir
            a la comunidad en más de 50 localidades en las provincias de La Pampa, Buenos Aires, Córdoba y Santa Fe. Nos
            destacamos por ofrecer soluciones financieras confiables y cercanas a nuestros clientes, respaldados por una
            red de sucursales que abarca extensas áreas geográficas.
          </p>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            Nuestra <span className="text-indigo-600">Visión</span>
          </h2>
          <p className="sm:mt-4 text-gray-700">
            Trabajamos incansablemente para posicionar a Tarjeta Pampeana® como una opción destacada en el mercado
            regional de compras y pagos, brindando a nuestros clientes soluciones tangibles y beneficios exclusivos.
            Nuestro diferencial distintivo radica en la calidad excepcional de nuestro servicio, cimentado en una
            relación cercana con nuestros clientes y una atención personalizada que atiende sus necesidades
            individuales. En este contexto, nuestras políticas están guiadas por una constante búsqueda de innovación y
            mejora continua, permitiéndonos crecer en sintonía con el mercado para ofrecer siempre lo mejor a nuestros
            clientes. Somos una empresa con una constante inversión tecnológica cuya misión es ofrecerle a nuestros
            clientes un abanico cada vez mayor de ofertas dentro de las soluciones de Pago tanto en el ámbito digital &
            virtual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
