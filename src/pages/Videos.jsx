import React from "react"

const myVideos = [
  {
    id: 1,
    title: "React Dashboard Project",
    views: "12K views",
    likes: 230,
    status: "Published",
    duration: "15:42",
    thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Node.js Authentication Tutorial",
    views: "8.6K views",
    likes: 120,
    status: "Draft",
    duration: "22:18",
    thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "MongoDB Aggregation Pipeline",
    views: "19K views",
    likes: 310,
    status: "Published",
    duration: "10:55",
    thumbnail: "https://i.ytimg.com/vi/7XQeP0nYJ9I/maxresdefault.jpg",
  },
]

export default function Videos() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Videos</h1>
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Upload Video
        </button>
      </div>

      {/* Video List */}
      {myVideos.length === 0 ? (
        <p className="text-gray-500">You have not uploaded any videos yet.</p>
      ) : (
        <div className="space-y-4">
          {myVideos.map(video => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4"
            >
              {/* Thumbnail */}
              <div className="relative w-full md:w-56">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-32 w-full object-cover rounded-lg"
                />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg line-clamp-2">
                  {video.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                  <span>{video.views}</span>
                  <span>{video.likes} likes</span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${
                      video.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {video.status}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex md:flex-col gap-2 md:items-end">
                <button className="px-4 py-1 text-sm border rounded hover:bg-gray-100">
                  Edit
                </button>
                <button className="px-4 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
