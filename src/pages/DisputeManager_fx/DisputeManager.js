import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Input,
  CardSubtitle,
} from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/custom/pages/_all_pages.scss"
import { Link } from "react-router-dom"
import Select from "react-select"

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
]

const DisputeManager = () => {
  const [selectedGroup, setselectedGroup] = useState(null)

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Responsive Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            title="Dispute Manage_fx"
            breadcrumbItem="Dispute Manager"
          />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <div className=" sub_btn_box">
                    <CardTitle className="h4">Dispute Manager </CardTitle>
                    {/* <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                    >
                       <Link to="/AddSubscripton"> Add Meal Package</Link>
                    
                    </Button>{" "} */}
                  </div>

                  <Row>
                    <Col md={4}>
                      <div className="box_catrd_xf">
                        <h4>Cancelled</h4>
                        <div className="box_sub_card">
                          <div className="box_sub_inner">
                            <h5>Person Name</h5>
                            <span>Order ID : 12345</span>
                          </div>
                          <button className="btn_custom_yellow btn_custom_All">
                            Order Details
                          </button>
                        </div>

                        <div className="box_sub_card">
                          <div className="box_sub_inner">
                            <h5>Person Name</h5>
                            <span>Order ID : 12345</span>
                          </div>
                          <button className="btn_custom_yellow btn_custom_All">
                            Order Details
                          </button>
                        </div>

                        <div className="box_sub_card">
                          <div className="box_sub_inner">
                            <h5>Person Name</h5>
                            <span>Order ID : 12345</span>
                          </div>
                          <button className="btn_custom_yellow btn_custom_All">
                            Order Details
                          </button>
                        </div>

                        <div className="box_sub_card">
                          <div className="box_sub_inner">
                            <h5>Person Name</h5>
                            <span>Order ID : 12345</span>
                          </div>
                          <button className="btn_custom_yellow btn_custom_All">
                            Order Details
                          </button>
                        </div>

                        <div className="box_sub_card">
                          <div className="box_sub_inner">
                            <h5>Person Name</h5>
                            <span>Order ID : 12345</span>
                          </div>
                          <button className="btn_custom_yellow btn_custom_All">
                            Order Details
                          </button>
                        </div>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="box_catrd_xf">
                        <h4>Order Details</h4>

                        <div className="box_sub_cardx">
                          <div className="box_sub_inner">
                            <h5>Customer Name</h5>
                            <span>Customer Name</span>
                          </div>

                          <div className="box_sub_inner">
                            <h5>Delivery Person Name</h5>
                            <span>Delivery Person Name</span>
                          </div>

                          <div className="box_sub_inner">
                            <h5>Restaurant</h5>
                            <span>Restaurant</span>
                          </div>
                          <div className="box_sub_inner">
                            <h5>Order Date</h5>
                            <span>12:44PM 10/10/2020</span>
                          </div>

                          <div className="box_sub_inner">
                            <h5>Address</h5>
                            <span>Customer Address</span>
                          </div>

                
                          <button className="btn_custom_from_x btn_custom2 mt-2">
                            Chat with Customer
                          </button>
                        </div>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="box_catrd_xf">
                        <h4>Order Details</h4>

                        <div className="box_sub_cardx">
                          <div className="box_sub_inner">
                            <h5>Order Status</h5>
                            <div className="input_box_sub input_box_subxp">
                              <Select
                                value={selectedGroup}
                                onChange={() => {
                                  handleSelectGroup()
                                }}
                                options={optionGroup}
                                classNamePrefix="select2-selection "
                              />
                            </div>
                            <button className="btn_custom_from_x mt-2">
                            Change Status
                            </button>
                          </div>

                          <div className="box_sub_inner">
                            <h5>Refund</h5>
                            <div className="input_box_sub">
                              <Input
                                type="text"
                                name="placement"
                                id="placement"
                                placeholder="Add Meal Package Name"
                              />
                            </div>
                            <button className="btn_custom_from_x mt-2">
                            Add Refund
                            </button>
                          </div>

                          <div className="box_sub_inner">
                            <h5>Complaint Status</h5>
                            <div className="input_box_sub input_box_subxp">
                              <Select
                                value={selectedGroup}
                                onChange={() => {
                                  handleSelectGroup()
                                }}
                                options={optionGroup}
                                classNamePrefix="select2-selection "
                              />
                            </div>

                            <button className="btn_custom_from_x mt-2">
                            Change Status
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DisputeManager
