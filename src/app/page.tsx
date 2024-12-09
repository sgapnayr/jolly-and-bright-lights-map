"use client";

import "./globals.css";
import markers from "@/app/data/markers.json";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1>Hosted by Jolly & Bright</h1>
      </header>
      {typeof window !== "undefined" ? (
        <Map markers={markers} />
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}
