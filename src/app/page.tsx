import Map from "@/app/components/Map";
import markers from "@/app/data/markers.json";

export default function Home() {
  return <Map markers={markers} />;
}
