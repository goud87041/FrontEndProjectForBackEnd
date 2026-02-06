import api from "./api"


export const getUserPlayLists = ()=>{
    api.get(`/playList/user/${userId}`,{
        withCredentials : true
    })
}

export const createPlayList = () =>{
    api.get("/playList")
}

export const addVideoToPlaylist = ()=>{
    api.patch(`/playList/add/${videoId}/${playListId} `,{
        withCredentials : true})
}

export const removeVideoFromPlayList = ()=>{
    api.patch(`/playList/remove/${videoId}/${playListId}`,{
        withCredentials : true
    })
}

export const getPlayListById = ()=>{
    api.get(`/playList/${playListId}`)
}

export const updatePlayList = ()=>{
    api.post(`/playList/${playListId}`)
}

export const deletePlayList = ()=>{
    api.delete(`/playList/${playListId}`)
}

