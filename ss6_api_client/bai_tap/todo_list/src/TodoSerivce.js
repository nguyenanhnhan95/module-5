import axios from "axios";

export async function getListToDo(){
    const res = await axios.get("http://localhost:8080/TodoList");
    return res.data;
}
export async function addListToDo(list){
    const res = await axios.post("http://localhost:8080/TodoList",list);
}