import api from "./api";

export const getVideos = ()=>{
    return api.get("/videos")
}