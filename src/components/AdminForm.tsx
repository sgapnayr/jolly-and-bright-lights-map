import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const AdminForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    lat: "",
    lng: "",
    photo: "",
    description: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      adminCredentials.username === "kate" &&
      adminCredentials.password === "kateisawesome"
    ) {
      setIsAuthenticated(true);
      setIsModalOpen(false);
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 relative">
      {/* Admin Login Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h2 className="text-2xl font-thin text-gray-800 mb-4">
                Admin Login
              </h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={adminCredentials.username}
                  onChange={(e) =>
                    setAdminCredentials({
                      ...adminCredentials,
                      username: e.target.value,
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={adminCredentials.password}
                    onChange={(e) =>
                      setAdminCredentials({
                        ...adminCredentials,
                        password: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-500"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  Login
                </button>
                <div className="w-full text-center flex justify-center">
                  <button
                    onClick={() => router.push("/")}
                    className="flex items-center text-blue-500 hover:text-blue-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Go Back
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Form */}
      {isAuthenticated && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-4"
        >
          <h2 className="text-2xl font-thin text-gray-800 mb-4">
            Add New House
          </h2>
          <input
            type="text"
            placeholder="Address"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Latitude"
            value={formData.lat}
            onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Longitude"
            value={formData.lng}
            onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Need to get latitude and longitude for an address?{" "}
            <a
              href="https://gps-coordinates.org/coordinate-converter.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Click here
            </a>
          </p>
          <input
            type="text"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={(e) =>
              setFormData({ ...formData, photo: e.target.value })
            }
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Have an image but no photo URL?{" "}
            <a
              href="https://imgbb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Upload it here
            </a>
          </p>
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Add Marker
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminForm;
