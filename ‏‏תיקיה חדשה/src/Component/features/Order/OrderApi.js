import axios from "axios";

const baseUrl = "http://localhost:4000/order"

export const getOrdersApi=async()=>{
    const getResponse= await axios.get(baseUrl)
    debugger
    return getResponse.data
}

export const getOderByIdApi=async(id)=>{
    const getResponse=await axios.get(`${baseUrl}/${id}`)
    return getResponse.data
}

export const addNewOrderApi=async(newOrder)=>{
    const getResponse=await axios.post(baseUrl,newOrder)
    debugger
    return getResponse.data
}
