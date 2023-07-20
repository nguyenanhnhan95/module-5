import React from "react";
function ManageService(){
    return(
       
          
                <div className="container-xl">
                  <div className="table-responsive">
                    <div className="table-wrapper">
                      <div className="table-title">
                        <div className="row mb-3">
                          <div className="col-md-8" />
                          <div className="col-md-4" style={{textAlign: 'right'}}>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#addNewService" className="btn btn-success"><i className="material-icons"></i> <span>Add New Service</span></button>
                            {/*                  <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>                  */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-8"><h2>Service<b>Management</b></h2></div>
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
                            <th>Service Name </th>
                            <th>Usable Area</th>
                            <th>Rental Cost </th>
                            <th>Number Of People</th>
                            <th>Type Rental </th>
                            <th>Extra Service</th>
                            <th>Room Standard</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Villa</td>
                            <td>200</td>
                            <td>15000</td>
                            <td>10</td>
                            <td>Năm</td>
                            <td>Hồ Bơi</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Villa</td>
                            <td>200</td>
                            <td>15000</td>
                            <td>10</td>
                            <td>Năm</td>
                            <td>Hồ Bơi</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Villa</td>
                            <td>200</td>
                            <td>15000</td>
                            <td>10</td>
                            <td>Năm</td>
                            <td>Hồ Bơi</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Villa</td>
                            <td>200</td>
                            <td>15000</td>
                            <td>10</td>
                            <td>Năm</td>
                            <td>Hồ Bơi</td>
                            <td>Vip</td>
                            <td>
                              <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Villa</td>
                            <td>200</td>
                            <td>15000</td>
                            <td>10</td>
                            <td>Năm</td>
                            <td>Hồ Bơi</td>
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
export default ManageService;