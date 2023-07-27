import React from "react";
import { ErrorMessage,Formik,Form,Field } from "formik"
import *as yup from "yup";

function AddNewService(){
  const free=["Wifi","Coffee","Bar Mini"];
const otherService=["Garden","Gym","Entertainment","SaunaRoom"]
    return(
      <div className="wrapper">
      <div className="form-left" style={{backgroundImage: 'url("https://cdn3.ivivu.com/2016/10/ninh-van-bay-ivivu-1.png")'}}>
      </div>
      <Formik initialValues={{
                    name:"",
                    img:"",
                    area:0,
                    price:0,
                    capacity:0,
                    standard:0,
                    free:[],
                    otherService:[],
                    floor:0,
                    pool:0,
                    description:""
                  }}
                  validationSchema={yup.object({
                    name:yup.string().required("Please enter name"),
                    area:yup.number().required("Please enter area"),
                    price:yup.number().required("Please enter price"),
                    capacity:yup.number().required("Please enter capacity"),
                    standard:yup.number().required("Please enter standard"),
                  })}
                  >
      <form className="form-right">
        <h2 className="text-uppercase" style={{textAlign: 'center'}}>Add New Service</h2>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="name_service">Name Service</label>
            <Field type="text" name="name_service" id="name_service" className="input-field" />
            <ErrorMessage name="name_service" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="service_area">Service Areas</label>
            <Field type="number" name="service_area" id="service_area" className="input-field" />
            <ErrorMessage name="service_area" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="price_rental">Price Rental</label>
            <Field type="number" name="price_rental" id="price_rental" className="input-field" />
            <ErrorMessage name="price_rental" component="div"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <label htmlFor="maximum_quantity"> Quantity</label>
            <Field type="text" name="maximum_quantity" id="maximum_quantity" className="input-field" />
            <ErrorMessage name="maximum_quantity" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="standard">Standard</label>
            <Field type="number" name="standard" id="standard" className="input-field" />
            <ErrorMessage name="standard" component="div"/>
          </div>
          <div className="col-sm-3 mb-3">
            <label >Pool</label>
            <input type="number" name="pool" id="pool" className="input-field" />
          </div>
          <div className="col-sm-3 mb-3">
            <label>Floor</label>
            <input type="number" name="floor" id="floor" className="input-field" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>Free</label>
          </div>
          <div className="col-sm-6 mb-3">
            <label>Open Image File</label>
          </div>
        </div>
        <div className="row">
          {free.map((f)=>(
            <div className="col-sm-2 mb-3" key={f}>
            <label><span style={{marginRight: '5%'}}></span> <Field type="checkbox" name="free"  value={f}/>{f}</label>
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
            <input type="file" />
          </div>
        </div>
        <div className="row">
          <label>Other Service</label>
        </div>
        <div className="row">
          {otherService.map((o)=>(
            <div className="col-sm-3 mb-3">
            <label><span style={{marginRight: '10%'}}>{o}</span> <input type="checkbox" name="otherService" value={o} /></label>
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
          <label>Description Service</label>
        </div>
        <div className="row mb-3">
          <textarea className="input-field mx-3 " id="description" name="description" defaultValue={""} />
        </div>
        <div className="form-field" style={{textAlign: 'center'}}>
          <input type="submit" defaultValue="Register" className="register" name="Add New Service" />
        </div>
      </form>
      </Formik>
    </div>
    );
}
export default AddNewService;