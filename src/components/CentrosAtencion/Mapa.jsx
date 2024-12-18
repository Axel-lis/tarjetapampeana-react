import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import logoIcon from '../../assets/logos/LOGO.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { centrosDeAtencion } from '../constants/map.js';

// Define the custom icon
var iconoPampa = L.icon({
  iconUrl: logoIcon,
  shadowUrl: markerShadow,
  iconSize: [20, 20], // Tamaño del ícono
  shadowSize: [0, 0], // Tamaño de la sombra
  iconAnchor: [22, 94], // Punto del ícono que se corresponde con la ubicación del marcador
  shadowAnchor: [4, 62], // Punto de la sombra
  popupAnchor: [-3, -76], // Punto desde el cual se abrirá el popup
});

const Mapa = () => {
  return (
    <div className="bg-gray-50 flex justify-center items-center w-full h-screen">
      <div className="w-full sm:w-3/4 h-[70vh]">
        <h3 className="font-bold text-2xl text-gray-500 mb-4">
          📍Usá el Mapa Para buscar tus Centros de Atención más cercanos
        </h3>
        <MapContainer
          center={[-37.375265177510805, -63.77341369814443]} // Coordenadas iniciales
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {centrosDeAtencion.map((centro, index) => {
            const { lat, lng } = centro.ubicacion || {};
            if (!lat || !lng) return null;

            return (
              <Marker
                key={index}
                position={[lat, lng]}
                icon={iconoPampa} // Asignar el ícono personalizado directamente aquí
              >
                <Popup>
                  <div>
                    <h4 className="font-bold text-lg">{centro.nombre}</h4>
                    <p>
                      <strong>Dirección:</strong> {centro.direccion}
                    </p>
                    <p>
                      <strong>Teléfono:</strong> {centro.telefono}
                    </p>
                    <p>
                      <strong>Provincia:</strong> {centro.provincia}
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa;
