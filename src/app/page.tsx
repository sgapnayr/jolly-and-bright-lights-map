"use client";

import markers from "@/app/data/markers.json";
import Image from "next/image";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white py-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-widest uppercase">
            Hosted by Jolly & Bright
          </h1>
          <p className="mt-2 text-xs font-light tracking-wide opacity-50">
            Explore the most festive holiday lights in town!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-0">
        <Map markers={markers} />
      </main>

      {/* Logo */}
      <Image
        src="/logo.jpg"
        alt="Jolly & Bright Logo"
        width={128}
        height={128}
        className="absolute z-50 md:bottom-8 bottom-16 right-4 rounded-lg shadow-xl"
      />
    </div>
  );
}
