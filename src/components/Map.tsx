/* eslint-disable @next/next/no-img-element */
"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { useState } from "react";
import Link from "next/link";

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

const MapEventHandler: React.FC<{
  center: LatLngExpression;
  onShowRecenter: (show: boolean) => void;
}> = ({ center, onShowRecenter }) => {
  useMapEvents({
    moveend: (event) => {
      const map = event.target;
      const currentCenter = map.getCenter();
      const distance = map.distance(currentCenter, L.latLng(center));

      onShowRecenter(distance > 3500);
    },
  });

  return null;
};

const RecenterButton: React.FC<{ center: LatLngExpression }> = ({ center }) => {
  const map = useMap();

  const handleRecenter = () => {
    map.setView(center, map.getZoom());
  };

  return (
    <button
      onClick={handleRecenter}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#0078a8] text-white font-semibold rounded-lg shadow-xl hover:opacity-50 transition z-50"
      style={{ zIndex: 9999 }}
    >
      GO TO CENTER
    </button>
  );
};

const Map: React.FC<MapProps> = ({ markers }) => {
  const center: LatLngExpression = [30.3183, -85.8561];
  const [showRecenter, setShowRecenter] = useState(false);

  return (
    <div className="map-wrapper relative">
      <MapContainer
        key="main-map"
        center={center}
        zoom={13}
        style={{ height: "calc(100vh - 100px)", width: "100%", color: "white" }}
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
            <Popup className="scale-90">
              <h3>{marker.name}</h3>
              <img
                src={marker.photo}
                alt={marker.name}
                style={{ width: "90%" }}
              />
              <p>{marker.description}</p>
              {/* Navigation Button */}
              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center px-4 py-2 border-[#0078a8] border-2 text-white font-bold rounded-lg hover:opacity-50 transition"
              >
                Navigate Here
              </Link>
              <a
                href={`https://www.facebook.com/groups/1253447752522429/?_rdr`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center px-4 py-2 text-[#0078a8] font-bold rounded-lg hover:opacity-50 transition"
              >
                Want to list your house?
              </a>
            </Popup>
          </Marker>
        ))}
        <MapEventHandler center={center} onShowRecenter={setShowRecenter} />
        {showRecenter && <RecenterButton center={center} />}
      </MapContainer>
    </div>
  );
};

export default Map;
