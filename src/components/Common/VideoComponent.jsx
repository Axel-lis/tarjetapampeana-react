import PropTypes from 'prop-types';

const VideoComponent = ({ src }) => {
  return (
    <video src={src} autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
      Tu navegador no soporta el elemento de video.
    </video>
  );
};
VideoComponent.propTypes = {
  src: PropTypes.string.isRequired,
};
export default VideoComponent;
