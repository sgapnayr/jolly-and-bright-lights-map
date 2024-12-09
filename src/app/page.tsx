"use client";

import dynamic from "next/dynamic";
import markers from "@/app/data/markers.json";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <header>
        <h1>Hosted by Jolly & Bright</h1>
      </header>
      <Map markers={markers} />
    </div>
  );
}
