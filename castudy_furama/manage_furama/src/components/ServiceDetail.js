import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServicesList } from "../data.js/service";
function ServiceDetail(){
  const params=useParams();
  const [service,setService]=useState();
  useEffect(()=>{

    const sr=ServicesList.filter((s)=>s.id===+params.id)[0];
    setService(sr);

  },[params.id]);
  if(!service){
    return null;
  }
    return(
        <section className="room-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="room-details-item">
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
                        { service.free.map((s) => (
                          <span>{s}</span>
                        ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="f-para">{service.decription}</p>
                
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="room-booking">
                <h3>Your Reservation</h3>
                <form action="#">
                  <div className="check-date">
                    <label htmlFor="date-in">Check In:</label>
                    <input type="text" className="date-input" id="date-in" />
                    <i className="icon_calendar" />
                  </div>
                  <div className="check-date">
                    <label htmlFor="date-out">Check Out:</label>
                    <input type="text" className="date-input" id="date-out" />
                    <i className="icon_calendar" />
                  </div>
                  <div className="select-option">
                    <label htmlFor="guest">Guests:</label>
                    <select id="guest">
                      <option value>3 Adults</option>
                    </select>
                  </div>
                  <div className="select-option">
                    <label htmlFor="room">Room:</label>
                    <select id="room">
                      <option value>1 Room</option>
                    </select>
                  </div>
                  <button type="submit">Check Availability</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ServiceDetail;