import axios from "axios";
export const findMusics=async(page)=>{
    const response = await axios.get(`http://localhost:8080/musics/pages/${page}/3`)
    
    return response.data
}
export const findStatus=async()=>{
    const response = await axios.get(`http://localhost:8080/status`)
    return response.data
}
export const saveMusic=async(music)=>{
    const response = await axios.post("http://localhost:8080/musics/",music)
    return response.data
}
export const searchMusic=async(name)=>{
    const response = await axios.get(`http://localhost:8080/musics?nameMusic_like=${name}`)
    return response.data;
}
export const findByIdMusic=async(id)=>{
    const response = await axios.get("http://localhost:8080/musics/"+id)
    return response.data;
}
export const updateMusic=async(id,music)=>{
    const response = await axios.patch("http://localhost:8080/musics/"+id,music)
    return response.data
}
