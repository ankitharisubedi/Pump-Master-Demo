import React from 'react';
import { Card } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const PumpMap = ({ pumps, currentPump }) => {
  // Create custom icons
  const getIcon = (status) => {
    return L.divIcon({
      className: '',
      html: `<div class="map-marker ${
        status === 'Operational' ? 'operational' : 
        status === 'Maintenance' ? 'maintenance' : 'offline'
      }"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    });
  };

  return (
    <Card className="h-100">
      <Card.Header className="bg-light">
        <h5 className="mb-0">Map</h5>
      </Card.Header>
      <Card.Body style={{ height: '400px' }}>
        <MapContainer 
          center={[currentPump.latitude, currentPump.longitude]} 
          zoom={20} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {pumps.map(pump => (
            <Marker
              key={pump.id}
              position={[pump.latitude, pump.longitude]}
              icon={getIcon(pump.status)}
            >
              <Popup>
                <div className="text-center">
                  <strong>{pump.name}</strong><br />
                  {pump.type}<br />
                  Status: <span className={
                    pump.status === 'Operational' ? 'text-success' :
                    pump.status === 'Maintenance' ? 'text-warning' : 'text-danger'
                  }>
                    {pump.status}
                  </span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card.Body>
    </Card>
  );
};

export default PumpMap;