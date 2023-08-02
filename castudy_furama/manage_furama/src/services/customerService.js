import axios, { Axios } from "axios";

axios.defaults.baseURL="http://localhost:8080";
export const getCustomers= async()=>{
    const response =await axios.get("/customers");
    console.log(response.data.content)
    return response.data.content;
}
export const deleteCustomers= async(id)=>{
    const response =await axios.delete("/customers/"+id);
    return response.data.content;
}
export const getTypeCustomers=async()=>{
    const response= await axios.get("/type-customers")
    return response.data
}
export const addCustomerDB=async(customer)=>{
    console.log(customer)
    const response =await axios.post("/customers",customer)
    return response.data
}
export const editCustomerDB=async(customer)=>{
    console.log(customer)
    const response =await axios.patch("/customers",customer)
    return response.data
}
export const findCustomers= async(id)=>{
    const response =await axios.get("/customers/"+id);
    return response.data;
}
export const findAllCustomersPage=async(page)=>{
    const response = await axios.get(`/customers/pages/${page}/`+1)
    return response.data.content;
}

