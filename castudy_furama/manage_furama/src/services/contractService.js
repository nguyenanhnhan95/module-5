import axios from "axios"
axios.defaults.baseURL="http://localhost:8080";
export const getContractDb =async()=>{
    const response =await axios.get("/contracts")
    return response.data.content;
}
export const addNewContract=async(contract)=>{
    console.log(contract)
    const response=await axios.post("/contracts",contract)
    return response.data;
}