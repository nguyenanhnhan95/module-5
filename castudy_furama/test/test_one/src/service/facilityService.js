import axios from "axios";

export const getFacilities=async()=>{
    const response = await axios.get("http://localhost:8080/facilities")
    console.log(JSON.stringify(response.data.content.id))
    return response.data.content;
}
export const getServiceFree=async()=>{
    const response = await axios.get("http://localhost:8080/freefacility")
    console.log(JSON.stringify(response.data))
    return response.data;
}