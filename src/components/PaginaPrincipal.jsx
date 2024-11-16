import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import IconosPosiblidades from './IconosPosibilidades';
const PaginaPrincipal = () => {
  return (
    <div>
      <Carousel tiempoCarga={1100} />
      <IconosPosiblidades tiempoCarga={1000} />
      <Carousel2 tiempoCarga={1500} />
    </div>
  );
};

export default PaginaPrincipal;
