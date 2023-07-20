import React from "react";
function ManageContract(){
    return(
                <div className="container-xl">
                  <div className="table-responsive">
                    <div className="table-wrapper">
                      <div className="table-title">
                        <div className="row mb-3">
                          <div className="col-md-8" />
                          <div className="col-md-4" style={{textAlign: 'right'}}>
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
                            <th>#</th>
                            <th>Contract Code</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Deposit</th>
                            <th>Total Payment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>15246</td>
                            <td>2021-02-27</td>
                            <td>2023-01-11</td>
                            <td>10000</td>
                            <td>2100000</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>15246</td>
                            <td>2021-02-27</td>
                            <td>2023-01-11</td>
                            <td>10000</td>
                            <td>2100000</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>15246</td>
                            <td>2021-02-27</td>
                            <td>2023-01-11</td>
                            <td>10000</td>
                            <td>2100000</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>15246</td>
                            <td>2021-02-27</td>
                            <td>2023-01-11</td>
                            <td>10000</td>
                            <td>2100000</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>15246</td>
                            <td>2021-02-27</td>
                            <td>2023-01-11</td>
                            <td>10000</td>
                            <td>2100000</td>
                          </tr>
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