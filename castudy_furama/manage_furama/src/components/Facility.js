import React, { useEffect, useState } from "react";
// import { ServicesList } from "../data.js/service";
import { Link } from "react-router-dom";
import { deleteServices, getServices } from "../services/serviceService";
import DeleteModal from "./ModalDelete";
function Facility(){
  const [services,setService]=useState([]);
  useEffect(()=>{
    showServices()
  },[]);
  const showServices=async()=>{
    const data = await getServices();
      setService(data);

  }
  const deleteService=async(id)=>{
    deleteServices(id).then(()=>{
      getServices().then((data)=>{
        setService(data)
      })
    })
      
  }
   
   
  
    return(
                <div>
                  <div className="breadcrumb-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="breadcrumb-text">
                            <h2>Our Rooms</h2>
                            <div className="bt-option">
                              <a href="./home.html">Home</a>
                              <span>Rooms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Breadcrumb Section End */}
                  {/* Rooms Section Begin */}
                  <section className="rooms-section spad">
                    <div className="container">
                      <div className="row">
                        {services.map((service)=>(
                        <div key={service.id} className="col-lg-4 col-md-6">
                          <div className="room-item">
                            <img src={service.img} alt="" />
                            <div className="ri-text">
                              <h4>{service.name}</h4>
                              <h3>{service.price}$<span>/Pernight</span></h3>
                              <table>
                                <tbody>
                                  <tr>
                                    <td className="r-o">Size:</td>
                                    <td>{service.area} ft</td>
                                  </tr>
                                  <tr>
                                    <td className="r-o">Capacity:</td>
                                    <td>{service.capacity}</td>
                                  </tr>
                              
                                </tbody>
                              </table>
                              <div className="row">
                                <Link to={`/detail/${service.id}`} className="primary-btn mx-2">More Details</Link>
                                <a href="/#" className="primary-btn mx-2">Edit</a>
                                <DeleteModal service ={service} delete={()=>deleteService(service.id)}  icon={{name:"primary-btn mx-2",show:"Delete"}}/>
                              </div>
                            </div>
                          </div>
                        </div>
                        ))}
                        <div className="col-lg-12">
                          <div className="room-pagination">
                            <a href="/#">1</a>
                            <a href="/#">2</a>
                            <a href="/#">Next <i className="fa fa-long-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

    )
}
export default Facility;