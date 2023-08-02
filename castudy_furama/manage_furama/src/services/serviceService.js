import axios from "axios";

axios.defaults.baseURL="http://localhost:8080/";
export const getServices= async()=>{
    const response =await axios.get("/facilities");
    console.log(response.data.content)
    console.log(response.data.content[0].freeFacility)
    return response.data.content;
}
export const deleteServices= async(id)=>{
    const response =await axios.delete("facilities/"+id);
    return response.data;
}
export const findService= async(id)=>{
    const response =await axios.get("facilities/"+id);
    console.log(response.data)
    return response.data;
}
export const addService= async(facility)=>{
    console.log(facility)
    const response =await axios.post("facilities",facility);

}
export const editServiceDb= async(id, facility)=>{
    console.log(facility)
    const response =await axios.patch("facilities/"+id,facility);

}