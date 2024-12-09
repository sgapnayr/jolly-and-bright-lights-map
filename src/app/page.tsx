import Map from "./components/Map";
import "./globals.css";
import markers from "@/app/data/markers.json";

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
