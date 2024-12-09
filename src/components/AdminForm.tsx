import { useState } from "react";

const AdminForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    lat: "",
    lng: "",
    photo: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/google-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Marker added!");
        setFormData({
          name: "",
          lat: "",
          lng: "",
          photo: "",
          description: "",
        });
      } else {
        alert("Failed to add marker");
      }
    } catch {
      alert("An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
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
        onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Longitude"
        value={formData.lng}
        onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={formData.photo}
        onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      />
      <button type="submit">Add Marker</button>
    </form>
  );
};

export default AdminForm;
