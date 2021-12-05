import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Card,
  CardBody,
  Col,
  Row,
  Form,
  CardTitle,
  Button,
  Container,
  Label,
  Input,
} from "reactstrap"
import Select from "react-select"
import Dropzone from "react-dropzone"
import { Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AddEmployees = () => {
  const [customchk, setcustomchk] = useState(true)
  const [customchkPrimary, setcustomchkPrimary] = useState(true)
  const [customchkSuccess, setcustomchkSuccess] = useState(true)
  const [customchkInfo, setcustomchkInfo] = useState(true)
  const [customchkWarning, setcustomchkWarning] = useState(true)
  const [customchkDanger, setcustomchkDanger] = useState(true)
  const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true)
  const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true)
  const [customOutlineInfo, setcustomOutlineInfo] = useState(true)
  const [customOutlineWarning, setcustomOutlineWarning] = useState(true)
  const [customOutlineDanger, setcustomOutlineDanger] = useState(true)
  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)

  const [selectedFiles, setselectedFiles] = useState([])

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

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

  const [selectedGroup, setselectedGroup] = useState(null)

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Elements | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            title="Employees Management"
            breadcrumbItem="Add Employees"
          />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Add Employees</CardTitle>
                  <Row>
                    <Col md={6}>
                      <div className="restaurant_form">
                        <label>First Name</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form">
                        <label>Email Address</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form">
                        <label> Password</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      
                     
                    </Col>
                    <Col md={6}>
                    <div className="restaurant_form">
                        <label>Last Name</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="restaurant_form ">
                        <label>Phone Number</label>
                        <div className="input_resaurant_box">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form">
                        <label>Confirm Password</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>

                     

                     
                      

                      
                    </Col>

                    <Col xl={12}>
                    <div className="restaurant_form pt-3">
                    <CardTitle className="h4 mb-4">Give Access for the Following Modules</CardTitle>
                    <Row>
                        <Col md={4}>
                             <div className="restaurant_form ">
                       
                        <div className="boxvd_check">
                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          
                        </div>
                      </div>

                        </Col>


                        <Col md={4}>
                             <div className="restaurant_form ">
                       
                        <div className="boxvd_check">
                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          
                        </div>
                      </div>

                        </Col>


                        <Col md={4}>
                             <div className="restaurant_form ">
                       
                        <div className="boxvd_check">
                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP vpx_width">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Order Management</span>
                            </div>

                            
                          </div>


                          
                        </div>
                      </div>


                     

                        </Col>
                        <Col>
                        <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                        <Button type="submit"  className="btn_custom_from_add">
                         Add Employees
                        </Button>{" "}
                        <Button type="reset"  className=" btn_custom_from_yellow">
                          Cancel
                        </Button>
                      </div></Col>

                  
                    </Row>
                    </div>
                   </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AddEmployees
