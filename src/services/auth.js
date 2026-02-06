import api from "./api";

export const loginUser = (data) => {
  return api.post("/users/login", data);
};

export const registerUser = (data)=>{
  return api.post("/users/register",data)
}


export const profileUser = (data)=>{
  return api.get("users/current-user",data)
};

