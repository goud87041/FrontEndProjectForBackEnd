import React, { useEffect, useState } from "react"
import { createPlayList, getUserPlayLists } from "../services/playList.js"
import { useNavigate } from "react-router-dom"

export default function MyPlaylist() {
  const [playlists, setPlaylists] = useState([])
  const [showForm, setShowForm] = useState(false)
  const navigator = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

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

  // const handleButton = (e)=>{
  //   // e.preventDefault()
  //   console.log(e);
    
  //   navigator(`/playList/${e}`)
  // }

  const handleCreatePlaylist = async (e) => {
    e.preventDefault()

    try {
      await createPlayList({ name, description })
      setShowForm(false)
      setName("")
      setDescription("")
      fetchPlaylists() // refresh list
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
          onClick={() => setShowForm(true)}
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
              Create New Playlist
            </h2>

            <form onSubmit={handleCreatePlaylist} className="space-y-4">
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
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Playlist list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {playlists.map((pl) => (
  <div key={pl._id} className="bg-white shadow rounded-xl p-4">
    <h3 className="font-semibold">{pl.name}</h3>
    <p className="text-sm text-gray-600">{pl.description}</p>

    <button
      onClick={() => navigator(`/playList/${pl._id}`)}   // ✅ important
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Open
    </button>
  </div>
))}

      </div>
    </div>
  )
}
