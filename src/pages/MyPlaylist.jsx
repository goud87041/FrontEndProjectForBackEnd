import React, { useEffect, useState } from "react"
import {
  createPlayList,
  deletePlayList,
  getUserPlayLists,
  updatePlayList,
} from "../services/playList.js"
import { useNavigate } from "react-router-dom"

export default function MyPlaylist() {
  const [playlists, setPlaylists] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editPlaylistId, setEditPlaylistId] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const navigator = useNavigate()

  useEffect(() => {
    fetchPlaylists()
  }, [])

  const fetchPlaylists = async () => {
    try {
      const res = await getUserPlayLists()
      setPlaylists(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  // CREATE + UPDATE handler
  const handleSubmitPlaylist = async (e) => {
    e.preventDefault()

    try {
      if (isEditing) {
        await updatePlayList(editPlaylistId, { name, description })
      } else {
        await createPlayList({ name, description })
      }

      setShowForm(false)
      setIsEditing(false)
      setEditPlaylistId(null)
      setName("")
      setDescription("")
      fetchPlaylists()
    } catch (error) {
      console.error(error)
    }
  }

  // DELETE
  const handleDeletePlayList = async (id) => {
    try {
      await deletePlayList(id)
      setPlaylists((prev) => prev.filter((pl) => pl._id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Playlists</h1>

        <button
          onClick={() => {
            setShowForm(true)
            setIsEditing(false)
            setName("")
            setDescription("")
          }}
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          + Create Playlist
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Playlist" : "Create New Playlist"}
            </h2>

            <form onSubmit={handleSubmitPlaylist} className="space-y-4">
              <input
                type="text"
                placeholder="Playlist name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                rows={3}
                required
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setIsEditing(false)
                    setEditPlaylistId(null)
                  }}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  {isEditing ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Playlist list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {playlists.map((pl) => (
          <div
            key={pl._id}
            className="bg-white shadow rounded-xl px-4 py-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{pl.name}</h3>
                <p className="text-sm text-gray-600">{pl.description}</p>
              </div>

              {/* EDIT */}
              <button
                onClick={() => {
                  setShowForm(true)
                  setIsEditing(true)
                  setEditPlaylistId(pl._id)
                  setName(pl.name)
                  setDescription(pl.description)
                }}
                className="flex items-center gap-2 px-3 py-1 text-sm rounded hover:bg-gray-100"
              >
                ✏️ Edit
              </button>
            </div>

            <div className="flex items-end justify-between mt-4">
              <button
                onClick={() => navigator(`/playList/${pl._id}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open
              </button>

              <button
                onClick={() => handleDeletePlayList(pl._id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
