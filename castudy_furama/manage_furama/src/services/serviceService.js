import axios from "axios";

axios.defaults.baseURL="http://localhost:8080/";
export const getServices= async()=>{
    const response =await axios.get("/services");
    return response.data;
}
export const deleteServices= async(id)=>{
    const response =await axios.delete("/services/"+id);
    return response.data;
}