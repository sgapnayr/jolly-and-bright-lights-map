import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/path/to/custom-icon.png", // Replace with your image
  iconSize: [38, 38], // Adjust size
  iconAnchor: [19, 38], // Anchor at the bottom center
});

<Marker key={marker.id} position={[marker.lat, marker.lng]} icon={customIcon}>
  <Popup>
    <h3>{marker.name}</h3>
    <img
      src={marker.photo}
      alt={marker.name}
      style={{ width: "100%", borderRadius: "8px" }}
    />
    <p>{marker.description}</p>
  </Popup>
</Marker>;
