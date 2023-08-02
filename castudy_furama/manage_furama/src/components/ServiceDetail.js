import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findService } from "../services/serviceService";
import { ErrorMessage, Field,Form, Formik } from "formik";
import { findCustomers, getCustomers } from "../services/customerService";
import *as yup from "yup";
import { addNewContract } from "../services/contractService";
import Swal from 'sweetalert2';
// import { ServicesList } from "../data.js/service";

function ServiceDetail(){
  const navigation = useNavigate()
  const params=useParams();
  const [service,setService]=useState([]);
  const [customers,setCustomers]=useState([])
  const [customer,setCustomer]=useState(null)
  const [idCards,setIdCard] =useState([])
  useEffect(()=>{
    const idCustomer=[];
    getCustomers().then((data)=>{
      setCustomers(data)
      data.forEach(element => {
        idCustomer.push(element.idCard)
      });
      setIdCard(idCustomer)
    })
    findService(params.id).then((data)=>{
      setService(data);
    })

  },[params.id]);
  if(!service){
    return null;
  }
  const findCustomerIdCar=(id)=>{
    return customers.filter(c=>c.idCard===id)[0];
  }
  const clickNewContract=(values)=>{
    console.log(findCustomerIdCar(values.idCard))
    console.log(service)
   addNewContract({
    startDate:values.dateStart,
    endEnd:values.dateEnd,
    deposit:values.deposit,
    totalPrice:service.price,
    facility:service,
    customer:findCustomerIdCar(values.idCard),
   }).then(()=>{
    navigation("/")
    Swal.fire({
      icon: 'success',
      title: 'booking success fully!!!!',
      showConfirmButton: false,
      timer: 1500
    })
   }).catch(()=>{
    alert("Loi")
    navigation("/detail/"+params.id)
   })
  }
    return(
        <section className="room-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="room-details-item ">
              <img src={service.img} alt="" />
                <div className="rd-text">
                  <div className="rd-title">
                    <h3>{service.name}</h3>
                    <div className="rdt-right">
                      <div className="rating">
                        <i className="icon_star" />
                        <i className="icon_star" />
                        <i className="icon_star" />
                        <i className="icon_star" />
                        <i className="icon_star-half_alt" />
                      </div>
                      <a href="/#">Booking Now</a>
                    </div>
                  </div>
                  <h2>{service.price}$<span>/Pernight</span></h2>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>{service.area} ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>{service.capacity} </td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>
                        {service.freeFacility}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="f-para">{service.descriptions}</p>
                
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="room-booking">
                <h3>Your Reservation</h3>
                <Formik
                initialValues={{
                  dateStart:"",
                  dateEnd:"",
                  idCard:"",
                  deposit:null
                }}
                validationSchema={(yup.object({
                  dateStart:yup.string().required("Please enter date start"),
                  dateEnd:yup.string().required("Please enter date end"),
                  idCard:yup.mixed().oneOf(idCards,"Id don't existing").required("Please enter ID"),
                  deposit:yup.number().required("Please enter deposit :")
                }))}
                onSubmit={(values)=>{
                  clickNewContract(values)
                }}>
                <Form action="#">
                  <div className="check-date">
                    <label htmlFor="dateStart">Check In:</label>
                    <Field type="text" name="dateStart" className="date-input" id="dateStart" />
                    <i className="icon_calendar" />
                    <ErrorMessage name="dateStart" component="div"/>
                  </div>
                  <div className="check-date">
                    <label htmlFor="dateEnd">Check Out:</label>
                    <Field type="text" name="dateEnd" className="date-input" id="dateEnd" />
                    <i className="icon_calendar" />
                    <ErrorMessage name="dateEnd" component="div"/>
                  </div>
                  <div className="check-date">
                    <label htmlFor="idCard">ID Customer</label>
                    <Field type="text" name="idCard" className="date-input" id="idCard" />
                    <ErrorMessage name="idCard" component="div"/>
                    </div>
                  <div className="check-date">
                    <label htmlFor="deposit">Deposit:</label>
                    <Field type="number" name="deposit" className="date-input" id="deposit" />
                    <ErrorMessage name="deposit" component="deposit"/>
                  </div>
                  <button type="submit">Check Availability</button>
                </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ServiceDetail;