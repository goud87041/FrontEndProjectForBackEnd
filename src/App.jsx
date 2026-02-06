
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

import Home from "./pages/Home"
import Videos from "./pages/Videos"
import Tweet from "./pages/Tweet"
import MyPlaylist from "./pages/MyPlaylist"
import LikedVideos from "./pages/LikedVideos"
import Profile from "./pages/Profile"
import SubscribedChannels from "./pages/SubscribedChannels"
import ChannelDetails from "./pages/ChannelDetails"
import Login from "./pages/login"
import Register from "./pages/register"
import MySubscribers from "./pages/getSubscribers"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/tweet" element={<Tweet />} />
              <Route path="/playlist" element={<MyPlaylist />} />
              <Route path="/liked" element={<LikedVideos />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/subscribed-channels" element={<SubscribedChannels />}/>
              <Route path="/channel/:channelId" element={<ChannelDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>}/>
              <Route path="/subscribers" element={<MySubscribers/>}/>

            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
