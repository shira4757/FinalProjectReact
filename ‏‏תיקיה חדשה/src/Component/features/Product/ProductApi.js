import axios from "axios";

const baseUrl="/api/product"

export const getProductsApi=async()=>{
    const getResponse=await axios.get(baseUrl)
    return getResponse.data
}

export const getProductByIdApi=async(id)=>{
    const getResponse=await axios.get(`${baseUrl}/${id}`)
    return getResponse.data
}

export const postProductApi=async(newrProduct)=>{
    const getResponse=await axios.post(baseUrl,newrProduct)
    debugger
    return getResponse.data
}

export const putProductApi=async(id,newrProduct)=>{
    debugger

    const getResponse=await axios.put(`${baseUrl}/${id}`,newrProduct)
    return getResponse.data
    
}

export const deleteProductApi=async(id)=>{
    const getResponse=await axios.delete(`${baseUrl}/${id}`)
    return getResponse.data
}