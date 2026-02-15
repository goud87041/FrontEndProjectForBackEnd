import api from "./api";

export const likeOnVideo = (videoId)=>{
    return api.post(`/like/toggel/v/${videoId}`)
}