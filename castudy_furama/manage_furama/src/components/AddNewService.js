import React from "react";
function AddNewService(){
    return(
        <div className="wrapper">
        <div className="form-left" style={{backgroundImage: 'url("https://cdn3.ivivu.com/2016/10/ninh-van-bay-ivivu-1.png")'}}>
        </div>
        <form className="form-right">
          <h2 className="text-uppercase">Add New Service</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Name Service</label>
              <input type="text" name="first_name" id="first_name" className="input-field" />
            </div>
            <div className="col-sm-6 mb-3">
              <label>Service Areas</label>
              <input type="number" name="last_name" id="last_name" className="input-field" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Maximum Quantity</label>
              <input type="text" name="maximum_quantity" id="maximum_quantity" className="input-field" />
            </div>
            <div className="col-sm-6 mb-3">
              <label>Room Standard</label>
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
              <label>
                Accompanied Service</label>
              <input type="text" name="accompanied_service" id="accompanied_service" className="input-field" />
            </div>
            <div className="col-sm-6 mb-3">
              <label>Other facilities</label>
              <select>
                <option>Massage</option>
                <option>Karaoke</option>
                <option>Drink</option>
                <option>Tour</option>
                <option>Food</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label>Free Services</label>
            <select>
              <option>Wifi</option>
              <option>Coffe</option>
            </select>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <label>Open Image File</label>
            </div>
            <div className="col-8">
              <input type="file" />
            </div>
          </div>
          <div className="form-field" style={{textAlign: 'center'}}>
            <input type="submit" defaultValue="Register" className="register" name="Add New Service" />
          </div>
        </form>
      </div>
    );
}
export default AddNewService;