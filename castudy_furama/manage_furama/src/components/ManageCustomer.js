import React from "react";
import { Link } from "react-router-dom";
function ManageCustomer(){
    return(
    
          
                <div className="container-xl">
                  <div className="table-responsive">
                    <div className="table-wrapper">
                      <div className="table-title">
                        <div className="row mb-3">
                          <div className="col-md-8" />
                          <div className="col-md-4" style={{textAlign: 'right'}}>
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
                            <th>#</th>
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
                          <tr>
                            <td>1</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>1995-07-29</td>
                            <td>Nam</td>
                            <td>0124526857</td>
                            <td>nuyenanhnhan@gmail.com</td>
                            <td>Đà Nẵng</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <Link to={`/editcustomer/${1}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></Link>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>1995-07-29</td>
                            <td>Nam</td>
                            <td>0124526857</td>
                            <td>nuyenanhnhan@gmail.com</td>
                            <td>Đà Nẵng</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>1995-07-29</td>
                            <td>Nam</td>
                            <td>0124526857</td>
                            <td>nuyenanhnhan@gmail.com</td>
                            <td>Đà Nẵng</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>1995-07-29</td>
                            <td>Nam</td>
                            <td>0124526857</td>
                            <td>nuyenanhnhan@gmail.com</td>
                            <td>Đà Nẵng</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>1995-07-29</td>
                            <td>Nam</td>
                            <td>0124526857</td>
                            <td>nuyenanhnhan@gmail.com</td>
                            <td>Đà Nẵng</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="clearfix">
                        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                        <ul className="pagination">
                          <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left" /></a></li>
                          <li className="page-item"><a href="#" className="page-link">1</a></li>
                          <li className="page-item"><a href="#" className="page-link">2</a></li>
                          <li className="page-item active"><a href="#" className="page-link">3</a></li>
                          <li className="page-item"><a href="#" className="page-link">4</a></li>
                          <li className="page-item"><a href="#" className="page-link">5</a></li>
                          <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
  
}
export default ManageCustomer;