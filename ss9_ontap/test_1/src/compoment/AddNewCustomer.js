import { ErrorMessage, Field, Formik, Form } from "formik"
import { useEffect, useState } from "react"
import *as yup from "yup"
import { getTypeCustomers } from "../service/TypeCustomerService";
import { saveCustomer } from "../service/CustomerService";
import {  useNavigate, useNavigation } from "react-router-dom";


const genders = [{ label: "female", value: "female" }, { label: "male", value: "male" }, { label: "Another", value: "" }];
function AddNewCustomer() {
    const [customer, setCustomer] = useState(null)
    const [typeCustomers, setTypeCustomers] = useState([])
    const navigation=useNavigate()
    useEffect(() => {
        getTypeCustomers().then((data) => {
            
            setTypeCustomers(data)
        }).catch(() => { })
    }, [])

    const addCustomer = (customer) => {
        const newCustomer={...customer,typeCustomer:JSON.parse(customer.typeCustomer)}
        saveCustomer(newCustomer).then(()=>{
            alert("thanh cong")
            navigation("/")
        }).catch(()=>{
            alert("that bai")
        })
    }
    if (typeCustomers.length === 0) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    birth: "",
                    gender: "",
                    address: "",
                    typeCustomer: "",
                }}
                validationSchema={yup.object({
                    name: yup.string().required("Please enter name"),
                    birth: yup.string().required("Please enter your birth"),
                    gender: yup.mixed().oneOf(["", "female", "male"], "please option gender"),
                    address: yup.string().required("Please enter address :"),
                    typeCustomer: yup.string().required("please select type")
                })}
                onSubmit={(value) => {
                    addCustomer(value)
                }}
            >


                <Form>
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component="div" />
                    <label htmlFor="birth">Birth Of Date</label>
                    <Field type="date" name="birth" id="birth" />
                    <ErrorMessage name="birth" component="div" />
                    <label htmlFor="address">Address</label>
                    <Field type="text" name="address" id="address" />
                    <ErrorMessage name="address" component="div" />

                    {genders && genders.map((gender) => (
                        <label key={gender.label}>{gender.label}
                            <Field type="radio" id="gender" name="gender" value={gender.value} />
                            <ErrorMessage name="gender" component="div" />
                        </label>
                    ))}
                    <label >Type customer</label>
                    <Field as="select" name="typeCustomer" >
                        <option value={""}>choose</option>
                        {typeCustomers.map((type) => {
                            return (
                                <option key={type.idType} value={JSON.stringify(type)}>{type.nameType}</option>
                            )
                        })}
                    </Field>
                    <ErrorMessage name="typeCustomer" component="div" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default AddNewCustomer;