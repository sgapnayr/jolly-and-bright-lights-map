/* eslint-disable @next/next/no-img-element */
import React from "react";

export type MarkerData = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  photo: string;
  description: string;
};

interface HouseListProps {
  markers: MarkerData[];
}

const HouseList: React.FC<HouseListProps> = ({ markers }) => {
  const generateGoogleMapsUrl = (lat: number, lng: number) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  };

  return (
    <div className="house-list absolute bottom-0 z-50 w-full">
      {markers.map((marker) => (
        <div key={marker.id} className="house-card">
          <img src={marker.photo} alt={marker.name} className="house-image" />
          <div className="house-details">
            <h3>{marker.name}</h3>
            <p>{marker.description}</p>
            <a
              href={generateGoogleMapsUrl(marker.lat, marker.lng)}
              target="_blank"
              rel="noopener noreferrer"
              className="navigate-button"
            >
              Navigate Here
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
