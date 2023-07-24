import { ErrorMessage,Field,Form,Formik } from "formik";
import * as yup from "yup";
import { List } from "./ListForm";
import { useNavigate } from "react-router-dom";
function CreateForm(){
    const navigate=useNavigate();
    return(
        <>
        <h1>Contact Form</h1>
        <Formik initialValues={{name:"",email:"",phone:"",message:""}}
        validationSchema={yup.object({
            name:yup.string().required("Yêu cầu nhập tên")
            .max(20,"Không nhập vượt quá 20 ký tự :"),
            email:yup.string().email("Bạn nhập địa chỉ email không hợp lý :")
            .required("Yêu cầu nhập email:"),
            phone:yup.string().required("Yêu cầu nhập số điện thoại:")
            .length(10, "Số điện thoại không hợp lệ"),
            message:yup.string().required("Yêu cầu nhập nội dung:")
            .max(50,"Không nhập vượt quá 50 ký tự :")
        })}
        onSubmit={(values)=>{
            List.push({
                ...values,id:List.length+1,
            });
            navigate("/");
        }}
        >
            <Form>
                <div>
                <label htmlFor="name">Name</label>
                <Field id="name" type="text" name="name"/>
                <ErrorMessage name="name" component="div"/>
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <Field id="email" type="text" name="email"/>
                <ErrorMessage name="email" component="div"/>
                </div>
                <div>
                <label htmlFor="phone">Phone</label>
                <Field id="phone" type="number" name="phone"/>
                <ErrorMessage  name="phone" component="div"/>
                </div>
                <div>
                <label htmlFor="message">message</label>
                <Field id="message" type="text" name="message"/>
                <ErrorMessage name="message" component="div"/>
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </Form>
        </Formik>
        </>
    );
}
export default CreateForm;