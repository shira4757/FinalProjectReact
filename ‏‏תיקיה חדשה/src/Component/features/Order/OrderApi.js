import axios from "axios";

const baseUrl = "/api/order"

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
