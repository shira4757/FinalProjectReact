// import axios from "axios";

// const baseUrl = "http://localhost:4000/user"

// export const getUsersApi=async()=>{
//     const getResponse = await axios.get(baseUrl)
//     return getResponse.data
// } 

// export const getUserByIdApi=async(id)=>{
//     const getResponse= await axios.get(`${baseUrl}/${id}`)
//     return getResponse.data
// }

// export const postUserApi=async(newUser)=>{
//     const getResponse=await axios.post(baseUrl,newUser)
//     return getResponse.data
// }

// export const loginApi=async(user)=>{

//     const getResponse=await axios.post(`${baseUrl}/login`,user)
//     return getResponse.data
// }
import axios from "axios";

const baseUrl = "/api/user";

export const getUsersApi = async () => {
    const getResponse = await axios.get(baseUrl);
    return getResponse.data;
};

export const getUserByIdApi = async (id) => {
    const getResponse = await axios.get(`${baseUrl}/${id}`);
    return getResponse.data;
};

export const postUserApi = async (newUser) => {
    const getResponse = await axios.post(baseUrl, newUser);
    return getResponse.data;
};

export const loginApi = async (user) => {
    const getResponse = await axios.post(`${baseUrl}/login`, user);
    debugger
    return getResponse.data;  // Ensure this returns the user data
};
