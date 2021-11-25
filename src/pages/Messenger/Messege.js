import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import user2 from "../../assets/images/users/user-2.jpg"
import "../../assets/scss/custom/pages/_dispacher.scss"
import {
  Card,
  CardBody,
  Col,
  Container,
  
  Input,
  
  Button,
  Row,
  
} from "reactstrap"




import user3 from "../../assets/images/users/user-3.jpg";

import smimg1 from "../../assets/images/small/img-1.jpg";
import smimg2 from "../../assets/images/small/img-2.jpg";
// Custom Scrollbar
import SimpleBar from "simplebar-react";

import classnames from "classnames"
import Order_Details from "../Dispacher/Order_Details"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Dispacher_oder = () => {

  const [modal_large, setmodal_large] = useState(false)

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

    function tog_large() {
      setmodal_large(false)
      removeBodyCss()
    }
  

  

 

//   const [singlebtn, setSinglebtn] = useState(false)

  return (
    <React.Fragment>
    
      <div className="page-content">
        <MetaTags>
          <title>
            Form Wizard | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
        <Breadcrumbs title="Massenger" breadcrumbItem="Messege" />

          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    


                    <div className="content clearfix">
                     
                          <Row>
                            <Col lg={6}>
                              <div className="new_order_container">
                                <div className="new_titile">
                                  <h4>Messanger</h4>
                                </div>

                                <div className="new_order_box_r">
                                  <div className="new_order_inner_box d-flex">
                                    <div className="new_order_box_1 d-flex">
                                      <img src={user2} alt="" />
                                      <div className="avtar_order_details">
                                        <h4>Order ID - 12345</h4>
                                        <span className="vpx_cooo">
                                          Ms. Customer Name
                                        </span>
                                        <a href="#">+91 98765 543211</a>

                                        <div className="btn_contt_order btn_contt_order2">
                                          <span
                                            className="  btn-warning btn-sm"
                                            onClick={() => {
                                              setmodal_large(true)
                                            }}
                                          >
                                            Order Details
                                          </span>
                                         
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>

                                  <div className="new_order_inner_box d-flex">
                                    <div className="new_order_box_1 d-flex">
                                      <img src={user2} alt="" />
                                      <div className="avtar_order_details">
                                        <h4>Order ID - 12345</h4>
                                        <span className="vpx_cooo">
                                          Ms. Customer Name
                                        </span>
                                        <a href="#">+91 98765 543211</a>

                                        <div className="btn_contt_order btn_contt_order2">
                                          <span className="  btn-warning btn-sm"  onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                         
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>

                                  <div className="new_order_inner_box d-flex">
                                    <div className="new_order_box_1 d-flex">
                                      <img src={user2} alt="" />
                                      <div className="avtar_order_details">
                                        <h4>Order ID - 12345</h4>
                                        <span className="vpx_cooo">
                                          Ms. Customer Name
                                        </span>
                                        <a href="#">+91 98765 543211</a>

                                        <div className="btn_contt_order btn_contt_order2">
                                          <span className="  btn-warning btn-sm"  onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                         
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>

                                  <div className="new_order_inner_box d-flex">
                                    <div className="new_order_box_1 d-flex">
                                      <img src={user2} alt="" />
                                      <div className="avtar_order_details">
                                        <h4>Order ID - 12345</h4>
                                        <span className="vpx_cooo">
                                          Ms. Customer Name
                                        </span>
                                        <a href="#">+91 98765 543211</a>

                                        <div className="btn_contt_order btn_contt_order2">
                                          <span className="  btn-warning btn-sm"  onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                         
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>

                                  <div className="new_order_inner_box d-flex">
                                    <div className="new_order_box_1 d-flex">
                                      <img src={user2} alt="" />
                                      <div className="avtar_order_details">
                                        <h4>Order ID - 12345</h4>
                                        <span className="vpx_cooo">
                                          Ms. Customer Name
                                        </span>
                                        <a href="#">+91 98765 543211</a>

                                        <div className="btn_contt_order btn_contt_order2">
                                          <span className="  btn-warning btn-sm"  onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                         
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                            </Col>

                            {/* tab 1 part2 */}

                            <Col lg={6}>
                            <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Chat</h4>
                  <div className="chat-conversation">
                    <SimpleBar style={{ height: "365px" }}>
                      <ul
                        className="conversation-list"
                        data-simplebar
                        style={{ maxHeight: "367px" }}
                      >
                        <li className="clearfix">
                          <div className="chat-avatar">
                            <img
                              src={user2}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:00</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">John Deo</span>
                              <p>Hello!</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="Female"
                            />
                            <span className="time">10:01</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">Smith</span>
                              <p>
                                Hi, How are you? What about our next meeting?
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <div className="chat-avatar">
                            <img
                              src={user2}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:04</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">John Deo</span>
                              <p>Yeah everything is fine</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:05</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">Smith</span>
                              <p>Wow that's great</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:08</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name mb-2">Smith</span>

                              <img
                                src={smimg1}
                                alt=""
                                height="48"
                                className="rounded me-2"
                              />
                              <img
                                src={smimg2}
                                alt=""
                                height="48"
                                className="rounded"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </SimpleBar>

                    <Row className="mt-3 pt-1">
                      <Col md="9" className="chat-inputbar col-8">
                        <Input
                          type="text"
                          className="chat-input"
                          placeholder="Enter your text"
                        />
                      </Col>
                      <Col md="3" className="chat-send col-4">
                        <div className="d-grid">
                          <Button
                            type="submit"
                            color="success"
                            className="btn-block"
                          >
                            Send
                        </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
                            </Col>
                          </Row>
                      
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
{/* module_order */}
      <Order_Details show={modal_large} closevc={tog_large} />
    </React.Fragment>
  )
}

export default Dispacher_oder
