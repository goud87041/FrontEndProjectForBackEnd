import api from "./api";


export const getUserProfile = (channelId) => {
  return api.get(`/channel/${channelId}`, {
    withCredentials: true
  });
};
