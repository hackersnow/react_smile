import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import logoSm from "../../assets/images/logo-sm.png";
import { Link } from "react-router-dom"
import user2 from "../../assets/images/users/user-2.jpg"
import "../../assets/scss/custom/pages/_dispacher.scss"

import "../../assets/scss/custom/pages/_all_page_text_bg.scss"

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Modal,
  Container,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Order_Details = (props) => {


  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col sm={6} md={4} xl={3}>
            
            <Modal
              size="lg"
              isOpen={props.show}
              toggle={() => {
                props.closevc()
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myLargeModalLabel">
                Order Details
                </h5>
                <button
                  onClick={() => {
                    props.closevc()
                  }}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
               {/* start */}
               <Card>
                <CardBody>
                  <Row>
                    <div className="col-12">
                      <div className="invoice-title">
                        <h4 className="float-end font-size-16">
                          <strong>Order # 12345</strong>
                        </h4>
                        <h3 className="mt-0">
                          <img src={logoSm} alt="logo" height="24" />
                        </h3>
                      </div>
                      <hr />
                      <div class="box_order_details">
                          <div class="o_flex d-flex">
                              <h4>Order Id</h4>
                              <span>: #13232</span>
                          </div>

                          <div class="o_flex d-flex">
                              <h4>Restaurant Name</h4>
                              <span>: Thaamboolam on Wheels</span>
                          </div>

                          <div class="o_flex d-flex">
                              <h4>Customer Name</h4>
                              <span>: Mr.Customer Name</span>
                          </div>

                          <div class="o_flex d-flex">
                              <h4>Address</h4>
                              <span>: Flat 33, Street, Area, City-57584, India</span>
                          </div>

                          <div class="o_flex d-flex">
                              <h4>Phone Number</h4>
                              <span>: +91 9884838383</span>
                          </div>

                          <div class="o_flex d-flex">
                              <h4>Order Date</h4>
                              <span>: 2020-06-19 12:00:00</span>
                          </div>

                          <div class="o_flex d-flex">
                              <h4>Note</h4>
                              <span>: -----</span>
                          </div>

                          <div class="o_flex d-flex">
                              <h4>Total Amount</h4>
                              <span>: $958.00</span>
                          </div>

                      
                      </div>



                      <div class="box_order_details">
                          <div class="o_flex d-flex">
                              <h4>Status</h4>
                              <h4>Time</h4>
                          </div>

                          <div class="o_flex o_flex_VC d-flex">
                              <span>ORDERED</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>
                          <div class="o_flex o_flex_VC d-flex">
                              <span>RECEIVED</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>

                          <div class="o_flex o_flex_VC d-flex">
                              <span>Requestchange</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>

                          <div class="o_flex o_flex_VC d-flex">
                              <span>neworder</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>

                          <div class="o_flex o_flex_VC d-flex">
                              <span>received</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>

                          <div class="o_flex o_flex_VC d-flex">
                              <span>Assigned</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>

                          <div class="o_flex o_flex_VC d-flex">
                              <span>pickedup</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>

                          <div class="o_flex o_flex_VC d-flex">
                              <span>Delivery</span>
                              <span>: 2020-06-20 14:45:32</span>
                          </div>
                          

                      
                      </div>
                      
                    </div>
                  </Row>

                  <Row>
                    <div className="col-12">
                      <div>
                        
                        <div className="">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                 <th>Product Image</th>
                                 <th>Product Name</th>
                                 <th>Qty</th>
                                
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><img src={user2} alt="" className="vd_avtar"/></td>
                                  <td >Salad</td>
                                  <td >1</td>
                                  
                                </tr>


                                {/* Totle */}
                                <tr>
                                  <td colspan="3">
                                      <div className="box_vc__vckss">
                                            <div className="box_vc d-flex">
                                                <h4 className="price_vd">Discount</h4>
                                                <span className="prisc_d">$12</span>
                                            </div>

                                            <div className="box_vc d-flex">
                                                <h4 className="price_vd">Delivery Charge</h4>
                                                <span className="prisc_d">$124</span>
                                            </div>

                                            <div className="box_vc d-flex">
                                                <h4 className="price_vd">Tax</h4>
                                                <span className="prisc_d">$144</span>
                                            </div>

                                            <div className="box_vc d-flex">
                                                <h4 className="price_vd dv-dcc">Total </h4>
                                                <span className="prisc_d  dv-dcc">$1355</span>
                                            </div>
                                      </div>
                                      
                                  </td>
                                
                                  
                                </tr>
                               
                               
                              </tbody>
                            </table>
                          </div>

                          <div className="d-print-none">
                            <div className="float-end">
                              {/* <Link
                                to="#"
                                onClick={() => {
                                  window.print();
                                }}
                                className="btn btn-success waves-effect waves-light"
                              >
                                <i className="fa fa-print"></i>
                              </Link>{" "}
                              */}

                              <Link
                                to="#"
                                className="btn btn-primary waves-effect waves-light "
                              >
                               Update
                              </Link>

                              <Link
                                to="#"
                                className="btn btn-primary waves-effect waves-light md_d"
                              >
                                Assign

                              </Link>

                              <Link
                                to="#"
                                className="btn btn-primary waves-effect waves-light"  onClick={() => {
                                    props.closevc()
                                  }}
                              >
                                Close

                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>

               {/* End */}
              </div>
            </Modal>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Order_Details
