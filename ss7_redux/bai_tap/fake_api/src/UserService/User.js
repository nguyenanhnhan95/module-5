import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/users';
export async function getListUser(){
    const res = await axios.get("/users")
    return res.data
}