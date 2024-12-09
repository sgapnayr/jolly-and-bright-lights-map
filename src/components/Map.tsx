/* eslint-disable @next/next/no-img-element */
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

export type MarkerData = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  photo: string;
  description: string;
};

interface MapProps {
  markers: MarkerData[];
}

const createCustomIcon = (photoUrl: string) =>
  new L.DivIcon({
    className: "custom-marker",
    html: `
      <div class="custom-icon">
        <img src="${photoUrl}" alt="Marker Icon" />
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });

const Map: React.FC<MapProps> = ({ markers }) => {
  const center: LatLngExpression = [30.3183, -85.8561];

  const generateGoogleMapsUrl = (lat: number, lng: number) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  };

  return (
    <div className="map-wrapper">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "calc(100vh - 100px)", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
        />
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={createCustomIcon(marker.photo)}
          >
            <Popup>
              <h3>{marker.name}</h3>
              <img
                src={marker.photo}
                alt={marker.name}
                style={{ width: "100%" }}
              />
              <p>{marker.description}</p>
              {/* Navigation Button */}
              <a
                href={generateGoogleMapsUrl(marker.lat, marker.lng)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                Navigate Here
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
