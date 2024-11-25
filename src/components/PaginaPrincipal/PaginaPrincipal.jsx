import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import PaquetePampeana from './PaquetePampeana';
import PaquetesAcordion from './PaquetesAcordion';
import IconosPosiblidades from './IconosPosibilidades';
import PreguntasFrecuentes from '../Common/PreguntasFrecuentes';
import Footer from '../Common/Footer';
const PaginaPrincipal = () => {
  return (
    <div>
      <Carousel tiempoCarga={1100} />
      <IconosPosiblidades tiempoCarga={1000} />
      <Carousel2 tiempoCarga={1500} />
      <PaquetePampeana />
      <PaquetesAcordion />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;