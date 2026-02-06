import React, { useState } from "react"

export default function Tweet() {
  const currentUser = {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://i.pravatar.cc/150?img=3",
  }

  const [tweets, setTweets] = useState([
    {
      id: 1,
      user: {
        name: "Alice Smith",
        username: "@alice",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      content: "Learning MERN stack step by step 🚀",
      likes: 14,
      createdAt: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Bob Johnson",
        username: "@bob",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
      content: "MongoDB aggregation finally makes sense!",
      likes: 9,
      createdAt: "1 day ago",
    },
  ])

  const [newTweet, setNewTweet] = useState("")

  const handleTweet = () => {
    if (!newTweet.trim()) return

    setTweets([
      {
        id: Date.now(),
        user: currentUser,
        content: newTweet,
        likes: 0,
        createdAt: "Just now",
      },
      ...tweets,
    ])

    setNewTweet("")
  }

  const handleLike = id => {
    setTweets(
      tweets.map(tweet =>
        tweet.id === id
          ? { ...tweet, likes: tweet.likes + 1 }
          : tweet
      )
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tweets</h1>

      {/* Tweet Box */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex gap-3">
          <img
            src={currentUser.avatar}
            alt="User"
            className="w-10 h-10 rounded-full"
          />

          <textarea
            value={newTweet}
            onChange={e => setNewTweet(e.target.value)}
            placeholder="What's happening?"
            className="w-full border rounded p-3 resize-none focus:outline-none focus:ring"
            rows={3}
          />
        </div>

        <div className="flex justify-end mt-3">
          <button
            onClick={handleTweet}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Tweet
          </button>
        </div>
      </div>

      {/* Tweet List */}
      <div className="space-y-4">
        {tweets.map(tweet => (
          <div
            key={tweet.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <div className="flex gap-3">
              <img
                src={tweet.user.avatar}
                alt={tweet.user.name}
                className="w-10 h-10 rounded-full"
              />

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{tweet.user.name}</h3>
                  <span className="text-sm text-gray-500">
                    {tweet.user.username}
                  </span>
                  <span className="text-sm text-gray-400">
                    · {tweet.createdAt}
                  </span>
                </div>

                <p className="mt-1 text-gray-800">
                  {tweet.content}
                </p>

                <button
                  onClick={() => handleLike(tweet.id)}
                  className="flex items-center gap-1 mt-2 text-sm text-red-500 hover:scale-110 transition"
                >
                  ❤️ {tweet.likes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
