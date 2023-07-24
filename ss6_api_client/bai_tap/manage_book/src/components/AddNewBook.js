import { ErrorMessage,Field,Form,Formik } from "formik";
import * as yup from "yup";
import { addNewBook, getListBooks } from "../service/BookService";
import { useNavigate } from "react-router-dom";
function AddNewBook(){
    const navigate=useNavigate();
    return(
        <>
        <h1>Add New Books</h1>
        <Formik
        initialValues={{title:"",quantity:0}}
        validationSchema={yup.object({
            title:yup.string().required("Yêu cầu nhập"),
            quantity:yup.number().required("Yêu cầu nhập :")
        })}
        onSubmit={(values)=>{
            console.log(values)
            addNewBook(values).then(()=>{
              navigate("/")
            })
            .catch(()=>{
                navigate("/")
            })
        }}
        ><Form>
            <div>
                <label htmlFor="title"></label>
                <Field id="title" type="text" name="title"/>
                <ErrorMessage name="title" component="div"/>
            </div>
            <div>
                <label htmlFor="quantity"></label>
                <Field id="quantity" type="number" name="quantity"/>
                <ErrorMessage name="quantity" component="div"/>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </Form>

        </Formik>
        </>
    )
}
export default AddNewBook;