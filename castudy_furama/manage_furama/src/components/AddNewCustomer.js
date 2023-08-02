import React, { useEffect, useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik"
import *as yup from "yup";
import { addCustomerDB, getTypeCustomers } from "../services/customerService";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Set_List = [{ label: "male", value: "male" }, { label: "female", value: "female" }, { label: "Another", value: "" }]
function AddNewCustomer() {
  const [typeCustomers, setTypeCustomer] = useState([])
  const navigation = useNavigate()
  useEffect(() => {
    getTypes()
  }, [])
  const getTypes = async () => {
    await getTypeCustomers().then((data) => setTypeCustomer(data))
    console.log(typeCustomers)
  }
  const AddNewCustomer=async(customer)=>{
    const newCustomer={...customer,typeCustomer:JSON.parse(customer.typeCustomer)}
   await addCustomerDB(newCustomer).then(()=>{
      navigation("/services")
      Swal.fire({
        icon: 'success',
        title: 'Delete success fully!!!!',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(()=>{
      alert("loi")
    })
  }
  if (typeCustomers.length === 0) {
    return null;
  }
  return (
    <>
      <div className="wrapper">
        <div className="form-left" style={{ backgroundImage: 'url("https://cdn3.ivivu.com/2016/10/ninh-van-bay-ivivu-1.png")' }}>
        </div>
        <Formik
          initialValues={{
            nameCustomer: "",
            dateOfBirth: null,
            gender: "",
            idCard: "",
            phoneNumber: "",
            emailCustomer: "",
            addressCustomer: "",
            byeDelete: false,
            typeCustomer: null,
          }}
          validationSchema={yup.object({
            nameCustomer: yup.string().required("Please enter name "),
            dateOfBirth: yup.date().required("Please enter birth "),
            gender: yup.mixed().oneOf(["", "female", "male"], "please select gender").nullable(),
            idCard: yup.string().required("Please enter ID "),
            phoneNumber: yup.string().required("Please enter phone "),
            emailCustomer: yup.string().required("Please enter email "),
            typeCustomer: yup.string().required("Please select type customer "),
            addressCustomer: yup.string().required("Please enter address "),
          })}
          onSubmit={(value) => {
            AddNewCustomer(value);
          }}
        >
          <Form className="form-right">
            <h2 className="text-uppercase" style={{ textAlign: 'center' }}>Add New Customer</h2>
            <div className="row">
              <div className="col-sm-6 mb-3">
                <label htmlFor="nameCustomer">Name</label>
                <Field type="text" name="nameCustomer" id="nameCustomer" className="input-field" />
                <ErrorMessage name="nameCustomer" component="div" />
              </div>
              <div className="col-sm-6 mb-3">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <Field type="date" name="dateOfBirth" id="dateOfBirth" className="input-field" />
                <ErrorMessage name="dateOfBirth" component="div" />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field type="text" name="phoneNumber" id="phoneNumber" className="input-field" />
                <ErrorMessage name="phoneNumber" component="div" />
              </div>
              <div className="col-sm-6 mb-3">
                <label htmlFor="addressCustomer">Address</label>
                <Field type="text" id="addressCustomer" name="addressCustomer" className="input-field" />
                <ErrorMessage name="addressCustomer" component="div" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="idCard">ID</label>
              <Field type="text" id="idCard" name="idCard" className="input-field" />
              <ErrorMessage name="idCard" component="div" />
            </div>
            <div className="row">
              <div className="col-sm-6 mb-3">
                <label htmlFor="emailCustomer">Email</label>
                <Field type="text" id="emailCustomer" name="emailCustomer" className="input-field" />
                <ErrorMessage name="emailCustomer" component="div" />
              </div>
              <div className="col-sm-6 mb-3">
                <label >Type customer</label>
                <Field as="select" name="typeCustomer" >
                  {typeCustomers.map((type) => {
                    return (
                      <option key={type.idTypeCustomer} value={JSON.stringify({idTypeCustomer:type.idTypeCustomer,nameTypeCustomer:type.nameTypeCustomer})}>{type.nameTypeCustomer}</option>
                    )
                  })}
                </Field>
                <ErrorMessage name="typeCustomer" component="div" />
              </div>
            </div>
            <div className="row">
              <label >Gender</label>
              <div className="row">
                {Set_List.map((gender) => (
                  <div key={gender} className="col-sm-4 mb-3">
                    <label htmlFor="gender" key={gender.value}>{gender.label}
                      <Field type="radio" id="gender" name="gender" value={gender.value} />
                      <ErrorMessage name="gender" component="div"></ErrorMessage>
                    </label>
                  </div>
                ))}
              </div>

            </div>
            <div className="form-field" style={{ textAlign: 'center' }}>
              <button type="submit" defaultValue="Register" className="register" >Customer</button>
            </div>
          </Form>
        </Formik>
      </div >
    </>
  );

}
export default AddNewCustomer;