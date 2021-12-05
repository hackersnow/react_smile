import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import user2 from "../../assets/images/users/user-2.jpg"
import "../../assets/scss/custom/pages/_dispacher.scss"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap"

import classnames from "classnames"
import Order_Details from "./Order_Details"

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
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(25)
        }
        if (tab === 2) {
          setprogressValue(50)
        }
        if (tab === 3) {
          setprogressValue(75)
        }
        if (tab === 4) {
          setprogressValue(100)
        }
      }
    }
  }

  const [singlebtn, setSinglebtn] = useState(false)

  return (
    <React.Fragment>
    
      <div className="page-content">
        <MetaTags>
          <title>
            Form Wizard | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
        <Breadcrumbs title="Dispacher" breadcrumbItem="Dispacher Order" />

          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    <div className="steps clearfix steps2">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                          >
                            New Orders
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2)
                            }}
                          >
                            Accepted Orders
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 3 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3)
                            }}
                          >
                            Ongoing Orders
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 4 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              setactiveTab(4)
                            }}
                          >
                            Orders History
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>

                    {/* Tab 1  */}

                    <div className="content clearfix">
                      <TabContent activeTab={activeTab} className="body">
                        <TabPane tabId={1}>
                          <Row>
                            <Col lg={6}>
                              <div className="new_order_container">
                                <div className="new_titile">
                                  <h4>Fresh Orders</h4>
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
                                          <span className="btn_custom_yellow btn_custom_All"
                                            onClick={() => {
                                              setmodal_large(true)
                                            }}
                                          >
                                            Order Details
                                          </span>
                                             <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Assign Order
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Request for Change
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All" onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Assign Order
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Request for Change
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All" onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Assign Order
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Request for Change
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All" onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Assign Order
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Request for Change
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All" onClick={() => {
                                              setmodal_large(true)
                                            }}>
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Assign Order
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Request for Change
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>

                            {/* tab 1 part2 */}

                            <Col lg={6}>
                              <div className="map_container_ord">
                                <div className="right_custom_v">
                                  <Dropdown
                                    isOpen={singlebtn}
                                    toggle={() => setSinglebtn(!singlebtn)}
                                  >
                                    <DropdownToggle
                                      className="btn btn-secondary"
                                      caret
                                    >
                                      20/06/2020{" "}
                                      <i className="mdi mdi-chevron-down" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>
                                        Another action
                                      </DropdownItem>
                                      <DropdownItem>
                                        Something else here
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                                <div className="map_box_con">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55989.529077368636!2d77.08820488189164!3d28.709216971987512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e4!4m0!4m5!1s0x390d015fc7285ae3%3A0x6b0d619671ba366f!2sADMEC%20Multimedia%20Training%20Institute%2C%20C-9%2F15%2C%203rd%20Floor%20Opposite%20Metro%20Pillar%20No%20399%20Near%20Rohini%20East%20Metro%20Station%2C%20Sector%207%2C%20Rohini%2C%20Delhi%2C%20Delhi!3m2!1d28.7091462!2d77.12322449999999!5e0!3m2!1sen!2sin!4v1637421670874!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowfullscreen=""
                                    loading="lazy"
                                  ></iframe>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId={2}>
                          <Row>
                            <Col lg={6}>
                              <div className="new_order_container">
                                <div className="new_titile">
                                  <h4>Accepted Orders</h4>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Dispute
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Delivery Guy Picked Up
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Dispute
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Delivery Guy Picked Up
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Dispute
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Delivery Guy Picked Up
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Dispute
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Delivery Guy Picked Up
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Dispute
                                      </span>
                                     <span className="btn_custom_yellow btn_custom_All">
                                        Delivery Guy Picked Up
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>

                            {/* tab 1 part2 */}

                            <Col lg={6}>
                              <div className="map_container_ord">
                                <div className="right_custom_v">
                                  <Dropdown
                                    isOpen={singlebtn}
                                    toggle={() => setSinglebtn(!singlebtn)}
                                  >
                                    <DropdownToggle
                                      className="btn btn-secondary"
                                      caret
                                    >
                                      20/06/2020{" "}
                                      <i className="mdi mdi-chevron-down" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>
                                        Another action
                                      </DropdownItem>
                                      <DropdownItem>
                                        Something else here
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                                <div className="map_box_con">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55989.529077368636!2d77.08820488189164!3d28.709216971987512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e4!4m0!4m5!1s0x390d015fc7285ae3%3A0x6b0d619671ba366f!2sADMEC%20Multimedia%20Training%20Institute%2C%20C-9%2F15%2C%203rd%20Floor%20Opposite%20Metro%20Pillar%20No%20399%20Near%20Rohini%20East%20Metro%20Station%2C%20Sector%207%2C%20Rohini%2C%20Delhi%2C%20Delhi!3m2!1d28.7091462!2d77.12322449999999!5e0!3m2!1sen!2sin!4v1637421670874!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowfullscreen=""
                                    loading="lazy"
                                  ></iframe>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>

                        {/* Tab 3 */}
                        <TabPane tabId={3}>
                          <Row>
                            <Col lg={6}>
                              <div className="new_order_container">
                                <div className="new_titile">
                                  <h4>Ongoing Orders</h4>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Transit
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Transit
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Transit
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Transit
                                      </span>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btn_contt_order btn_contt_order3">
                                         <span className="btn_custom_green btn_custom_All">
                                        Transit
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>

                            {/* tab 1 part2 */}

                            <Col lg={6}>
                              <div className="map_container_ord">
                                <div className="right_custom_v">
                                  <Dropdown
                                    isOpen={singlebtn}
                                    toggle={() => setSinglebtn(!singlebtn)}
                                  >
                                    <DropdownToggle
                                      className="btn btn-secondary"
                                      caret
                                    >
                                      20/06/2020{" "}
                                      <i className="mdi mdi-chevron-down" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>
                                        Another action
                                      </DropdownItem>
                                      <DropdownItem>
                                        Something else here
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                                <div className="map_box_con">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55989.529077368636!2d77.08820488189164!3d28.709216971987512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e4!4m0!4m5!1s0x390d015fc7285ae3%3A0x6b0d619671ba366f!2sADMEC%20Multimedia%20Training%20Institute%2C%20C-9%2F15%2C%203rd%20Floor%20Opposite%20Metro%20Pillar%20No%20399%20Near%20Rohini%20East%20Metro%20Station%2C%20Sector%207%2C%20Rohini%2C%20Delhi%2C%20Delhi!3m2!1d28.7091462!2d77.12322449999999!5e0!3m2!1sen!2sin!4v1637421670874!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowfullscreen=""
                                    loading="lazy"
                                  ></iframe>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId={4}>
                          <Row>
                            <Col lg={6}>
                              <div className="new_order_container">
                                <div className="new_titile">
                                  <h4>Cancelled Orders</h4>
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
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
                                           <span className="btn_custom_yellow btn_custom_All">
                                            Order Details
                                          </span>
                                            <span className="btn_custom_blue btn_custom_All">
                                            Message
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
                              <div className="map_container_ord">
                                <div className="right_custom_v">
                                  <Dropdown
                                    isOpen={singlebtn}
                                    toggle={() => setSinglebtn(!singlebtn)}
                                  >
                                    <DropdownToggle
                                      className="btn btn-secondary"
                                      caret
                                    >
                                      20/06/2020{" "}
                                      <i className="mdi mdi-chevron-down" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>
                                        Another action
                                      </DropdownItem>
                                      <DropdownItem>
                                        Something else here
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                                </div>
                                <div className="map_box_con">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55989.529077368636!2d77.08820488189164!3d28.709216971987512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e4!4m0!4m5!1s0x390d015fc7285ae3%3A0x6b0d619671ba366f!2sADMEC%20Multimedia%20Training%20Institute%2C%20C-9%2F15%2C%203rd%20Floor%20Opposite%20Metro%20Pillar%20No%20399%20Near%20Rohini%20East%20Metro%20Station%2C%20Sector%207%2C%20Rohini%2C%20Delhi%2C%20Delhi!3m2!1d28.7091462!2d77.12322449999999!5e0!3m2!1sen!2sin!4v1637421670874!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowfullscreen=""
                                    loading="lazy"
                                  ></iframe>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
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
