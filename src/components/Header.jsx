import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    setUser(null); // clears user in context and localStorage
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white shadow flex items-center justify-end px-6 gap-4">
      {!user ? (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      ) : (
        <>
          <span className="text-gray-700 font-medium">Hi, {user.user.fullname}</span>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      )}
    </header>
  );
}
