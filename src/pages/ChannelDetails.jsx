import React from "react"
import { useParams } from "react-router-dom"

const channelsData = {
  1: {
    name: "Code Academy",
    username: "@codeacademy",
    avatar: "https://i.pravatar.cc/150?img=15",
    bio: "Learn coding, web development, and programming step by step.",
    totalVideos: 45,
    subscribers: 1200,
    totalLikes: 5600,
    videos: [
      {
        id: 1,
        title: "React Full Course",
        duration: "2:45:12",
        thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg",
      },
      {
        id: 2,
        title: "JavaScript Basics",
        duration: "1:30:00",
        thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
      },
    ],
  },
  2: {
    name: "Frontend Pro",
    username: "@frontendpro",
    avatar: "https://i.pravatar.cc/150?img=18",
    bio: "Tips, tricks, and tutorials for front-end developers.",
    totalVideos: 32,
    subscribers: 900,
    totalLikes: 3200,
    videos: [
      {
        id: 3,
        title: "Tailwind CSS Crash Course",
        duration: "1:20:45",
        thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/maxresdefault.jpg",
      },
      {
        id: 4,
        title: "React Hooks Explained",
        duration: "0:45:30",
        thumbnail: "https://i.ytimg.com/vi/f687hBjwFcM/maxresdefault.jpg",
      },
    ],
  },
  // add more channels as needed
}

export default function ChannelDetails() {
  const { channelId } = useParams()
  const channel = channelsData[channelId]

  if (!channel) {
    return (
      <div className="max-w-3xl mx-auto text-center mt-10">
        <p className="text-gray-500">Channel not found.</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Channel Header */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
        <img
          src={channel.avatar}
          alt={channel.name}
          className="w-32 h-32 rounded-full object-cover border"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{channel.name}</h1>
          <p className="text-gray-500">{channel.username}</p>
          <p className="mt-2 text-gray-700">{channel.bio}</p>

          <div className="flex gap-6 mt-4 text-sm text-gray-600">
            <span>
              <strong>{channel.totalVideos}</strong> Videos
            </span>
            <span>
              <strong>{channel.subscribers}</strong> Subscribers
            </span>
            <span>
              <strong>{channel.totalLikes}</strong> Likes
            </span>
          </div>
        </div>

        <div className="flex mt-4 md:mt-0">
          <button className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Channel Videos */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Videos</h2>
        {channel.videos.length === 0 ? (
          <p className="text-gray-500">No videos uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {channel.videos.map(video => (
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
                  <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
