import axios from "axios";

export const getCustomers=async(page)=>{
    const response=await axios.get(`http://localhost:8080/customers?_page=${page}&_limit=2`)
    return response.data;
}
export const saveCustomer=async(customer)=>{
    const response=await axios.post("http://localhost:8080/customers",customer)
    return response.data;
}
export const deleteCustomerApi=async(id)=>{
    const response =await axios.delete("http://localhost:8080/customers/"+id)
    return response.data;
}
export const findCustomerApi=async(name)=>{
    const response=await axios.get(`http://localhost:8080/customers?name_like=${name}`)
    return response.data;
}