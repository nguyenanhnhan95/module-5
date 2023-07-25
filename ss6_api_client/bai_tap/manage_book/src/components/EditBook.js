import { ErrorMessage,Field,Form,Formik } from "formik";
import * as yup from "yup";
import { addNewBook, editBook, getListBooks } from "../service/BookService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
function EditBook(){
    const navigate=useNavigate();
    const [book,setBook]= useState(null);
    const params=useParams();
    useEffect(()=>{
        const getList=async ()=>{
            const data= await getListBooks();
            const bk=data.filter((s)=>s.id===+params.id)[0];
            setBook(bk)
        }
        getList()
    },[params.id])
    if(!book){
        return null;
    }
    return(
        <>
        <h1>Edit New Books</h1>
        <Formik
        initialValues={{title:book.title||"",quantity:book.quantity||0}}
        validationSchema={yup.object({
            title:yup.string().required("Yêu cầu nhập"),
            quantity:yup.number().required("Yêu cầu nhập :")
        })}
        onSubmit={(values)=>{
            editBook(book.id,values).then(()=>{
              navigate("/")
              alert("Chỉnh sửa thành công :")
            })
            .catch(()=>{
                navigate(`/edit/${book.id}`)
            })
        }}
        ><Form>
            <div>
                <label htmlFor="title"></label>
                <Field id="title"  type="text" placeholder={book.title}  name="title"/>
                <ErrorMessage name="title" component="div"/>
            </div>
            <div>
                <label htmlFor="quantity"></label>
                <Field id="quantity" placeholder={book.quantity}  type="number" name="quantity"/>
                <ErrorMessage name="quantity" component="div"/>
            </div>
            <div>
                <button type="submit" 
                >Edit</button>
            </div>
        </Form>

        </Formik>
        </>
    )
}
export default EditBook;