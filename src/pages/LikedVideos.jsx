import React, { useEffect, useState } from "react"
import { getLikeVideo } from "../services/video"



export default function getlikevideos() {

  
  const [getlikevideos , setGetLikeVideos] = useState([])
  const [loading , setLoading ] =  useState(false)

  useEffect(()=>{
    const callFun = async ()=>{
    
    const res = await getLikeVideo()
    console.log(res.data.data);
    
    setGetLikeVideos(res.data.data)
    setLoading(true)  
  }

  console.log(callFun());
  

    callFun();
},[])

 if(!loading) return <p>loading...</p>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Liked Videos</h1>

      {getlikevideos.length === 0 ? (
        <p className="text-gray-500">No liked videos yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getlikevideos.map(video => (
            <div
              key={video.video.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={video.video.thumbnail}
                alt={video.video.title}
                className="rounded-t-xl h-48 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg line-clamp-2">
                  {video.video.title}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  {video.video.channel}
                </p>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">
                    {video.video.views}
                  </span>

                  <button className="text-red-500 hover:scale-110 transition">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
