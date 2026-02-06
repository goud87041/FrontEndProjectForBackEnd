import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserPlayLists } from "../services/playList"



export default function MyPlaylist() {

  const [playlists , setPlaylists] = useState([])
  const [getCurrentUserId , setGetCurrentUserId] = useState("")

  



  const navigate = useNavigate()

  const openPlaylist = (id) => {
    navigate(`/playlist/${id}`)
  }

  const createPlaylist = () => {
    navigate("/create-playlist") // change if using modal
  }



  useEffect(()=>{
    
    const getplayList = async ()=>{
      const res = await getUserPlayLists()

      setPlaylists(res.data.data)
    }

    const getUser = async()=>{
      const res = await getCurrentUserId()
    }

    getUser()

    getplayList()
  },[])



  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Playlists</h1>

        <button
          onClick={createPlaylist}
          className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
        >
          + Create Playlist
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map(playlist => (
          <div
            key={playlist.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={playlist.thumbnail}
              alt={playlist.name}
              className="h-48 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h2 className="font-semibold text-xl">
                {playlist.name}
              </h2>
              <p className="text-sm text-gray-600">
                {playlist.totalVideos} videos
              </p>

              <button
                onClick={() => openPlaylist(playlist.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
