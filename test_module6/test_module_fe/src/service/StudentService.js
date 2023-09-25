import axios from "axios";
export const requestServerStudent=async(page,search)=>{
    const response = await axios.get(`http://localhost:8080/students/${page}/${search}`)
    return response.data;
}