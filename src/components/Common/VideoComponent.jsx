const VideoComponent = ({ src }) => {
  return (
    <video src={src} autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default VideoComponent;
