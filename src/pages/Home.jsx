import { useEffect, useState } from "react"
import { getVideos } from "../services/homeVideos"

export default function Home() {
  const [videos, setVideos] = useState([])
  const [page , setPage ] = useState(1)

  useEffect(() => {
    fetchVideo()
  }, [page])

  const fetchVideo = async () => {
    try {
      const res = await getVideos(page)
      console.log(res.data.data);

      const videoInArray = res.data.data
      
      const allVideos = videoInArray.map(item => item)
      setVideos(prev => [...prev, ...allVideos])
    } catch (error) {
      console.error("Error fetching videos:", error)
    }
  }

  const handleScroll = () => {
    if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50){
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7 bg-gray-200 p-4">
      {videos.map(video => (
        <div key={Date.now()} className="bg-white cursor-pointer rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={video.thumbnail}
              alt="video thumbnail"
              className="w-full h-52 object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
              21:40
            </span>
          </div>
          <div className="flex gap-3 mt-3 p-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="channel"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold leading-snug line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">Trading Unfolded</p>
              <p className="text-gray-500 text-sm">92 views • 17 hours ago</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
