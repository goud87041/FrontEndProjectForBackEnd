import React from "react"
import { useParams } from "react-router-dom"

const playlistVideos = {
  1: [
    {
      id: 1,
      title: "React Basics",
      duration: "12:45",
      thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "React Hooks Explained",
      duration: "18:20",
      thumbnail: "https://i.ytimg.com/vi/f687hBjwFcM/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "React Project Setup",
      duration: "10:30",
      thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg",
    },
  ],
  2: [
    {
      id: 4,
      title: "Node.js Intro",
      duration: "15:10",
      thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg",
    },
    {
      id: 5,
      title: "JWT Authentication",
      duration: "22:40",
      thumbnail: "https://i.ytimg.com/vi/mbsmsi7l3r4/maxresdefault.jpg",
    },
  ],
}

export default function PlaylistVideos() {
  const { playlistId } = useParams()
  const videos = playlistVideos[playlistId] || []

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Playlist Videos
      </h1>

      {videos.length === 0 ? (
        <p className="text-gray-500">No videos in this playlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-44 w-full object-cover rounded-t-xl"
                />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>

              <div className="p-4">
                <h2 className="font-semibold line-clamp-2">
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
