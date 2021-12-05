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

const HealthItemsAdd = () => {
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
           
            title="Healthy Kitchen"
            breadcrumbItem="Healthy Item Add"
          />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Healthy Item Add</CardTitle>
                  <Row>
                    <Col md={6}>
                      <div className="restaurant_form">
                        <label>Item Name</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Item Name"
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
                        <label>Image of Item</label>
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


                      
                      <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                        <Button type="submit"  className="btn_custom_from_add">
                          Save Item
                        </Button>{" "}
                        <Button type="reset"  className=" btn_custom_from_yellow">
                          Cancel
                        </Button>
                      </div>

                      
                    </Col>
                    <Col md={6}>
                      <div className="restaurant_form">
                        <label>Item Price</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Item Price"
                            id="example-number-input"
                          />
                        </div>
                      </div>
                      <div className="che_boxd mb-4 mt-4">
                            <div className="vd_chek vd_box_inP">
                             
                              <lable className="pl_vl ">Enable Item</lable>
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                            </div>

                         
                          </div>

                      <div className="restaurant_form ">
                      <CardTitle className="h4 mb-4">Show Nutritional Info of this Item</CardTitle>
                      
                        <div className="boxvd_check">
                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Protein</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Sugars</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Fiber</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Fat</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>


                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Calories</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>


                          
                        </div>
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

export default HealthItemsAdd
