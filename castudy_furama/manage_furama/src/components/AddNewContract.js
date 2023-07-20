import React from "react";
function AddNewContract(){
    return(
        <div className="wrapper">
        <div className="form-left" style={{backgroundImage: 'url("https://cdn3.ivivu.com/2016/10/ninh-van-bay-ivivu-1.png")'}}>
        </div>
        <form className="form-right">
          <h2 className="text-uppercase">Add New Contract</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Name Customer</label>
              <input type="text" name="name_customer" id="name_customer" className="input-field" />
            </div>
            <div className="col-sm-6 mb-3">
              <label>Service Name</label>
              <input type="text" name="name_service" id="name_service" className="input-field" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Start Rental</label>
              <input type="date" name="start_rental" id="start_rental" className="input-field" />
            </div>
            <div className="col-sm-6 mb-3">
              <label>End Rental</label>
              <input type="date" name="birth" id="birth" className="input-field" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Deposit</label>
              <input type="number" name="deposit" id="deposit" className="input-field" />
            </div>
            <div className="col-sm-6 mb-3">
              <label>Total Price</label>
              <input type="number" name="total_price" id="total_price" className="input-field" />
            </div>
          </div>
          <div className="form-field" style={{textAlign: 'center'}}>
            <input type="submit" defaultValue="Comfirm" className="register" name="Add New Service" />
          </div>
        </form>
      </div>
    );
}
export default AddNewContract;