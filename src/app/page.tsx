"use client";

import markers from "@/app/data/markers.json";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white py-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-widest uppercase">
            Hosted by Jolly & Bright
          </h1>
          <p className="mt-2 text-lg font-light tracking-wide">
            Explore the most festive holiday lights in town!
          </p>
        </div>
      </header>
      <main className="mt-4">
        <Map markers={markers} />
      </main>
    </div>
  );
}
