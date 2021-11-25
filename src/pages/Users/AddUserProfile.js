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
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

const AddUserProfile = () => {
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
                        <label> Address</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Address"
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
                        <label>Total Purchases Made</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Total Purchases"
                          />
                        </div>
                      </div>

                     

                     
                      

                      
                    </Col>

                    <Col xl={12}>
                    <div className="restaurant_form pt-3">
                    {/* <CardTitle className="h4 mb-4">Give Access for the Following Modules</CardTitle> */}
                    <Row>
                        <Col md={4}>
                        <div className="restaurant_form2p ">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="dd M,yyyy" />
                      </div>

                      <div className="restaurant_form mt-3">
                        <label>Photograph</label>
                        <Form>
                          <Dropzone
                            onDrop={acceptedFiles => {
                              handleAcceptedFiles(acceptedFiles)
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div className="dropzone dropzone_cutome">
                                <div
                                  className="dz-message dz-message22 needsclick"
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />
                                  <div className="mb-3">
                                    <i className="mdi mdi-cloud-upload display-4 text-muted"></i>
                                  </div>
                                  <h4>Drop files here or click to upload.</h4>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          >
                            {selectedFiles.map((f, i) => {
                              return (
                                <Card
                                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                  key={i + "-file"}
                                >
                                  <div className="p-2">
                                    <Row className="align-items-center">
                                      <Col className="col-auto">
                                        <img
                                          data-dz-thumbnail=""
                                          height="80"
                                          className="avatar-sm rounded bg-light"
                                          alt={f.name}
                                          src={f.preview}
                                        />
                                      </Col>
                                      <Col>
                                        <Link
                                          to="#"
                                          className="text-muted font-weight-bold"
                                        >
                                          {f.name}
                                        </Link>
                                        <p className="mb-0">
                                          <strong>{f.formattedSize}</strong>
                                        </p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Card>
                              )
                            })}
                          </div>
                        </Form>
                      </div>


                        </Col>


                        <Col md={8}>
                       
                
                 

                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th>Order ID</Th>
                            <Th >Order Item</Th>
                            <Th >Purchase Value</Th>
                            
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th></Th>
                            <Td></Td>
                            <Td></Td>
                            
                          </Tr>


                          <Tr>
                            <Th></Th>
                            <Td></Td>
                            <Td></Td>
                            
                          </Tr>
                          <Tr>
                            <Th></Th>
                            <Td></Td>
                            <Td></Td>
                            
                          </Tr>


                          <Tr>
                            <Th></Th>
                            <Td></Td>
                            <Td></Td>
                            
                          </Tr>
                          
                        </Tbody>
                      </Table>
                    </div>
                    </div>
             
                        </Col>


                       
                        <Col>
                        <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                        <Button type="submit" color="primary" className="">
                        Create New Item
                        </Button>{" "}
                        <Button type="reset" color="secondary" className="">
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

export default AddUserProfile
