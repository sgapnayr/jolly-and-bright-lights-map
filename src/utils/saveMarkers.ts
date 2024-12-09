import fs from "fs";
import path from "path";
import { MarkerData } from "@/components/Map";

const filePath = path.resolve("./src/data/markers.json");

const saveMarkers = (markers: MarkerData[]) => {
  fs.writeFileSync(filePath, JSON.stringify(markers, null, 2));
};

export default saveMarkers;
