import axios from "axios";

axios.defaults.baseURL="http://localhost:8080/";
export const getCustomers= async()=>{
    const response =await axios.get("/customers");
    return response.data;
}
export const deleteCustomers= async(id)=>{
    const response =await axios.delete("/customers/"+id);
    return response.data;
}