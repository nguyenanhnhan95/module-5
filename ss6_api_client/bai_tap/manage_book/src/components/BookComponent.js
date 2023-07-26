import { useEffect, useState } from "react";
import { deleteBook, getListBooks } from "../service/BookService";
import { Link } from "react-router-dom";

function BookComponent(){
    const [books,setBooks]= useState([])
    useEffect(()=>{
        getBooks()
    },[])
    const getBooks=async()=>{
        const data = await getListBooks();
        setBooks(data)
    }
    const handleDelete=(id)=>{
        deleteBook(id).then(()=>{
            getListBooks().then((data)=>{
                setBooks(data)
                alert("Xóa thành công :")
            })
        }).catch(()=>{
            console.log("loi")
        })
    }
    return(
        <>
        <h2>Library</h2>
        <Link to={`/add`}>
        <button type="submit">Add a new Book</button></Link>
        <table>
            <thead>
                <th>Title</th>
                <th>Quantity</th>
                <th >Delete</th>
                <th>Edit</th>
            </thead>
            <tbody>
                {books.map((book)=>(
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button type="button" onClick={()=>handleDelete(book.id)}>Delete</button>
                        </td>
                        <td>
                        <Link to={`/edit/${book.id}`}>
                            <button type="submit">Edit Book</button></Link>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
        </>
    )
}
export default BookComponent;
