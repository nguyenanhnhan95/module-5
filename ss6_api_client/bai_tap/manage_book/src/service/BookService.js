import axios from "axios";
export async function getListBooks(){
    const res= await axios.get("http://localhost:8080/books")
    return res.data;
}
export async function deleteBook(id){
    const res=await axios.delete("http://localhost:8080/books/"+id)
    return res.data;
}
export async function addNewBook(book){
    const res=await axios.post("http://localhost:8080/books/",book)
    return res.data;
}
export async function editBook(id,book){
    const res=await axios.patch("http://localhost:8080/books/"+id,book)
    return res.data;
}