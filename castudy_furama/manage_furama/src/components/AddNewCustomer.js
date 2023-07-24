import React from "react";
function AddNewCustomer(){
    return(
          
                <div className="wrapper">
                  <div className="form-left" style={{backgroundImage: 'url("https://cdn3.ivivu.com/2016/10/ninh-van-bay-ivivu-1.png")'}}>
                  </div>
                  <form className="form-right">
                    <h2 className="text-uppercase" style={{textAlign: 'center'}}>Add New Customer</h2>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label>Name</label>
                        <input type="text" name="first_name" id="first_name" className="input-field" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label>Last Name</label>
                        <input type="number" name="last_name" id="last_name" className="input-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label>ID</label>
                        <input type="text" name="id_customer" id="id_customer" className="input-field" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label>Birth</label>
                        <input type="date" name="birth" id="birth" className="input-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label>Phone Number</label>
                        <input type="text" name="phone_number" id="phone_number" className="input-field" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label>Type Customer</label>
                        <select>
                          <option>One</option>
                          <option>Two</option>
                          <option>Three</option>
                          <option>Four</option>
                          <option>Five</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label>Email</label>
                        <input type="text" id="email" name="email" className="input-field" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label>Address</label>
                        <input type="text" id="address" name="address" className="input-field" />
                      </div>
                    </div>
                    <div className="form-field" style={{textAlign: 'center'}}>
                      <input type="submit" defaultValue="Register" className="register" name="Add New Service" />
                    </div>
                  </form>
                </div>
              );

}
export default AddNewCustomer;