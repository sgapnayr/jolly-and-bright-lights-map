"use client";

import AdminForm from "@/components/AdminForm";

// import dynamic from "next/dynamic";
// const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="z-50 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white py-6 shadow-xl">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl px-1 font-bold tracking-widest uppercase">
            Admin Area
          </h1>

          <p className="mt-2 text-xs font-light tracking-wide opacity-50">
            For adding new locations to the map.
          </p>
        </div>
      </header>
      <AdminForm />
    </div>
  );
}
