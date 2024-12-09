"use client";

import markers from "@/app/data/markers.json";
import Image from "next/image";
import Link from "next/link";

// import Map from "@/components/Map";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="z-50 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white py-6 shadow-xl">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-widest uppercase">
            Explore the most festive holiday lights!
          </h1>
          <Link
            className="hover:opacity-50 transition-all active:scale-95"
            target="_blank"
            href={"https://jollyandbrightlights.com/"}
          >
            <p className="mt-2 text-xs font-light tracking-wide opacity-50">
              Want Custom Christmas Lights? Click here!
            </p>
          </Link>
        </div>
      </header>

      <main className="relative z-0">
        <Map markers={markers} />
      </main>

      <Image
        src="/logo.jpg"
        alt="Jolly & Bright Logo"
        width={128}
        height={128}
        className="absolute z-50 top-44 right-4 rounded-lg shadow-xl"
      />
    </div>
  );
}
