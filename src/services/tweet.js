import api from "./api"

export const addTweet = (data)=>{
    return api.post("/tweets/",data)
}

export const allTweets = ()=>{
    return api.get("/tweets/userTweets")
}

export const deleteTweet = (tweetId)=>{
    return api.delete(`/tweets/${tweetId}`)
}

export const updateTweet = (tweetId, data) => {
  return api.patch(`/tweets/${tweetId}`, data)
}