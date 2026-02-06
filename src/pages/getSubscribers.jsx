import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getsubscriber } from "../services/getSubscribedChann"



export default function MySubscribers() {
//   const navigate = useNavigate()
  const [subscribers, setSubscribers] = useState([])

  const openProfile = (id) => {
    navigate(`/profile/${id}`)
  }


useEffect(()=>{
    const callForGetVal = async ()=>{
        const res = await getsubscriber()

        console.log(res.data.data);

        setSubscribers(res.data.data)
        
    }

    callForGetVal()
},[])

    if(subscribers.length === 0)return  (
        <p className="text-gray-500">You have no subscriber.</p>
      )


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Subscribers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscribers.map((user) => (
          <div
            key={user.channel.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={user.channel.avtar}
              alt={user.channel.username}
              className="h-48 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h2 className="font-semibold text-xl">
                {user.channel.username}
              </h2>

              {/* Open profile */}
              <button
                onClick={() => openProfile(user.channel.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
