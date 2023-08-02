import axios from "axios";
export const getTypeCustomers=async()=>{
    const response=await axios.get("http://localhost:8080/typeCustomer")
    return response.data;
}