import api from "./api";

export const getLikeVideo = ()=>{
    return api.get("/like/allLikevideos")
}

export const getAllVideos = ()=>{
    return api.get(`/videos/allVideos`)
}

export const deleteVideo = (videoId)=>{
return api.delete(`/videos/${videoId}`)
}

export const uploadVideo = (data, onUploadProgress) => {
  return api.post("/videos", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    onUploadProgress
  });
};

export const updateVideo = (videoId , data)=>{
    return api.patch(`/videos/${videoId}`,data,{
        headers : {
            "Content-Type" : "multipart/form-data"
        }
    })
}



