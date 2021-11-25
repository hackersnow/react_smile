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
import Dropzone from "react-dropzone"
import { Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const RestaurantAddition = () => {
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
           
            title="Restaurant"
            breadcrumbItem="Restaurant Addition"
          />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Add New Restaurant</CardTitle>
                  <Row>
                    <Col md={6}>
                      <div className="restaurant_form">
                        <label>Restaurant Name</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Restaurant Name"
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
                        <Label>Description </Label>
                        <Input
                          type="textarea"
                          id="formmessage"
                          className="form-control"
                          rows="2"
                          placeholder="Description of Restaurant  "
                        />
                      </div>

                      <div className="restaurant_form">
                        <label>Location</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Latitude, Longitude"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form">
                        <label>Status</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Active, Stopped, Banned"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form">
                        <label>Restaurant Logo</label>
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

                      <div class="restaurant_form">
                        <label>Restaurant Timing</label>

                        <div className="tiom_dfle_d d-flex">
                          <div className="restaurant_form urant_form_x">
                            <span>Restaurant Opens</span>
                            <div className="input_resaurant_box">
                              <input
                                className="form-control"
                                type="time"
                                defaultValue="00:00:00"
                                id="example-time-input"
                              />
                            </div>
                          </div>

                          <div className="restaurant_form urant_form_x">
                            <span>Restaurant Close</span>
                            <div className="input_resaurant_box">
                              <input
                                className="form-control"
                                type="time"
                                defaultValue="00:00:00"
                                id="example-time-input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="restaurant_form ">
                        <label>Restaurant Close</label>

                        <div className="input_resaurant_box22 d-flex">
                          <div className="vd_chek box_ve_che">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />
                            <span>Every Day</span>
                          </div>
                          <div class="ceh_ve_container d-flex">
                            <div class="box_ve_che">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Mon</span>
                            </div>

                            <div class="box_ve_che">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Tue</span>
                            </div>

                            <div class="box_ve_che">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Wed</span>
                            </div>


                            <div class="box_ve_che">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Thu</span>
                            </div>


                            <div class="box_ve_che">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Fri</span>
                            </div>

                            <div class="box_ve_che">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Sat</span>
                            </div>

                            <div class="box_ve_che">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Sun</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="restaurant_form">
                        <label>Minimum Amount</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Order Minimum Amount"
                            id="example-number-input"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form ">
                        <label>Estimated Delivery Time</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="time"
                            id="example-time-input"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form ">
                        <Label>Address </Label>
                        <Input
                          type="textarea"
                          id="formmessage"
                          className="form-control"
                          rows="4"
                          placeholder="Address"
                        />
                      </div>

                      <div class="map_box_res">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55989.529077368636!2d77.08820488189164!3d28.709216971987512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e4!4m0!4m5!1s0x390d015fc7285ae3%3A0x6b0d619671ba366f!2sADMEC%20Multimedia%20Training%20Institute%2C%20C-9%2F15%2C%203rd%20Floor%20Opposite%20Metro%20Pillar%20No%20399%20Near%20Rohini%20East%20Metro%20Station%2C%20Sector%207%2C%20Rohini%2C%20Delhi%2C%20Delhi!3m2!1d28.7091462!2d77.12322449999999!5e0!3m2!1sen!2sin!4v1637421670874!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe>
                      </div>

                      <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                        <Button type="submit" color="primary" className="">
                          Create Restaurant
                        </Button>{" "}
                        <Button type="reset" color="secondary" className="">
                          Cancel
                        </Button>
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

export default RestaurantAddition
