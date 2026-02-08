import api from "./api"

// Get all playlists of logged-in user
export const getUserPlayLists = () => {
  return api.get("/playList/UserPlayLists")
}

// Create playlist
export const createPlayList = (data) => {
  return api.post("/playList", data)
}

// Add video to playlist
export const addVideoToPlaylist = (videoId, playListId) => {
  return api.patch(`/playList/add/${videoId}/${playListId}`)
}

// Remove video from playlist
export const removeVideoFromPlayList = (videoId, playListId) => {
  return api.patch(`/playList/remove/${videoId}/${playListId}`)
}

// Get playlist by id
export const getPlayListById = (playListId) => {
  return api.get(`/playList/${playListId}`)
}

// Update playlist
export const updatePlayList = (playListId, data) => {
  return api.put(`/playList/${playListId}`, data)
}

// Delete playlist
export const deletePlayList = (playListId) => {
  return api.delete(`/playList/${playListId}`)
}
