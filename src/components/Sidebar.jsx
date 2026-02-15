
import { NavLink } from "react-router-dom"

const links = [
  { name: "Home", path: "/" },
  { name: "Videos", path: "/videos" },
  { name: "Tweet", path: "/tweets" },
  { name: "My Playlist", path: "/UserPlayLists" },
  { name: "subscribed channal",path : "/subscribed-channels"},
  { name: "Liked Videos", path: "/liked" },
  { name: "My Profile", path: "/profile" },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav className="space-y-2">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
