import api from "./api";

export const getLikeVideo = ()=>{
    return api.get("/like/allLikevideos")
}

