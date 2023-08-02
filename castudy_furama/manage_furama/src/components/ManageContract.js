import React, { useEffect, useState } from "react";
import { getContractDb } from "../services/contractService";
function ManageContract() {
  const [contracts, setContracts] = useState([])
  const getContracts=async()=>{
    getContractDb().then((data)=>setContracts(data)).catch(()=>{})
  }
  useEffect(()=>{
    getContracts()
  },[])
  if (!contracts) {
    return null;
  }
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row mb-3">
              <div className="col-md-8" />
              <div className="col-md-4" style={{ textAlign: 'right' }}>
                <button type="button" className="btn btn-success"><i className="material-icons"></i> <span>Add New Contract</span></button>
                {/*                  <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>                  */}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8"><h2>Contract<b>Management</b></h2></div>
              <div className="col-sm-4">
                <div className="search-box">
                  <i className="material-icons"></i>
                  <input type="text" className="form-control" placeholder="Search…" />
                </div>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name Customer</th>
                <th>Phone Customer</th>
                <th>Service</th>
                <th>Address Customer</th>
                <th>Date Start</th>
                <th>Date End</th>
                <th>Deposit</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {contracts && contracts.map((contract,index)=>(
                <tr key={contract.phoneNumber}>
                  <td>{index}</td>
                  <td>{contract.nameCustomer}</td>
                  <td>{contract.phoneNumber}</td>
                  <td>{contract.nameFacility}</td>
                  <td>{contract.addressCustomer}</td>
                  <td>{contract.dateStart}</td>
                  <td>{contract.dateEnd}</td>
                  <td>{contract.deposit}</td>
                  <td>{contract.totalPrice}</td>
                </tr>
              ))}
            </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
              <ul className="pagination">
                <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left" /></a></li>
                <li className="page-item"><a href="/#" className="page-link">1</a></li>
                <li className="page-item"><a href="/#" className="page-link">2</a></li>
                <li className="page-item active"><a href="/#" className="page-link">3</a></li>
                <li className="page-item"><a href="/#" className="page-link">4</a></li>
                <li className="page-item"><a href="/#" className="page-link">5</a></li>
                <li className="page-item"><a href="/#" className="page-link"><i className="fa fa-angle-double-right" /></a>
                </li>
              </ul>
            </div>

        
        </div>
      </div>
    </div>
  )
}
export default ManageContract;