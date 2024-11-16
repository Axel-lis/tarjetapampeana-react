import Carousel from './Carousel';
import IconosPosiblidades from './IconosPosibilidades';
const PaginaPrincipal = () => {
  return (
    <div>
      <Carousel />
      <IconosPosiblidades tiempoCarga={1000} />
    </div>
  );
};

export default PaginaPrincipal;
