import React from "react";
function AddNewService(){
    return(
      <div className="wrapper">
      <div className="form-left" style={{backgroundImage: 'url("https://cdn3.ivivu.com/2016/10/ninh-van-bay-ivivu-1.png")'}}>
      </div>
      <form className="form-right">
        <h2 className="text-uppercase" style={{textAlign: 'center'}}>Add New Service</h2>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>Name Service</label>
            <input type="text" name="first_name" id="first_name" className="input-field" />
          </div>
          <div className="col-sm-3 mb-3">
            <label>Service Areas</label>
            <input type="number" name="last_name" id="last_name" className="input-field" />
          </div>
          <div className="col-sm-3 mb-3">
            <label>Price Rental</label>
            <input type="number" name="price_rental" id="price_rental" className="input-field" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <label> Quantity</label>
            <input type="text" name="maximum_quantity" id="maximum_quantity" className="input-field" />
          </div>
          <div className="col-sm-3 mb-3">
            <label>Standard</label>
            <input type="number" name="standard" id="standard" className="input-field" />
          </div>
          <div className="col-sm-3 mb-3">
            <label>Pool</label>
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
          <div className="col-sm-2 mb-3">
            <label><span style={{marginRight: '5%'}}>Wifi</span> <input type="checkbox" name="free[]" defaultValue="wifi" /></label>
          </div>
          <div className="col-sm-2 mb-3">
            <label><span style={{marginRight: '5%'}}>Coffee</span> <input type="checkbox" name="free[]" defaultValue="coffee" /></label>
          </div>
          <div className="col-sm-2 mb-3">
            <label><span style={{marginRight: '5%'}}>Bar mini</span> <input type="checkbox" name="free[]" defaultValue="bar mini" /></label>
          </div>
          <div className="col-sm-6 mb-3">
            <input type="file" />
          </div>
        </div>
        <div className="row">
          <label>Other Service</label>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
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
          </div>
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
    </div>
    );
}
export default AddNewService;