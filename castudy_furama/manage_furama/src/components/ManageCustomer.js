import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteCustomers, findAllCustomersPage, getCustomers } from "../services/customerService";
import DeleteModal from "./ModalDelete";
import Swal from 'sweetalert2';
import Pagination from "./ReactPagincate";
function ManageCustomer() {
  const [customers, setCustomer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    showCustomer()
  }, [currentPage]);
  const showCustomer = () => {
    findAllCustomersPage(currentPage).then((data) => {
      console.log(data)
      if (data.length === 0) {
        setCurrentPage(currentPage - 1)
      }
      setCustomer(data)
    }).catch(() => { console.log("nhna") });

  }

  const deleteCustomer = async (id) => {
    deleteCustomers(id).then(() => {
      getCustomers().then((data) => {
        setCustomer(data)
        Swal.fire({
          icon: 'success',
          title: 'Delete success fully!!!!',
          showConfirmButton: false,
          timer: 1500
        })
      })

    })
  }
  if (customers.length === 0) {
    return null;
  }
  const handlePrevious = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }
  return (


    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row mb-3">
              <div className="col-md-8" />
              <div className="col-md-4" style={{ textAlign: 'right' }}>
                <Link to={`/newcustomer`}>
                  <button type="button" data-bs-toggle="modal" data-bs-target="#addNewService" className="btn btn-success"><i className="material-icons"></i> <span>Add New Service</span></button>
                </Link>
                {/*                  <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>                  */}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8"><h2>Customer<b>Management</b></h2></div>
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
                <th>ID</th>
                <th>Name </th>
                <th>Date</th>
                <th>Gender </th>
                <th>Phone Number</th>
                <th>Email </th>
                <th>Address </th>
                <th>Type Customer </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers && customers.map((customer) => (
                <tr key={customer.idCustomer}>
                  <td>{customer.idCustomer}</td>
                  <td>{customer.nameCustomer}</td>
                  <td>{customer.dateOfBirth}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.emailCustomer}</td>
                  <td>{customer.addressCustomer}</td>
                  <td>{customer.typeCustomer.nameTypeCustomer}</td>
                  <td>
                    <a href="/#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                    <Link to={`/editcustomer/${customer.idCustomer}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></Link>
                    <DeleteModal service={customer} delete={() => deleteCustomer(customer.idCustomer)} type="primary-btn mx-2" icon={{ name: "material-icons", show: "", color: "red" }} />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /> */}

          <div className="clearfix">
            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
            <ul className="pagination">
              <li className="page-item disabled"><a onClick={handlePrevious}><i className="fa fa-angle-double-left" /></a></li>
                <li className="page-item"><a href="/#" className="page-link">1</a></li>
                <li className="page-item"><a href="/#" className="page-link">2</a></li>
                <li className="page-item active"><a href="/#" className="page-link">3</a></li>
                <li className="page-item"><a href="/#" className="page-link">4</a></li>
                <li className="page-item"><a href="/#" className="page-link">5</a></li>
                <li className="page-item"><a onClick={handleNext} className="page-link"><i className="fa fa-angle-double-right" /></a>
              </li>
            </ul>
          </div>
    
        </div>
      </div>
    </div >
  );

}
export default ManageCustomer;