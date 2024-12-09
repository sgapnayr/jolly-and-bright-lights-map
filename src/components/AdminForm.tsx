import { useState } from "react";
import { MarkerData } from "@/components/Map";
import markers from "@/app/data/markers.json";
import saveMarkers from "@/utils/saveMarkers";

const AdminForm: React.FC = () => {
  const [formData, setFormData] = useState<Omit<MarkerData, "id">>({
    name: "",
    lat: 0,
    lng: 0,
    photo: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMarker = { id: Date.now(), ...formData };
    saveMarkers([...markers, newMarker]);
    alert("Marker added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Latitude"
        value={formData.lat}
        onChange={(e) =>
          setFormData({ ...formData, lat: parseFloat(e.target.value) })
        }
        required
      />
      <input
        type="number"
        placeholder="Longitude"
        value={formData.lng}
        onChange={(e) =>
          setFormData({ ...formData, lng: parseFloat(e.target.value) })
        }
        required
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={formData.photo}
        onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <button type="submit">Add Marker</button>
    </form>
  );
};

export default AdminForm;
