import api from "./api"
export const getSubscribedChannels = ()=>{
    return api.get("/subscribe/subscribed-channels")
}

export const getsubscriber = ()=>{
    return api.get(`/subscribe/subscribers`)
}
