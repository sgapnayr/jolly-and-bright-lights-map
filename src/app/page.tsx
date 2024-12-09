import Map from "./components/Map";
import "./globals.css";

const markers = [
  {
    id: 1,
    name: "8701 Sandbar Ln, Panama City Beach, FL 32413",
    lat: 30.316695,
    lng: -85.873901,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 2,
    name: "8675 Coral Reef Wy, Panama City Beach, FL 32413",
    lat: 30.315897,
    lng: -85.869305,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 3,
    name: "8785 Coral Reef Wy, Panama City Beach, FL 32413",
    lat: 30.316887,
    lng: -85.873679,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 4,
    name: "8660 Treasure Past Wy, Panama City Beach, FL 32413",
    lat: 30.316216,
    lng: -85.864953,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 5,
    name: "8457 Dreams Float Ct, Panama City Beach, FL 32413",
    lat: 30.32289,
    lng: -85.864392,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 6,
    name: "9219 Paradise Dr, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Place no longer exists",
  },
  {
    id: 7,
    name: "9339 Paradise Dr, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 8,
    name: "8640 Treasure Past Wy, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 9,
    name: "8713 Coral Reef Wy, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 10,
    name: "8721 Seaplane Dr, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 11,
    name: "8650 Treasure Past Wy, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 12,
    name: "8489 Island Breeze Ave, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
  {
    id: 13,
    name: "8709 Sandbar Ln, Panama City Beach, FL 32413",
    lat: 30.3183,
    lng: -85.8561,
    photo: "/lights.jpg",
    description: "Beautiful lights with a reindeer display!",
  },
];

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Hosted by Jolly & Bright</h1>
      </header>

      {/* Map */}
      <Map markers={markers} />
    </div>
  );
}
