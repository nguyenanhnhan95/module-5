import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(        
                <header className="header-section">
                  <div className="top-nav">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="tn-left">
                            <li><i className="fa fa-phone" /> (12) 345 67890</li>
                            <li><i className="fa fa-envelope" /> furama@gmail.com</li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="tn-right">
                            <div className="top-social">
                              <a href="/#"><i className="fa fa-facebook" /></a>
                              <a href="/#"><i className="fa fa-twitter" /></a>
                              <a href="/#"><i className="fa fa-tripadvisor" /></a>
                              <a href="/#"><i className="fa fa-instagram" /></a>
                            </div>
                            <a href="/#" className="bk-btn">Booking Now</a>
                            <div className="language-option">
                              <img src="img/imgvietnam.jpg" alt="" />
                              <span>VN</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="logo">
                              <a href="./index.html">
                                <img src="img/logofurama.jpg" alt="" height={43} width={101} /></a>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="nav-menu">
                              <nav className="mainmenu">
                                <ul>
                                  {/* <li className="active"><a href="./index.html">Home</a></li> */}
                                  <li><Link to="/">Home</Link></li>
                                  <li><Link to="/">Management </Link>
                                    <ul className="dropdown">
                                    
                                      <li><Link to="/services">Service </Link></li>
                                      <li><Link to="/contracts">Contract</Link></li>
                                      <li><Link to="/customers">Customer</Link></li>
                                    </ul>
                                  </li>
                                  <li><a href="./blog.html">News</a></li>
                                  <li><a href="./about-us.html">About Us</a></li>
                                  <li><a href="./contact.html">Contact</a></li>
                                </ul>
                              </nav>
                              <div className="nav-right search-switch">
                                <i className="icon_search" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></header>
        
    )
}
export default Header;