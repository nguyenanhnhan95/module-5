import React from "react";
import { ErrorMessage,Formik,Form,Field } from "formik"
import *as yup from "yup";
import { addService } from "../services/serviceService";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function AddNewService(){
  const freeFacility=["Wifi","Coffee","Bar Mini"];
  const navigation =useNavigate()
const anotherFacility=["Garden","Gym","Entertainment","SaunaRoom"]
const addNewService=async(facility)=>{
  let a= facility.freeFacility.join(",");
  let b=facility.anotherFacility.join(",")
  const newFacility={...facility,freeFacility:a,anotherFacility:b}
  console.log(newFacility)
  await addService(newFacility).then(()=>{
    
    navigation("/")
    Swal.fire({
      icon: 'success',
      title: 'Add success fully!!!!',
      showConfirmButton: false,
      timer: 1500
    })

  }).catch(()=>(
    alert("loi")
  ))
  }
    return(
      <div className="wrapper">
      <div className="form-left" style={{backgroundImage: 'url("https://cdn3.ivivu.com/2016/10/ninh-van-bay-ivivu-1.png")'}}>
      </div>
      <Formik initialValues={{
                    name:"",
                    img:"",
                    freeFacility:[],
                    anotherFacility:[],
                    area:null,
                    price:null,
                    capacity:null,
                    standard:null,
                    floor:null,
                    pool:null,
                    descriptions:"",
                    flagDelete:false
                  }}
                  validationSchema={yup.object({
                    name:yup.string().required("Please enter name"),
                    img:yup.string().required("Please enter link img"),
                    area:yup.number().required("Please enter area"),
                    price:yup.number().required("Please enter price"),
                    capacity:yup.number().required("Please enter capacity"),
                    standard:yup.number().required("Please enter standard"),
                  })}
                  onSubmit={(values)=>{
                    addNewService(values)
                   }}
                  >
      <Form className="form-right">
        <h2 className="text-uppercase" style={{textAlign: 'center'}}>Add New Service</h2>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="name">Name Service</label>
            <Field type="text" name="name" id="name" className="input-field" />
            <ErrorMessage name="name" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="area">Service Areas</label>
            <Field type="number" name="area" id="service_area" className="input-field" />
            <ErrorMessage name="area" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="price">Price Rental</label>
            <Field type="number" name="price" id="price" className="input-field" />
            <ErrorMessage name="price" component="div"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <label htmlFor="capacity"> Quantity</label>
            <Field type="number" name="capacity" id="capacity" className="input-field" />
            <ErrorMessage name="capacity" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="standard">Standard</label>
            <Field type="number" name="standard" id="standard" className="input-field" />
            <ErrorMessage name="standard" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label >Pool</label>
            <Field type="number" name="pool" id="pool" className="input-field" />
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="floor">Floor</label>
            <Field type="number" name="floor" id="floor" className="input-field" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="free">Free</label>
          </div>
          <div className="col-sm-6 mb-3">
          <label htmlFor="img">Link Img</label>
          </div>
        </div>
        <div className="row">
          {freeFacility.map((f)=>(
            <div className="col-sm-2 mb-3" key={f}>
            <label><span style={{marginRight: '5%'}}></span> <Field type="checkbox" name="freeFacility"  value={f}/>{f}</label>
          </div>
          ))}
          {/* <div className="col-sm-2 mb-3">
            <label><span style={{marginRight: '5%'}}>Wifi</span> <input type="checkbox" name="free[]" defaultValue="wifi" /></label>
          </div>
          <div className="col-sm-2 mb-3">
            <label><span style={{marginRight: '5%'}}>Coffee</span> <input type="checkbox" name="free[]" defaultValue="coffee" /></label>
          </div>
          <div className="col-sm-2 mb-3">
            <label><span style={{marginRight: '5%'}}>Bar mini</span> <input type="checkbox" name="free[]" defaultValue="bar mini" /></label>
          </div> */}
          <div className="col-sm-6 mb-3">
         
            <Field type="text" name="img" id="img" className="input-field" />
            <ErrorMessage name="img" component="div"/>
          </div>
        </div>
        <div className="row">
          <label>Other Service</label>
        </div>
        <div className="row">
          {anotherFacility.map((o)=>(
            <div className="col-sm-3 mb-3">
            <label><span style={{marginRight: '10%'}}>{o}</span> <Field type="checkbox" name="anotherFacility" value={o} /></label>
          </div>
          ))}
          {/* <div className="col-sm-3 mb-3">
            <label><span style={{marginRight: '10%'}}>Garden</span> <input type="checkbox" name="otherService[]" defaultValue="garden" /></label>
          </div>
          <div className="col-sm-3 mb-3">
            <label><span style={{marginRight: '10%'}}>Gym</span> <input type="checkbox" name="otherService[]" defaultValue="gym" /></label>
          </div>
          <div className="col-sm-3 mb-3">
            <label><span style={{marginRight: '10%'}}>Entertainment</span> <input type="checkbox" name="otherService[]" defaultValue="entertainment" /></label>
          </div>
          <div className="col-sm-3 mb-3">
            <label><span style={{marginRight: '10%'}}>Sauna Room</span> <input type="checkbox" name="otherService[]" defaultValue="sauna room" /></label>
          </div> */}
        </div>
        <div className="row">
          <label htmlFor="description">Description Service</label>
        </div>
        <div className="row mb-3">
          <Field className="input-field mx-3 " id="descriptions" name="descriptions" defaultValue={""} as="textarea"/>
          <ErrorMessage name="descriptions"/>
        </div>
        <div className="form-field" style={{textAlign: 'center'}}>
          <button type="submit" defaultValue="Register" className="register" name="Add New Service"  >Add</button>
        </div>
      </Form>
      </Formik>
    </div>
    );
}
export default AddNewService;